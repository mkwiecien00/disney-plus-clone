import styled from 'styled-components'

const ItemContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
	cursor: pointer;
	overflow: hidden;
	border: 3px solid transparent;
	border-radius: 10px;
	transition: all 0.3s ease;

	img {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	&:hover {
		border-color: rgba(249, 249, 249, 0.7);
	}
`

export default ItemContainer
