import styled from 'styled-components'

import disneyLogo from '@images/disney-logo.svg'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<StyledFooter>
			<Wrapper>
				<StyledLogo src={disneyLogo} alt='Logo of Disney+ App'></StyledLogo>
				<StyledParagraph>
					&copy; {currentYear}, coded by <a href='https://github.com/mkwiecien00'>Małgorzata Kwiecień</a>
				</StyledParagraph>
			</Wrapper>
		</StyledFooter>
	)
}

export default Footer

const StyledFooter = styled.footer`
	width: 100%;
	height: 100px;
	position: absolute;
	bottom: 0;
`

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	background-color: #030408;
`

const StyledLogo = styled.img`
	height: 50px;
`

const StyledParagraph = styled.p`
	margin: 5px 0;
	font-size: 12px;
`
