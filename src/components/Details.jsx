import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { watchListActions } from '@store/slices/watchlist-slice'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { styled as styledMUI } from '@mui/system'

import { fetchDetailsFromId } from '@/utils/http/fetchDetailsFromId'
import Container from '@components/ui/Container'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'
import { MotionContainer } from '@components/ui/MotionContainer'
import ErrorPage from '@pages/Error'

import IconButton from '@mui/material/IconButton'

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'

import { auth } from '../firebase'

import VideoPlayer from '@components/VideoPlayer'
import DetailBackgroundImage from '@components/ui/DetailBackgroundImage'
import Controls from '@components/ui/Controls'
import useVideo from '@hooks/use-video'
import useScroll from '@hooks/use-scroll'

const Details = ({ type }) => {
	const { videoIsVisible, videoHandler, closeVideoHandler } = useVideo()
	useScroll()

	const navigate = useNavigate()
	const backToPreviousPageHandler = () => {
		navigate(-1)
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
					<DetailBackgroundImage backdropUrl={backdropUrl} title={data.title} />

					<MotionContainer delay={0.5}>
						<Wrapper>
							<Logo>{logoUrl ? <img src={logoUrl} alt={`Logo image of ${data.title}`} /> : <h1>{data.title}</h1>}</Logo>

							<Controls
								onVideoHandle={videoHandler}
								isAddedToWatchList={isAddedToWatchList}
								onRemove={removeFromWatchListHandler}
								onAdd={addToWatchListHandler}
							/>

							<InfoParagraph>
								{releaseYear} {numberOfSeasons && (numberOfSeasons > 1 ? `• ${numberOfSeasons} Seasons` : '• 1 Season')} • {genres}
							</InfoParagraph>
							<DescriptionParagraph>{overview}</DescriptionParagraph>

							<StyledIconButton className='back' variant='outlined' onClick={backToPreviousPageHandler}>
								<ArrowBackIosNewRoundedIcon />
							</StyledIconButton>
						</Wrapper>
					</MotionContainer>

					{videoIsVisible && <VideoPlayer onClick={closeVideoHandler} videoUrl={videoUrl} />}
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
