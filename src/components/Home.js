import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
	width: fit-content;
	margin: auto;
	margin-top: 15em;
	@media only screen and (max-width: 850px) {
		margin-top: 10em;
	}
	h1 {
		backdrop-filter: blur(2px);
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
			<h1>Are you being all the green that you can be?</h1>
			<ButtonBox>
				<Button>Carbon</Button>
				<Button>Hydrogin</Button>
				<Button>hectarin</Button>
			</ButtonBox>
		</HomeWrapper>
	);
};
