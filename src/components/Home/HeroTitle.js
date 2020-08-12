import React from 'react';
import styled from 'styled-components';

const TitleHome = styled.div`
	text-transform: uppercase;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	text-align: center;
	font-size: 50px;
`;

const TextHome = styled.div`
	padding: 1em;
	text-transform: uppercase;
	text-align: center;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	font-size: 20px;
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	padding-top: 2em;
	@media only screen and (max-width: 1180px) {
		justify-content: space-around;
	}
	@media only screen and (max-width: 950px) {
		display: grid;
		align-items: center;
		justify-content: center;
		padding-top: 0;
	}
`;

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 25px;
	border: 2px solid;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: ${(props) => (props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171')};
	border-color: ${(props) => (props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171')};
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background-color: #38a66dab;
		font-weight: 500;
	}
	@media only screen and (max-width: 950px) {
		width: 10em;
		margin: 0.3em;
	}
`;

const HeroTitle = ({ handleClick }) => {
	return (
		<>
			<TitleHome>Carbon Footprint</TitleHome>
			<TextHome>Calculate your carbon footprint</TextHome>
			<TextHome>Are you being all the green that you can be?</TextHome>
			<ButtonBox>
				<Button black id='Carbon' onClick={handleClick}>
					Get Started
				</Button>
			</ButtonBox>
		</>
	);
};

export default HeroTitle;
