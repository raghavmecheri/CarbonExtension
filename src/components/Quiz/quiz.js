import React, { useState, useReducer, reducer, initialState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import bg_error from '../../assets/bg_error.jpeg';

import { SideQuizMenu } from './QuizComponents/SideQuizMenu';
import { QuestionQuiz } from './QuizComponents/QuestionQuiz';
import { Buttons } from './QuizComponents/ButtonsQuiz';
import { OrganizationQuizData } from '../../data/organization-quiz-data';
import { PersonQuizData } from '../../data/person-quiz-data';

const QuizWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #f1f1f1;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}
`;

const QuizBox = styled.div`
	color: black;
	max-width: 70vw;
	padding: 2em;
	height: 100%;
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ErrorContainer = styled.div`
	height: 100vh;
	color: red;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	background: black;
`;

const ErrorButton = styled.button`
	background: transparent;
	color: white;
	font-size: 1.5rem;
	padding: 1rem;
	border: 1px solid red;
	&:hover {
		cursor: pointer;
		background: white;
		color: red;
	}
`;

const ErrorPage = () => (
	<ErrorContainer>
		<div>
			<h1>Error 404</h1>
			<p>Page not found</p>
			<Link to='/'>
				<ErrorButton>Go Back!</ErrorButton>
			</Link>
		</div>
	</ErrorContainer>
);

export const Quiz = ({ stateScreen, setStateScreen }) => {
	const [formState, setFormState] = useState(OrganizationQuizData);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);

	const back = () => {
		if (questionIndex > 0) {
			let updateIndexQuestion = questionIndex - 1;
			setQuestionIndex(updateIndexQuestion);
			setEndQuestion(false);
		}
	};

	const next = () => {
		if (questionIndex > Object.keys(formState).length - 3) {
			let newIndex = questionIndex + 1;
			setQuestionIndex(newIndex);
			setEndQuestion(true);
		} else if (questionIndex < Object.keys(formState).length - 1) {
			let updateIndexQuestion = questionIndex + 1;

			setQuestionIndex(updateIndexQuestion);
		}
	};

	const updateInputValueForm = ({ columName, rowIndex, value }) => {
		const screenRows = formState[questionIndex].rowStructure;
		screenRows[rowIndex][columName] = value;
		setFormState({
			...formState,
			[questionIndex]: {
				...formState[questionIndex],
				rowStructure: screenRows,
			},
		});
	};

	const handleAddRow = () => {
		const newScreenState = {
			...formState[questionIndex],
			rowStructure: [
				...formState[questionIndex].rowStructure,
				{ ...formState[questionIndex].rowsType[0] },
			],
		};
		setFormState({
			...formState,
			[questionIndex]: newScreenState,
		});
	};

	const handleDeleteQuestion = () => {
		const newScreenState = {
			...formState[questionIndex],
		};
		newScreenState.rowStructure.pop();
		setFormState({
			...formState,
			[questionIndex]: newScreenState,
		});
	};

	const handleInput = (e, rowIndex, columName) => {
		e.preventDefault();
		const { value } = e.target;
		updateInputValueForm({ value, rowIndex, columName });
	};

	const finish = () => {
		console.log('finsish');
		setStateScreen({ ...stateScreen, formState });
	};

	return (
		<QuizWrapper>
			<SideQuizMenu questionIndex={questionIndex} formState={formState} />
			<QuizBox>
				<QuestionQuiz
					rowsValues={formState[questionIndex]}
					handleInput={handleInput}
				/>
				<Buttons
					back={back}
					next={next}
					finish={finish}
					end={endQuestion}
					handleDeleteQuestion={handleDeleteQuestion}
					handleAddRow={handleAddRow}
				/>
			</QuizBox>
		</QuizWrapper>
	);
};
