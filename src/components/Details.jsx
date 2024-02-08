import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchDetailsFromId } from '@utils/http/fetch-details-from-id'
import useScroll from '@hooks/use-scroll'
import { detailsData } from '@utils/details/details-data'
import useDetail from '@hooks/use-detail'
import useVideo from '@hooks/use-video'

import Container from '@components/ui/Container'
import Loader from '@components/ui/Loader'
import ErrorBlock from '@components/ui/ErrorBlock'
import DetailBackgroundImage from '@components/ui/DetailBackgroundImage'
import { MotionContainer } from '@components/ui/MotionContainer'
import DetailLogo from '@components/ui/DetailLogo'
import Controls from '@components/ui/Controls'
import DetailParagraph from '@components/ui/DetailParagraph'
import DetailDescription from '@components/ui/DetailDescription'
import BackButton from '@components/ui/BackButton'
import VideoPlayer from '@components/VideoPlayer'
import ErrorPage from '@pages/Error'

const Details = ({ type }) => {
	const params = useParams()
	const id = params.id

	const { data, isPending, isError } = useQuery({
		queryKey: [`${type}-data`, id],
		queryFn: ({ signal }) => fetchDetailsFromId({ signal, detailsId: id, resourceType: type }),
	})

	useScroll()

	let detailsInfo = {}
	if (data) {
		detailsInfo = detailsData(data)
	}

	const { isAddedToWatchList, addToWatchListHandler, removeFromWatchListHandler } = useDetail({
		type,
		id,
		data,
	})

	const { videoIsVisible, videoHandler, closeVideoHandler } = useVideo()

	return (
		<StyledContainer>
			{isPending && <Loader />}
			{isError && <ErrorBlock message='Something went wrong, please try again later.' />}
			{data && (
				<>
					<DetailBackgroundImage backdropUrl={detailsInfo.backdropUrl} title={data.title} />

					<MotionContainer delay={0.5}>
						<Wrapper>
							<DetailLogo data={data} logo={detailsInfo.logoUrl} />
							<Controls
								onVideoHandle={videoHandler}
								isAddedToWatchList={isAddedToWatchList}
								onRemove={removeFromWatchListHandler}
								onAdd={addToWatchListHandler}
							/>
							<DetailParagraph
								releaseYear={detailsInfo.releaseYear}
								numberOfSeasons={detailsInfo.numberOfSeasons}
								genres={detailsInfo.genres}
							/>
							<DetailDescription overview={detailsInfo.overview} />
							<BackButton />
						</Wrapper>
					</MotionContainer>

					{videoIsVisible && <VideoPlayer onClick={closeVideoHandler} videoUrl={detailsInfo.videoUrl} />}
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
