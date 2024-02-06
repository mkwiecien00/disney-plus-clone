import styled from 'styled-components'

const DetailLogo = ({ data, logo }) => {
	return <Logo>{logo ? <img src={logo} alt={`Logo image of ${data.title}`} /> : <h1>{data.title}</h1>}</Logo>
}

export default DetailLogo

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
