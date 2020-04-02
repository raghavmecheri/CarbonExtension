import React from 'react';
import styled from 'styled-components';
import bg from '../assets/bg1.jpeg';
import bgSmall from '../assets/bg3.jpg';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
	background-image: url(${bg});
	background-size: cover;
	background-color: #000000;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 650px) {
		color: black;
		background-image: url(${bgSmall});
	}
	h1 {
		background: #ffffff6b;
		text-transform: uppercase;
		font-family: ${props => props.theme.fonts.tittle}, serif;
		font-weight: 700;
		font-size: 40px;
		@media (max-width: 1000px) {
			display: flex;
			padding: 0px 0.45em;
		}
	}
`;

const HomeContent = styled.div``;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: auto;
	margin-top: 5em;
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
	color: ${props => props.theme.colors.ligth};
	font-size: 20px;
	border: 2px solid white;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.dark};
		background: ${props => props.theme.colors.ligth};
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
			<HomeContent>
				<h1>Are you being all the green that you can be?</h1>
				<ButtonBox>
					<Link to='Carbon'>
						<Button>Carbon</Button>
					</Link>
					<Button>Hidric</Button>
					<Button>Ecological</Button>
				</ButtonBox>
			</HomeContent>
		</HomeWrapper>
	);
};
