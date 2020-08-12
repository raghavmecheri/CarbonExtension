import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Menu } from '@styled-icons/heroicons-outline';
// import './style/HomeNavBar.css';

const NavBarWrapper = styled.div`
	padding-top: 2em;
	padding-left: 10em;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	div {
		padding: 5px;
		border-bottom: 1px solid black;
		&:hover {
			cursor: pointer;
		}
	}
	a {
		color: #000;
		text-decoration: none;
	}
	@media (max-width: 700px) {
		height: 3.2em;
		border-bottom: 3px solid #38a66d;
		background-color: black;
		div {
			display: none;
		}
	}
`;

const LogoStyle = styled.img`
	position: absolute;
	top: -1em;
	left: 1em;
	width: 9em;
	z-index: 99;
	@media (max-width: 700px) {
		top: -0.9em;
		left: 37%;
		width: 5em;
	}
	@media (max-width: 350px) {
		top: -0.9em;
		left: 45%;
		width: 5em;
	}
	@media (max-width: 330px) {
		left: 35%;
	}
`;

const MenuStyle = styled(Menu)`
	display: none;
	z-index: 99;
	@media (max-width: 700px) {
		display: block;
		position: absolute;
		top: 30%;
		left: 4%;
		font-size: 16px;
		color: white;
	}
`;

const navbarItems = {
	home: { url: '/', content: 'Home' },
	information: { url: '/information', content: 'Information' },
	contribute: { url: '/contribute', content: 'Contribute' },
	about: { url: '/about', content: 'About' },
};

const NavbarItem = (props) => {
	return (
		<Link to={props.url}>
			<div className='fill'>{props.content}</div>
		</Link>
	);
};

const NavbarListButtons = () =>
	Object.keys(navbarItems).map((item) => {
		const { url, content } = navbarItems[item];
		return <NavbarItem key={item} url={url} content={content} />;
	});

const Navbar = ({ handleMenu }) => {
	return (
		<NavBarWrapper>
			<Link to='/'>
				<LogoStyle src={logo} alt='logo'></LogoStyle>
			</Link>
			<MenuStyle onClick={handleMenu} size='40' />
			<NavbarListButtons />
		</NavBarWrapper>
	);
};

export default Navbar;

// const LogoStyle = styled.img`
// 	position: absolute;
// 	position: absolute;
// 	top: -1.5em;
// 	left: 27%;
// 	width: 9em;
// `;

// const MenuStyle = styled(Menu)`
// 	position: absolute;
// 	top: 0.7em;
// 	left: 1em;
// 	font-size: 16px;
// 	color: #38a66d;
// `;

// const CrossStyle = styled(Cross)`
// 	position: absolute;
// 	top: 0.3em;
// 	left: 0.3em;
// 	font-size: 16px;
// 	color: #38a66d;
// `;

// const HomeCircleStyle = styled(HomeCircle)`
// 	color: #38a66d;
// 	position: absolute;
// 	left: 2.8em;
// `;

// const HomeMenuBackground = styled.div`
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	width: 100vw;
// 	height: 100vh;
// 	z-index: 99999;
// 	background-color: #0000006b;
// 	@media (max-width: 430px) and (max-height: 750px) {
// 		height: 110vh;
// 	}
// 	@media (max-width: 400px) and (max-height: 700px) {
// 		height: 110vh;
// 	}
// 	@media (max-width: 350px) and (max-height: 600px) {
// 		height: 130vh;
// 	}
// `;

// const HomeMenuWraper = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 70vw;
// 	height: 100%;
// 	z-index: 99999;
// 	background-color: white;
// 	@media (max-width: 430px) and (max-height: 750px) {
// 		height: ${(props) => (props.carbonQuiz ? '110vh' : '120vh')};
// 	}
// 	@media (max-width: 400px) and (max-height: 700px) {
// 		height: 110vh;
// 		height: ${(props) => (props.carbonQuiz ? '116vh' : '125vh')};
// 	}
// 	@media (max-width: 350px) and (max-height: 600px) {
// 		height: 130vh;
// 		height: ${(props) => (props.carbonQuiz ? '130vh' : '135vh')};
// 	}
// `;

// const MenuNavBar = styled.div`
// 	padding-top: 7em;
// 	display: flow-root;
// 	justify-content: center;
// 	text-align: center;
// 	a {
// 		color: #000;
// 		text-decoration: none;
// 		padding: 1em;
// 	}

// 	div {
// 		position: relative;
// 		font-weight: 500;
// 		width: fit-content;
// 		justify-content: flex-start;
// 		padding-top: 0.2em;
// 		margin-left: 10%;
// 		font-size: 36px;
// 		border-bottom: 1px solid #38a66d;
// 		&:hover {
// 			cursor: pointer;
// 		}
// 	}
// `;

// const HomeMenu = () => {
// 	if (!homeMenuState) return null;
// 	return (
// 		<>
// 			<HomeMenuBackground onClick={handleCloseMenu} />
// 			<HomeMenuWraper>
// 				<LogoStyle src={logo} alt='logo'></LogoStyle>
// 				{homeMenuState ? (
// 					<CrossStyle onClick={handleCloseMenu} size='60' />
// 				) : (
// 					<MenuStyle onClick={handleCloseMenu} size='40' />
// 				)}
// 				<MenuNavBar>
// 					<NavLink
// 						to='/'
// 						activeStyle={{
// 							color: '#38a66d',
// 						}}>
// 						<div className='fill'>
// 							<HomeCircleStyle size='40' />
// 							Inicio
// 						</div>
// 					</NavLink>
// 					<NavLink
// 						to='/information'
// 						activeStyle={{
// 							color: '#38a66d',
// 						}}>
// 						<div className='fill'>Informacion</div>
// 					</NavLink>
// 					<NavLink
// 						to='/contribute'
// 						activeStyle={{
// 							color: '#38a66d',
// 						}}>
// 						<div className='fill'>Contribuir</div>
// 					</NavLink>
// 					<NavLink
// 						to='/about'
// 						activeStyle={{
// 							color: '#38a66d',
// 						}}>
// 						<div className='fill'>Acerca De</div>
// 					</NavLink>
// 				</MenuNavBar>
// 			</HomeMenuWraper>
// 		</>
// 	);
// };
