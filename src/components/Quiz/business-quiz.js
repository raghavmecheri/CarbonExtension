import React, { useState } from 'react';
import styled from 'styled-components';

import { QuestionQuizBusiness } from './BusinessQuiz/QuestionQuizBusiness';
import { Buttons } from './QuizComponents/ButtonsQuiz';
import Quiz from './quiz';

const BusinessQuiz = ({ stateScreen, setStateScreen, QuizData }) => {
	const [formState, setFormState] = useState(QuizData);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);

	console.log(formState);

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

	const updateInputValueBusinessForm = ({ columName, rowIndex, value }) => {
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
			rowStructure: [...formState[questionIndex].rowStructure, { ...formState[questionIndex].rowsType[0] }],
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
		updateInputValueBusinessForm({ value, rowIndex, columName });
	};

	const finish = () => {
		setStateScreen({ ...stateScreen, formState });
	};

	return (
		<Quiz>
			<QuestionQuizBusiness rowsValues={formState[questionIndex]} handleInput={handleInput} />
			<Buttons
				back={back}
				next={next}
				finish={finish}
				end={endQuestion}
				handleDeleteQuestion={handleDeleteQuestion}
				handleAddRow={handleAddRow}
				rowsValues={formState[questionIndex]}
			/>
		</Quiz>
	);
};

export default BusinessQuiz;
