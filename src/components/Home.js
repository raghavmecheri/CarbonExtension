import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from '../assets/bg_main.jpeg';
import bgSmall from '../assets/bg_main_small.jpg';
import bgPng from '../assets/bg_home.png';

import { HomeNavBar } from './HomeNavBar';
import { BackgroundAnimation } from './BackgroundAnimation';

const HomeWrapper = styled.div`
	/* background-image: url(${bg});
	background-size: cover;
	background-color: #000000; */
	
	height: 100vh;
	width: 100vw;
	color: black;
	margin-left: 20vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 650px) {
		color: black;
		background-image: url(${bgSmall});
	}

`;

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 3em;
	left: 0;
`;

const BackgroundAnimationWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	top: 5em;
	left: 0;
	margin-left: 16vw;
	z-index: -99999999;
`;

const HomeContent = styled.div``;

const TitleHome = styled.div`
	text-transform: uppercase;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	text-align: center;
	font-size: 50px;
	@media (max-width: 1000px) {
		display: flex;
		padding: 0px 0.45em;
	}
`;

const TextHome = styled.div`
	padding: 1em;
	text-transform: uppercase;
	text-align: center;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	font-size: 20px;
	@media (max-width: 1000px) {
		display: flex;
		padding: 0px 0.45em;
	}
`;

const BackgroundImage = styled.img`
	position: absolute;
	bottom: -5em;
	left: 0;
	width: 30em;
	z-index: -9999;
`;

const BackgroundColorImage = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 4.5em;
	z-index: -999;
	background-color: #38a66d;
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	margin-top: 2em;
	@media only screen and (max-width: 850px) {
		display: grid;
		align-items: center;
		justify-content: center;
		margin-top: 0;
	}
`;

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	color: ${(props) =>
		props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171'};
	font-size: 25px;
	border: 2px solid;
	border-color: ${(props) =>
		props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171'};
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background: #38a66d;
		font-weight: 500;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
`;

export const Home = () => {
	return (
		<HomeWrapper>
			<HomeNavBarWrapper>
				<HomeNavBar />
			</HomeNavBarWrapper>
			<HomeContent>
				<TitleHome>Ambiental Footprint</TitleHome>
				<TextHome>Are you being all the green that you can be?</TextHome>
				<ButtonBox>
					<Link to='Carbon'>
						<Button black>Carbon</Button>
					</Link>
					<Link to='Hidric'>
						<Button blue>Hidric</Button>
					</Link>
					<Link to='Ecological'>
						<Button>Ecological</Button>
					</Link>
				</ButtonBox>
			</HomeContent>
			<BackgroundImage src={bgPng} alt='HomeBackground' />
			<BackgroundColorImage />
			<BackgroundAnimationWrapper>
				<BackgroundAnimation />
			</BackgroundAnimationWrapper>
		</HomeWrapper>
	);
};
