import React, { useState } from 'react';
import styled from 'styled-components';

import bgTree from '../assets/bg_home.svg';

import { HomeNavBar } from './HomeNavBar';
import { BackgroundAnimation } from './BackgroundAnimation';
import { Carbon } from './Carbon';
import { Hidric } from './Hidric';

const HomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	color: black;
	margin-left: 15vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 650px) {
		color: black;
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

const HomeBox = styled.div``;

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

const BackgroundTree = styled.img`
	position: absolute;
	bottom: 1em;
	left: -1em;
	width: 35em;
	z-index: -9999;
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
	font-size: 25px;
	border: 2px solid;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: ${(props) =>
		props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171'};
	border-color: ${(props) =>
		props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171'};
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background-color: #38a66dab;
		font-weight: 500;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
`;

export const Home = () => {
	const [homeContent, setHomeContent] = useState(0);

	const handleClick = (e) => {
		console.log(e.target.id);
		if (e.target.id === 'Carbon') {
			setHomeContent(1);
		} else if (e.target.id === 'Hidric') {
			setHomeContent(2);
		}
		if (e.target.id === 'Ecological') {
			setHomeContent(3);
		}
	};

	const handleReturn = () => {
		setHomeContent(0);
	};

	const HomeContent = () => {
		if (homeContent === 0) {
			return <Intro />;
		} else if (homeContent === 1) {
			return <Carbon handleReturn={handleReturn} />;
		} else if (homeContent === 2) {
			return <Hidric handleReturn={handleReturn} />;
		} else if (homeContent === 3) {
			return <Hidric handleReturn={handleReturn} />;
		}
	};

	const Intro = () => {
		return (
			<>
				<TitleHome>Calculate Your Footprint</TitleHome>
				<TextHome>Are you being all the green that you can be?</TextHome>
				<ButtonBox>
					<Button black id='Carbon' onClick={handleClick}>
						Carbon
					</Button>
					<Button blue id='Hidric' onClick={handleClick}>
						Water
					</Button>
					<Button id='Ecological' onClick={handleClick}>
						Ecological
					</Button>
				</ButtonBox>
			</>
		);
	};

	const Background = () => {
		return (
			<>
				<BackgroundTree src={bgTree} alt='TreeBackground' />
				<BackgroundAnimationWrapper>
					<BackgroundAnimation />
				</BackgroundAnimationWrapper>
			</>
		);
	};
	return (
		<HomeWrapper>
			<HomeNavBarWrapper>
				<HomeNavBar />
			</HomeNavBarWrapper>
			<HomeBox>
				<HomeContent />
			</HomeBox>
			<Background />
		</HomeWrapper>
	);
};
