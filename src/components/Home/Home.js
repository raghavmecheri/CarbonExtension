import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Menu } from '@styled-icons/heroicons-outline';
import { Cross } from '@styled-icons/entypo';
import { HomeCircle } from '@styled-icons/boxicons-regular';

import BackgroundStyle from './BackgroundStyle';
import HeroTitle from './HeroTitle';
import Navbar from '../Navbar/navbar';
import { Carbon } from '../Carbon/Carbon';
import logo from '../../assets/logo.png';
import './style/HomeNavBar.css';

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

const HomeBox = styled.div`
	font-family: 'Josefin Sans', sans-serif;
`;

const Home = () => {
	const [homeContent, setHomeContent] = useState(0);
	const [homeMenuState, setHomeMenuState] = useState(false);

	const handleClick = (e) => {
		if (e.target.id === 'Carbon') {
			setHomeContent(1);
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
			return <HeroTitle handleClick={handleClick} />;
		}
		if (homeContent === 1) {
			return <Carbon handleReturn={handleReturn} />;
		}
	};

	return (
		<HomeWrapper>
			<HomeNavBarWrapper>
				<Navbar handleMenu={handleOpenMenu} />
			</HomeNavBarWrapper>
			<HomeBox>
				<HomeContent />
			</HomeBox>
			<BackgroundStyle />
		</HomeWrapper>
	);
};

export default Home;
