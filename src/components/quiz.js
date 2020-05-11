import React, { useState, useReducer, reducer, initialState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

import bg_error from '../assets/bg_error.jpeg';
import { QuestionQuiz } from './quizComponents/QuestionQuiz';
import { Buttons } from './quizComponents/ButtonsQuiz';
import { OrganizationQuizData } from '../data/organization-quiz-data';
import { PersonQuizData } from '../data/person-quiz-data';

const QuizWrapper = styled.div`
	/* background-image: ${(props) =>
		props.formStateBackground
			? `url(${props.formStateBackground.image})`
			: `url(${bg_error})`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: #000000; */
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}
`;

const LogoStyle = styled.img`
	position: absolute;
	top: -2em;
	left: 0.5em;
	width: 12em;
`;

const Box = styled.div`
	/* background: #656464ad; */
	/* padding: 7px 35px; */
	color: black;
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
		<QuizWrapper formStateBackground={formState[questionIndex]}>
			<Link to='/'>
				<LogoStyle src={logo} alt='logo'></LogoStyle>
			</Link>
			<Box>
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
			</Box>
		</QuizWrapper>
	);
};
