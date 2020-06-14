import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PlusCircle } from '@styled-icons/boxicons-solid';
import { MinusCircle } from '@styled-icons/boxicons-solid';

const ButtonBox = styled.div`
	position: absolute;
	bottom: 2em;
	width: ${(props) => (props.carbonQuiz ? '85%' : '90%')};
	padding: 1em 1em;
	display: flex;
	align-items: center;
	justify-content: ${(props) =>
		props.carbonQuiz ? 'space-between' : 'space-between'};
	@media (max-width: 1400px) and (max-height: 700px) {
		bottom: 0em;
	}
	@media only screen and (max-width: 850px) {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 0;
		padding: 0;
		width: 90%;
	}
	@media (max-width: 380px) and (max-height: 812px) {
		bottom: 1em;
	}
	@media (max-width: 430px) and (max-height: 750px) {
	}
	@media (max-width: 400px) and (max-height: 700px) {
		bottom: 1em;
	}
	@media (max-width: 350px) and (max-height: 600px) {
		bottom: 1em;
	}
`;

const CalculateButton = styled.button`
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
	@media only screen and (max-width: 850px) {
		margin-left: 1em;
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
	@media only screen and (max-width: 850px) {
		margin-left: 1em;
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
	@media only screen and (max-width: 850px) {
		margin-right: 1em;
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
	businessQuiz,
	carbonQuiz,
	rowsValues,
}) => {
	if (!end) {
		return (
			<ButtonBox carbonQuiz={carbonQuiz} rowsValues={rowsValues}>
				<BackwardIcon onClick={back}>{'< Pregunta Atras'}</BackwardIcon>
				{businessQuiz ? (
					<MiddleBox>
						<div>
							<DeleteButton onClick={handleDeleteQuestion} />
							<ButtonText>Eliminar Fila</ButtonText>
						</div>
						<div>
							<AddButton onClick={handleAddRow} />
							<ButtonText>Añadir Fila</ButtonText>
						</div>
					</MiddleBox>
				) : null}
				<ForwardIcon onClick={next}>{'Siguiente Pregunta >'}</ForwardIcon>
			</ButtonBox>
		);
	} else {
		return (
			<ButtonBox>
				<BackwardIcon onClick={back}>{'< Pregunta Atras'}</BackwardIcon>
				{businessQuiz ? (
					<MiddleBox>
						<div>
							<DeleteButton onClick={handleDeleteQuestion} />
							<ButtonText>Eliminar Fila</ButtonText>
						</div>
						<div>
							<AddButton onClick={handleAddRow} />
							<ButtonText>Añadir Fila</ButtonText>
						</div>
					</MiddleBox>
				) : null}
				<Link to='/result'>
					<CalculateButton onClick={finish}>{'Calcular'}</CalculateButton>
				</Link>
			</ButtonBox>
		);
	}
};
