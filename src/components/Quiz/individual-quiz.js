import React, { useState, useReducer, useCallback } from 'react';
import styled from 'styled-components';

import Quiz from './quiz';
import QuizHeader from './IndividualQuiz/quiz-header';
import QuizBody from './IndividualQuiz/quiz-body';
import quizData from '../../data/individual-carbon-data';

const QuestionsWrapper = styled.div`
	height: 100%;
	width: 100%;
	@media (max-height: 740px) {
		padding-top: 0;
	}
`;

const reducer = (state, action) => {
	const questionsLenght = Object.keys(state.quizData).length;
	switch (action.type) {
		case 'next':
			if (state.questionIndex === questionsLenght) return state;
			return { ...state, questionIndex: state.questionIndex + 1 };
		case 'back':
			if (state.questionIndex === 0) return state;
			return { ...state, questionIndex: state.questionIndex - 1 };
		case 'reset':
			return { ...state, questionIndex: 0 };
		case 'slider':
			console.log(state);
			const value = action.value;
			const questionIndex = state.questionIndex;
			const newState = { ...state };
			// newState.quizData[0].simpleState.slider = value;
			return {
				...state,
				quizData: {
					...state.quizData,
					[questionIndex]: {
						...state.quizData[questionIndex],
						simpleState: {
							...state.quizData[questionIndex].simpleState,
							slider: value,
						},
					},
				},
			};
		// return state;
		default:
			throw new Error('Unexpected action');
	}
};

const IndividualQuiz = () => {
	const [state, dispatch] = useReducer(reducer, { quizData: { ...quizData }, questionIndex: 0 });

	const handleClick = useCallback((e) => {
		dispatch({ type: e.currentTarget.id });
	});

	const handleSlider = useCallback((e, name) => {
		const { value } = e.target;
		dispatch({ type: name, value: value });
	});

	return (
		<Quiz handleClick={handleClick}>
			<QuestionsWrapper>
				<QuizHeader state={state} />
				<QuizBody state={state} handleSlider={handleSlider} />
			</QuestionsWrapper>
		</Quiz>
	);
};

export default IndividualQuiz;
