import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import bgTree from '../../assets/bg_home.svg';
import logo from '../../assets/logo.png';
import { Menu } from '@styled-icons/heroicons-outline';
import { Cross } from '@styled-icons/entypo';
import { HomeCircle } from '@styled-icons/boxicons-regular';

import { HomeNavBar } from './HomeNavBar';
import { HomeBackgroundAnimation } from './HomeBackgroundAnimation';
import { Carbon } from '../Carbon/Carbon';
import { Hidric } from '../Hidric/Hidric';
import { Ecological } from '../Ecological/Ecological';

import './HomeNavBar.css';

const HomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	color: black;
	padding-left: 32vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1198px) {
		width: 100vw;
		padding-left: 35vw;
	}
	@media (max-width: 960px) {
		width: 100vw;
		padding-left: 50vw;
		padding-right: 5vw;
		padding-top: 5em;
	}
	@media (max-width: 800px) {
		width: 100vw;
		padding: 0;
	}
	@media (max-width: 600px) {
		padding: 0;
	}
	@media (max-width: 330px) {
		padding-top: 6em;
	}
`;

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const BackgroundAnimationWrapper = styled.div`
	position: absolute;
	height: 500px;
	width: 100vw;
	top: 5em;
	left: 0;
	padding-left: 16vw;
	z-index: -99999999;
	@media (max-width: 550px) {
		padding-left: 0;
	}
`;

const HomeBox = styled.div``;

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

const BackgroundTree = styled.img`
	position: absolute;
	bottom: 1em;
	left: -1em;
	width: 35em;
	z-index: -9999;
	@media (max-height: 750px) {
		width: 31em;
	}
	@media (max-height: 700px) {
		width: 30em;
	}
	@media (max-height: 650px) {
		width: 28em;
	}
	@media (max-height: 600px) {
		width: 23em;
	}
	@media (max-width: 1200px) {
		width: 30em;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	@media only screen and (max-width: 950px) {
		width: 10em;
		margin: 0.3em;
	}
`;

const LogoStyle = styled.img`
	position: absolute;
	position: absolute;
	top: -1.5em;
	left: 27%;
	width: 9em;
`;

const MenuStyle = styled(Menu)`
	position: absolute;
	top: 0.7em;
	left: 1em;
	font-size: 16px;
	color: #38a66d;
`;

const CrossStyle = styled(Cross)`
	position: absolute;
	top: 0.3em;
	left: 0.3em;
	font-size: 16px;
	color: #38a66d;
`;

const HomeCircleStyle = styled(HomeCircle)`
	color: #38a66d;
	position: absolute;
	left: 2.8em;
`;

const HomeMenuBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	z-index: 999;
	background-color: #0000006b;
`;

const HomeMenuWraper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 70vw;
	height: 100%;
	z-index: 9999;
	background-color: white;
`;

const MenuNavBar = styled.div`
	padding-top: 7em;
	display: flow-root;
	justify-content: center;
	text-align: center;
	a {
		color: #000;
		text-decoration: none;
		padding: 1em;
	}

	div {
		position: relative;
		font-weight: 500;
		width: fit-content;
		justify-content: flex-start;
		padding-top: 0.2em;
		margin-left: 10%;
		font-size: 36px;
		border-bottom: 1px solid #38a66d;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const Home = () => {
	const [homeContent, setHomeContent] = useState(0);
	const [homeMenuState, setHomeMenuState] = useState(false);

	const handleClick = (e) => {
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

	const handleOpenMenu = () => {
		setHomeMenuState(true);
	};

	const handleCloseMenu = () => {
		setHomeMenuState(false);
	};

	const HomeContent = () => {
		if (homeContent === 0) {
			return <Intro />;
		} else if (homeContent === 1) {
			return <Carbon handleReturn={handleReturn} />;
		} else if (homeContent === 2) {
			return <Hidric handleReturn={handleReturn} />;
		} else if (homeContent === 3) {
			return <Ecological handleReturn={handleReturn} />;
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
					<HomeBackgroundAnimation />
				</BackgroundAnimationWrapper>
			</>
		);
	};

	const HomeMenu = () => {
		if (homeMenuState) {
			return (
				<>
					<HomeMenuBackground onClick={handleCloseMenu} />
					<HomeMenuWraper>
						<LogoStyle src={logo} alt='logo'></LogoStyle>
						{homeMenuState ? (
							<CrossStyle onClick={handleCloseMenu} size='60' />
						) : (
							<MenuStyle onClick={handleCloseMenu} size='40' />
						)}
						<MenuNavBar>
							<NavLink
								to='/'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>
									<HomeCircleStyle size='40' />
									Home
								</div>
							</NavLink>
							<NavLink
								to='/a'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>Information</div>
							</NavLink>
							<NavLink
								to='/b'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>Others</div>
							</NavLink>
							<NavLink
								to='/c'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>About</div>
							</NavLink>
							<NavLink
								to='/d'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>Contribute</div>
							</NavLink>
						</MenuNavBar>
					</HomeMenuWraper>
				</>
			);
		} else {
			return null;
		}
	};

	return (
		<HomeWrapper>
			<HomeNavBarWrapper>
				<HomeNavBar handleMenu={handleOpenMenu} />
			</HomeNavBarWrapper>
			<HomeMenu />
			<HomeBox>
				<HomeContent />
			</HomeBox>
			<Background />
		</HomeWrapper>
	);
};
