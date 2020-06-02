import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PlusCircle } from '@styled-icons/boxicons-solid';
import { MinusCircle } from '@styled-icons/boxicons-solid';

const ButtonBox = styled.div`
	position: absolute;
	bottom: 2em;
	width: 70%;
	padding: 1em 1em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	@media only screen and (max-width: 850px) {
		display: grid;
		align-items: center;
		justify-content: center;
		margin-top: 0;
	}
`;

const Button = styled.button`
	width: 12em;
	height: 50px;
	border-radius: 10px;
	font-size: 15px;
	padding: 0;
	font-weight: 600;
	color: white;
	text-transform: uppercase;
	background-color: lightgreen;
	border: 2px solid lightgreen;
	&:hover {
		cursor: pointer;
		background-color: cornflowerblue;
		border-color: cornflowerblue;
	}
`;

const ForwardIcon = styled.button`
	width: 12em;
	height: 50px;
	border-radius: 10px;
	font-size: 15px;
	padding: 0;
	font-weight: 600;
	color: white;
	background-color: lightgreen;
	border: 2px solid lightgreen;
	&:hover {
		cursor: pointer;
		background-color: cornflowerblue;
		border-color: cornflowerblue;
	}
`;

const BackwardIcon = styled.button`
	width: 12em;
	height: 50px;
	border-radius: 10px;
	font-size: 15px;
	padding: 0;
	font-weight: 600;
	color: #9b9b9b;
	border: 2px solid #9b9b9b;
	&:hover {
		cursor: pointer;
		background-color: #9b9b9b;
		color: white;
	}
`;

const MiddleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 10em;
`;

const AddButton = styled(PlusCircle)`
	width: 50px;
	color: cornflowerblue;
	&:hover {
		cursor: pointer;
		color: limegreen;
	}
`;
const DeleteButton = styled(MinusCircle)`
	width: 50px;
	color: #9b9b9b;
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
				<BackwardIcon onClick={back}>{'< Last Question'}</BackwardIcon>
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
				<ForwardIcon onClick={next}>{'Next Question >'}</ForwardIcon>
			</ButtonBox>
		);
	} else {
		return (
			<ButtonBox>
				<BackwardIcon onClick={back}>{'< Last Question'}</BackwardIcon>
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
				<Link to='/result'>
					<Button onClick={finish}>Calculate</Button>
				</Link>
			</ButtonBox>
		);
	}
};
