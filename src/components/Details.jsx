import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { watchListActions } from '@store/watchlist-slice'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { styled as styledMUI } from '@mui/system'

import { fetchDetailsFromId } from '@util/http'
import Container from '@components/UI/Container'
import Loader from '@components/UI/Loader'
import ErrorBlock from '@components/UI/ErrorBlock'
import { MotionContainer } from '@components/UI/MotionContainer'
import { OpacityMotionContainer } from '@components/UI/MotionContainer'
import ReactPlayer from 'react-player'
import ErrorPage from '@pages/Error'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded'

import { auth } from '../firebase'

const Details = ({ type }) => {
	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}

		scrollToTop()
	}, [])

	const navigate = useNavigate()
	const backToPreviousPageHandler = () => {
		navigate(-1)
	}

	const [videoIsVisible, setVideoIsVisible] = useState(false)

	const videoHandler = () => {
		setVideoIsVisible(prevState => !prevState)
	}

	const closeVideoHandler = () => {
		setVideoIsVisible(false)
	}

	const params = useParams()
	const id = params.id
	const { data, isPending, isError } = useQuery({
		queryKey: [`${type}-data`, id],
		queryFn: ({ signal }) => fetchDetailsFromId({ signal, detailsId: id, resourceType: type }),
	})

	const dispatch = useDispatch()
	const watchList = useSelector(state => state.watchList.resources)
	const isAddedToWatchList = watchList.find(item => item.detailsId === id && item.userId === auth.currentUser.uid)

	let resourceType = ''

	if (type === 'movie') {
		resourceType = 'movie'
	} else if (type === 'tv') {
		resourceType = 'series'
	}

	const addToWatchListHandler = () => {
		const userId = auth.currentUser.uid

		dispatch(
			watchListActions.addResourceToList({
				userId,
				id,
				type: resourceType,
				path: data.posterPath,
				title: data.title,
			})
		)
	}

	const removeFromWatchListHandler = () => {
		dispatch(watchListActions.removeResourceFromList(id))
	}

	let backdropUrl = ''
	let logoUrl = ''
	let releaseDate = ''
	let releaseYear = ''
	let numberOfSeasons = ''
	let genres = ''
	let overview = ''
	let videoUrl = ''

	if (data) {
		backdropUrl =
			data.backdrops && data.backdrops.length > 0
				? `https://image.tmdb.org/t/p/original${data.backdrops[0].file_path}`
				: data.backdrops
				? `https://image.tmdb.org/t/p/original${data.backdrops}`
				: data.posterPath
				? `https://image.tmdb.org/t/p/original${data.posterPath}`
				: null

		const englishLogo = data.logos.find(logo => logo.iso_639_1 === 'en')
		logoUrl = englishLogo
			? `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
			: data.logos && data.logos.length > 0
			? `https://image.tmdb.org/t/p/original${data.logos[0].file_path}`
			: null

		releaseDate = data.releaseDate ?? 'No release date provided'
		releaseYear =
			releaseDate !== 'No release date provided' && releaseDate.trim() !== ''
				? new Date(releaseDate).getFullYear()
				: 'No release date provided'

		numberOfSeasons = data.numberOfSeasons ? data.numberOfSeasons : null

		genres = data.genres && data.genres.length > 0 ? data.genres.join(', ') : 'No genres provided'

		overview = data.overview ? data.overview : null

		const trailerVideo = data.videoResults.find(
			video => video.name.toLowerCase().includes('official trailer') || video.name.toLowerCase().includes('trailer')
		)

		videoUrl = trailerVideo
			? `https://www.youtube.com/watch?v=${trailerVideo.key}`
			: data.videoResults && data.videoResults.length > 0
			? `https://www.youtube.com/watch?v=${data.videoResults[0].key}`
			: null
	}

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
			{data && (
				<>
					<Background>
						<img src={backdropUrl} alt={`Background image of ${data.title}`} />
					</Background>

					<MotionContainer delay={0.5}>
						<Wrapper>
							<Logo>{logoUrl ? <img src={logoUrl} alt={`Logo image of ${data.title}`} /> : <h1>{data.title}</h1>}</Logo>

							<Controls>
								<StyledButton className='play' variant='contained' startIcon={<PlayArrowRoundedIcon />}>
									PLAY
								</StyledButton>
								<StyledButton onClick={videoHandler} className='trailer' variant='outlined' startIcon={<PlayArrowRoundedIcon />}>
									TRAILER
								</StyledButton>

								{isAddedToWatchList ? (
									<StyledIconButton className='remove' variant='outlined' onClick={removeFromWatchListHandler}>
										<DoneRoundedIcon />
									</StyledIconButton>
								) : (
									<StyledIconButton className='add' variant='outlined' onClick={addToWatchListHandler}>
										<AddRoundedIcon />
									</StyledIconButton>
								)}
							</Controls>

							<InfoParagraph>
								{releaseYear} {numberOfSeasons && (numberOfSeasons > 1 ? `• ${numberOfSeasons} Seasons` : '• 1 Season')} • {genres}
							</InfoParagraph>
							<DescriptionParagraph>{overview}</DescriptionParagraph>

							<StyledIconButton className='back' variant='outlined' onClick={backToPreviousPageHandler}>
								<ArrowBackIosNewRoundedIcon />
							</StyledIconButton>
						</Wrapper>
					</MotionContainer>

					{videoIsVisible && (
						<VideoWrapper onClick={closeVideoHandler}>
							<OpacityMotionContainer>
								<>
									{videoUrl && <ReactPlayer width='70vw' height='50vh' url={videoUrl} controls={true} />}
									{!videoUrl && <p>Unfortunately no trailer has been provided for this resource.</p>}
								</>
							</OpacityMotionContainer>
						</VideoWrapper>
					)}
				</>
			)}
			{!data && <ErrorPage />}
		</StyledContainer>
	)
}

Details.propTypes = {
	type: PropTypes.string,
}

export default Details

const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
`

const Background = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: start;
	margin: 0 50px;

	@media (min-width: 800px) {
		margin: 0 80px;
	}

	@media (min-width: 1200px) {
		margin: 0 100px;
	}
`

const Logo = styled.div`
	display: flex;
	margin-bottom: 30px;

	img {
		min-height: 85px;
		max-height: 250px;
		min-width: 250px;
		max-width: 450px;
		width: 35vw;
	}

	h1 {
		font-size: 35px;
		text-align: left;
	}

	@media (min-width: 600px) {
		img {
			width: auto;
			object-fit: contain;
		}
	}

	@media (min-width: 1000px) {
		margin-bottom: 50px;
	}
`

const Controls = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
`

const StyledButton = styledMUI(Button)({
	fontWeight: 'normal',
	fontSize: '12px',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'@media (min-width: 800px)': {
		fontSize: '14px',
	},

	'@media (min-width: 1000px)': {
		fontSize: '16px',
	},

	'&.play': {
		color: '#000',
		backgroundColor: '#F9F6EE',
		width: '100px',

		'&:hover': {
			color: '#F9F6EE',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
	},

	'&.trailer': {
		color: '#F9F6EE',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		border: 'transparent',
		width: '150px',

		'&:hover': {
			backgroundColor: 'rgb(0, 0, 0)',
			border: 'rgb(0, 0, 0)',
		},
	},
})

const StyledIconButton = styledMUI(IconButton)({
	color: '#F9F6EE',
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	borderColor: '#F9F6EE',
	transition: 'background-color 0.3s',

	'&.back': {
		marginTop: '25px',
	},

	'&:hover': {
		backgroundColor: '#000',
	},
})

const InfoParagraph = styled.p`
	margin: 15px 0 25px;
	text-align: left;

	@media (min-width: 800px) {
		font-size: 16px;
	}

	@media (min-width: 1000px) {
		font-size: 18px;
	}
`

const DescriptionParagraph = styled.p`
	margin: 0;
	line-height: 2;
	text-align: left;

	@media (min-width: 800px) {
		font-size: 16px;
	}

	@media (min-width: 1000px) {
		font-size: 18px;
		margin-right: 200px;
	}
`

const VideoWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
`
