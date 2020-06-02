import React, { useState } from 'react';
import styled from 'styled-components';

import { SideQuizMenu } from './QuizComponents/SideQuizMenu';
import { QuestionQuizComplex } from './QuizComponents/QuestionQuizComplex';
import { QuestionQuizSimple } from './QuizComponents/QuestionQuizSimple';
import { Buttons } from './QuizComponents/ButtonsQuiz';

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

export const Quiz = ({ stateScreen, setStateScreen, QuizData }) => {
	const [formState, setFormState] = useState(QuizData);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);
	const [simpleQuiz, setSimpleQuiz] = useState(formState[0].type === 'simple');
	const [sliderValue, setSliderValue] = useState(4);

	const handleQuizDesign = () => {
		setSimpleQuiz(false);
	};

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

	const handleSliderInput = (e) => {
		e.preventDefault();
		const { value } = e.target;
		setSliderValue(value);
		console.log(value);
	};

	const finish = () => {
		console.log('finsish');
		setStateScreen({ ...stateScreen, formState });
	};

	return (
		<QuizWrapper>
			<SideQuizMenu questionIndex={questionIndex} formState={formState} />
			<QuizBox>
				{simpleQuiz ? (
					<QuestionQuizSimple
						rowsValues={formState[questionIndex]}
						handleSliderInput={handleSliderInput}
						sliderValue={sliderValue}
						handleQuizDesign={handleQuizDesign}
					/>
				) : (
					<QuestionQuizComplex
						rowsValues={formState[questionIndex]}
						handleInput={handleInput}
					/>
				)}
				<Buttons
					back={back}
					next={next}
					finish={finish}
					end={endQuestion}
					handleDeleteQuestion={handleDeleteQuestion}
					handleAddRow={handleAddRow}
					simpleQuiz={simpleQuiz}
				/>
			</QuizBox>
		</QuizWrapper>
	);
};
