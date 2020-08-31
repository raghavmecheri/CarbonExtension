import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import Quiz from './quiz';
import BuisnessHeader from './BusinessQuiz/buisness-header';
import BuisnessBody from './BusinessQuiz/buisness-body';
import quizData from '../../data/business-carbon-data';

const BuisnessWrapper = styled.div`
	height: 100%;
	width: inherit;
	&.next-enter {
		transform: translateX(100vw);
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(180vw)',
			})}
	}
	&.next-enter-active {
		transform: translateX(0%);
		transition: transform 1000ms ease-in-out;
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(0vw)',
				transition: 'transform 1000ms ease-in-out',
			})}
	}
	&.next-exit {
		transform: translateX(-50vw);
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(-80vw)',
			})}
	}
	&.next-exit-active {
		transform: translateX(-200vw);
		transition: transform 1000ms ease-in-out;
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(-200vw)',
				transition: 'transform 1000ms ease-in-out',
			})}
	}

	&.back-enter {
		transform: translateX(-100vw);
	}
	&.back-enter-active {
		transform: translateX(0%);
		transition: transform 1000ms ease-in-out;
	}
	&.back-exit {
		transform: translateX(-50vw);
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(-80vw)',
			})}
	}
	&.back-exit-active {
		transform: translateX(100vw);
		transition: transform 1000ms ease-in-out;
	}
`;

const reducer = (state, action) => {
	const questionsLenght = Object.keys(state.quizData).length - 1;
	let questionIndex = state.questionIndex;
	let newState = { ...state };
	switch (action.type) {
		case 'next':
			if (state.questionIndex === questionsLenght) return state;
			return { ...state, questionIndex: state.questionIndex + 1 };
		case 'done':
			return state;
		case 'back':
			if (state.questionIndex === 0) return state;
			return { ...state, questionIndex: state.questionIndex - 1 };
		case 'reset':
			return { ...state, questionIndex: 0 };
		case 'addRow':
			newState.quizData[questionIndex].simpleState.slider = action.value;
			return newState;
		case 'deleteRow':
			newState.quizData[questionIndex].complexState.savedValue[action.name] = action.value;
			return newState;
		case 'handleInput':
			newState.quizData[state.questionIndex].savedValue[action.row][action.name] = action.value;
			return newState;
		default:
			throw new Error('Unexpected action');
	}
};

const initialState = {
	quizData: { ...quizData },
	questionIndex: 0,
};

const BusinessQuiz = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// const updateInputValueBusinessForm = ({ columName, rowIndex, value }) => {
	// 	const screenRows = formState[questionIndex].rowStructure;
	// 	screenRows[rowIndex][columName] = value;
	// 	setFormState({
	// 		...formState,
	// 		[questionIndex]: {
	// 			...formState[questionIndex],
	// 			rowStructure: screenRows,
	// 		},
	// 	});
	// };

	// const handleAddRow = () => {
	// 	const newScreenState = {
	// 		...formState[questionIndex],
	// 		rowStructure: [...formState[questionIndex].rowStructure, { ...formState[questionIndex].rowsType[0] }],
	// 	};
	// 	setFormState({
	// 		...formState,
	// 		[questionIndex]: newScreenState,
	// 	});
	// };

	// const handleDeleteQuestion = () => {
	// 	const newScreenState = {
	// 		...formState[questionIndex],
	// 	};
	// 	newScreenState.rowStructure.pop();
	// 	setFormState({
	// 		...formState,
	// 		[questionIndex]: newScreenState,
	// 	});
	// };

	// const handleInput = (e, rowIndex, columName) => {
	// 	e.preventDefault();
	// 	const { value } = e.target;
	// 	updateInputValueBusinessForm({ value, rowIndex, columName });
	// };

	return (
		<Quiz state={state} dispatch={dispatch}>
			<BuisnessWrapper>
				<BuisnessHeader state={state} />
				<BuisnessBody state={state} dispatch={dispatch} />
			</BuisnessWrapper>
		</Quiz>
	);
};

export default BusinessQuiz;

// {/* <QuestionQuizBusiness rowsValues={formState[questionIndex]} handleInput={handleInput} /> */}
// 	 <Buttons
// 		back={back}
// 		next={next}
// 		finish={finish}
// 		end={endQuestion}
// 		handleDeleteQuestion={handleDeleteQuestion}
// 		handleAddRow={handleAddRow}
// 		rowsValues={formState[questionIndex]}
// 	/>
//  </Quiz>
