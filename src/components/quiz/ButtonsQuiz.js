import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	@media only screen and (max-width: 850px) {
		display: grid;
		align-items: center;
		justify-content: center;
		margin-top: 0;
	}
`;

const Button = styled.button`
	background: whites;
	backdrop-filter: blur(2px);
	padding: 8px;
	color: ${props => props.theme.colors.dark};
	font-size: 20px;
	border: 2px solid dark;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.ligth};
		background: ${props => props.theme.colors.dark};
		font-weight: 500;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
`;

export const Buttons = ({ back, next, end, finish }) => {
	if (!end) {
		return (
			<ButtonBox>
				<Button onClick={back}>Back</Button>
				<Button onClick={next}>Next</Button>
			</ButtonBox>
		);
	} else {
		return (
			<ButtonBox>
				<Button onClick={back}>Back</Button>
				<Button onClick={finish}>Finish</Button>
			</ButtonBox>
		);
	}
};
