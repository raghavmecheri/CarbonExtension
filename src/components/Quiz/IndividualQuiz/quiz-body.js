import React, { useCallback } from 'react';
import styled from 'styled-components';

import QuizIndividualSimple from './quiz-individual-simple';
import { QuestionQuizIndividualComplex } from './quiz-individual-complex';
import { CheckBox } from '../ComponentsQuiz/CheckBox';

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 100%;
	height: 30vh;
	padding: 0 0.5em;
	overflow-y: hidden;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 9px 9px 14px -13px rgba(138, 138, 138, 1);
	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
	${({ theme }) =>
		theme.query.bigMobile({
			'margin-bottom': '2em',
			width: 'auto',
		})}
`;

const QuizIndividualState = ({ state, handleSlider, quizType }) => {
	if (quizType) return <QuizIndividualSimple state={state} handleSlider={handleSlider} />;
	{
		/* <QuizIndividualComplex state={state} /> */
	}
	return <h1>Hola</h1>;
};

const QuizBody = ({ state, dispatch }) => {
	const { questionIndex } = state;
	let { quizType, changeState, ...rest } = state.quizData[questionIndex];

	const handleSlider = useCallback((e, name) => {
		const { value } = e.target;
		dispatch({ type: name, value: value });
	});

	const handleQuizState = useCallback(() => {
		dispatch({ type: 'quizState', payload: quizType });
	});

	return (
		<InputBox>
			{/* {quizType ? <QuizIndividualSimple state={state} handleSlider={handleSlider} /> : <h1>Hola</h1>} */}
			<QuizIndividualState state={rest} handleSlider={handleSlider} quizType={quizType} />
			<CheckBox handleQuizState={handleQuizState} changeState={changeState} />
		</InputBox>
	);
};

export default QuizBody;
