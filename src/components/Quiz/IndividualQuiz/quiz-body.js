import React from 'react';
import styled from 'styled-components';

import QuizIndividualSimple from './SimpleQuiz/QuizIndividualSimple';
import { QuestionQuizIndividualComplex } from './ComplexQuiz/QuestionCarbonQuizIndividualComplex';
import { CheckBox } from '../ComponentsQuiz/CheckBox';

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 100%;
	height: 40%;
	overflow-y: hidden;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	max-height: ${(props) => (props.id === 6 || props.id === 0 ? '72vh' : '50vh')};
	-webkit-box-shadow: 9px 9px 14px -13px rgba(138, 138, 138, 1);
	-moz-box-shadow: 9px 9px 14px -13px rgba(138, 138, 138, 1);
	box-shadow: 9px 9px 14px -13px rgba(138, 138, 138, 1);
	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
	@media (max-width: 1100px) {
		padding: 1em;
	}
	@media (max-width: 510px) {
		margin: none;
		max-height: ${(props) => (props.id === 6 || props.id === 0 ? '72vh' : '50vh')};
		width: ${(props) => (props.id === 6 ? '90%' : '90%')};
		margin-top: ${(props) => (props.id === 0 ? '1em' : '0.5em')};
	}
`;

const QuizBody = ({ state }) => {
	return (
		<InputBox>
			<QuizIndividualSimple state={state} />
			{/* <QuizIndividualComplex state={state} /> */}
			<CheckBox />
		</InputBox>
	);
};

export default QuizBody;
