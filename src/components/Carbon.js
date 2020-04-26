import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@styled-icons/boxicons-regular';

import bgCarbon from '../assets/bg_carbon.jpg';
import bgSmall from '../assets/bg_carbon_small.jpeg';

const CarbonWrapper = styled.div`
	background-image: url(${bgCarbon});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: #000000;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
		background-image: url(${bgSmall});
	}
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: inherit;
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
	color: ${(props) => props.theme.colors.dark};
	font-size: 20px;
	border: 2px solid ${(props) => props.theme.colors.dark};
	border-radius: 0.12em;
	font-weight: 800;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background: ${(props) => props.theme.colors.dark};
		font-weight: 500;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
`;

const ArrowIcon = styled(ArrowBack)`
	position: absolute;
	background-color: transparent;
	border: 1px solid red;
	color: white;
	text-decoration: none;
	left: 0;
	top: 0;
	font-size: 16px;
	&:hover {
		cursor: pointer;
	}
	color: red;
`;

export const Carbon = () => {
	return (
		<CarbonWrapper>
			<Link to=''>
				<ArrowIcon size='48' />
			</Link>
			<ButtonBox>
				<Link to='/quiz/person'>
					<Button>Person</Button>
				</Link>
				<Link to='/quiz/organization'>
					<Button>Organization</Button>
				</Link>
			</ButtonBox>
		</CarbonWrapper>
	);
};
