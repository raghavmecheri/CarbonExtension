import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ArrowForwardOutline } from '@styled-icons/evaicons-outline';
import { ArrowBackOutline } from '@styled-icons/evaicons-outline';
import { AddBox } from '@styled-icons/material';
import { DeleteSweep } from '@styled-icons/material/DeleteSweep';

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 3em 15em;
	padding: 0;
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
	height: 50px;
	color: lightgreen;
	border: 2px solid lightgreen;
	border-radius: 50%;
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.dark};
		font-weight: 500;
	}
`;

const BackwardIcon = styled(ArrowBackOutline)`
	width: 50px;
	height: 50px;
	color: red;
	border: 2px solid red;
	border-radius: 50%;
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.dark};
		font-weight: 500;
	}
`;

const MiddleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 10em;
`;

const AddButton = styled(AddBox)`
	width: 50px;
	color: lightgreen;
	&:hover {
		cursor: pointer;
		color: limegreen;
	}
`;
const DeleteButton = styled(DeleteSweep)`
	width: 43px;
	margin-bottom: 3px;
	margin-top: 7px;
	color: red;
	border: 2px solid red;
	border-radius: 0.3em;
	&:hover {
		cursor: pointer;
		color: orangered;
		border-color: orangered;
	}
`;
const ButtonText = styled.div``;

export const Buttons = ({
	back,
	next,
	end,
	finish,
	handleAddRow,
	handleDeleteQuestion,
}) => {
	if (!end) {
		return (
			<ButtonBox>
				<BackwardIcon onClick={back} />
				<MiddleBox>
					<div>
						<DeleteButton onClick={handleDeleteQuestion} />
						<ButtonText>Delete Row</ButtonText>
					</div>
					<div>
						<AddButton onClick={handleAddRow} />
						<ButtonText>Add Row</ButtonText>
					</div>
				</MiddleBox>

				<ForwardIcon onClick={next} />
			</ButtonBox>
		);
	} else {
		return (
			<ButtonBox>
				<BackwardIcon onClick={back} />
				<MiddleBox>
					<DeleteButton onClick={handleDeleteQuestion} />
					<p>Delete Row</p>
					<AddButton onClick={handleAddRow} />
					<p>Add Row</p>
				</MiddleBox>
				<Link to='/result'>
					<Button onClick={finish}>Calculate</Button>
				</Link>
			</ButtonBox>
		);
	}
};
