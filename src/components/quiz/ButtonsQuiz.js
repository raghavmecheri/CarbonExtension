import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowForwardOutline } from '@styled-icons/evaicons-outline';
import { ArrowBackOutline } from '@styled-icons/evaicons-outline';

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
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	/* color: ${(props) => props.theme.colors.dark}; */
	color: lightgreen;
	font-size: 20px;
	border: 2px solid lightgreen;
	border-radius: 0.12em;
	font-weight: 500;
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

const ForwardIcon = styled(ArrowForwardOutline)`
	width: 50px;
	color: lightgreen;
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		font-weight: 500;
	}
`;

const BackwardIcon = styled(ArrowBackOutline)`
	width: 50px;
	color: red;
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		font-weight: 500;
	}
`;

export const Buttons = ({ back, next, end, finish }) => {
	if (!end) {
		return (
			<ButtonBox>
				<BackwardIcon onClick={back} />
				<ForwardIcon onClick={next} />
			</ButtonBox>
		);
	} else {
		return (
			<ButtonBox>
				<BackwardIcon onClick={back} />
				<Link to='/result'>
					<Button onClick={finish}>Calculate</Button>
				</Link>
			</ButtonBox>
		);
	}
};
