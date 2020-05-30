import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Menu } from '@styled-icons/heroicons-outline';
import { Link } from 'react-router-dom';
import './HomeNavBar.css';

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
	@media (max-width: 700px) {
		display: block;
		position: absolute;
		top: 30%;
		left: 4%;
		font-size: 16px;
		color: white;
	}
`;

export const HomeNavBar = () => {
	return (
		<NavBarWrapper>
			<LogoStyle src={logo} alt='logo'></LogoStyle>
			<MenuStyle size='40' />
			<Link to='/'>
				<div className='fill'>Home</div>
			</Link>
			<Link to='/'>
				<div className='fill'>Information</div>
			</Link>

			<Link to='/'>
				<div className='fill'>What Can You Do?</div>
			</Link>
			<Link to='/'>
				<div className='fill'>About</div>
			</Link>
			<Link to='/'>
				<div className='fill'>Contribute</div>
			</Link>
		</NavBarWrapper>
	);
};
