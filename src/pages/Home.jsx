import Container from '@components/UI/Container'
import ImageSlider from '@components/ImageSlider'
import Collections from '@components/Collections'
import Movies from '@components/Movies'

const HomePage = () => {
	return (
		<Container>
			<ImageSlider />
			<Collections />
			<Movies />
		</Container>
	)
}

export default HomePage
