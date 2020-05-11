import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './HomeNavBar.css';

const CarbonWrapper = styled.div`
	margin: 0 10em;
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
`;

const LogoStyle = styled.img`
	position: absolute;
	top: -3em;
	left: 1em;
	width: 9em;
`;

export const HomeNavBar = () => {
	return (
		<CarbonWrapper>
			<LogoStyle src={logo} alt='logo'></LogoStyle>
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
		</CarbonWrapper>
	);
};
