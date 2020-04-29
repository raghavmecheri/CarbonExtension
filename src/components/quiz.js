import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/boxicons-regular';

import bg_error from '../assets/bg_error.jpeg';
import { QuestionQuiz } from './quiz/QuestionQuiz';
import { Buttons } from './quiz/ButtonsQuiz';
import { OrganizationQuizData } from '../data/organization-quiz-data';
import { PersonQuizData } from '../data/person-quiz-data';

const QuizWrapper = styled.div`
	background-image: ${(props) =>
		props.questionData
			? `url(${props.questionData.image})`
			: `url(${bg_error})`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: #000000;
	height: 100vh;
	width: 100vw;
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

const ArrowIcon = styled(ArrowBack)`
	position: absolute;
	background-color: transparent;
	border: 1px solid red;
	color: white;
	text-decoration: none;
	left: 0;
	top: 0;
	font-size: 16px;
	&:hover {
		cursor: pointer;
	}
	color: red;
`;

const Box = styled.div`
	background: #656464ad;
	padding: 7px 35px;
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

const pantalla = [
	{ title: 'Edificio', energyType: 'Gasolina', quantity: '100' },
	{ title: 'Edificio2', energyType: 'Gasolina2', quantity: '200' },
];

const rowsType = [{ title: '', energyType: '', quantity: '' }];

export const Quiz = () => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);
	const [formState, setFormState] = useState(OrganizationQuizData);

	let { type } = useParams();
	let data;

	if (type === 'person') {
		data = PersonQuizData;
	} else if (type === 'organization') {
		data = OrganizationQuizData;
	} else {
		return <ErrorPage />;
	}

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
		console.log(screenRows[rowIndex]);
		screenRows[rowIndex][columName] = value;
		console.log({ screenRows });
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
				{ ...rowsType[0] },
			],
		};
		setFormState({
			...formState,
			[questionIndex]: newScreenState,
		});
	};

	const handleDeleteQuestion = () => {
		// if (screenState.length < 2) return;
		// screenState.pop();
		// setScreenState([...screenState]);
	};

	const saveInput = () => {};

	const handleInput = (e, rowIndex, columName) => {
		e.preventDefault();
		const { id, value } = e.target;
		updateInputValueForm({ value, rowIndex, columName });
	};

	const finish = () => {
		console.log('finish');
	};

	return (
		<QuizWrapper questionData={data[questionIndex]}>
			<Link to='/carbon'>
				<ArrowIcon size='48' />
			</Link>
			<Box>
				<QuestionQuiz
					handleDeleteQuestion={handleDeleteQuestion}
					handleAddRow={handleAddRow}
					rowsValues={formState[questionIndex]}
					handleInput={handleInput}
				/>
				<Buttons back={back} next={next} finish={finish} end={endQuestion} />
			</Box>
		</QuizWrapper>
	);
};
