import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { QuestionQuizIndividualSimple } from './QuestionQuizIndividualSimple';
import { QuestionQuizIndividualComplex } from './QuestionQuizIndividualComplex';
import { CheckBox } from './CheckBox';

const QuestionsWrapper = styled.div`
	height: 100%;
	width: inherit;
	@media (max-height: 740px) {
		padding-top: 0;
	}
`;

const Tittle = styled.div`
	font-size: 42px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	color: #38a66d;
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
	display: flex;
	justify-content: center;
`;

const SimpleQuizImage = styled.img`
	width: 13em;
`;

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 80%;
	margin: auto;
	padding-bottom: 1em;
	margin-top: 0.5em;
	-webkit-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	-moz-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
`;

export const QuestionQuizIndividual = ({
	rowsValues,
	handleSliderInput,
	sliderValue,
}) => {
	const { id, title, description, description2, image2 } = rowsValues;

	const [simpleQuiz, setSimpleQuiz] = useState(true);

	const handleQuizDesign = () => {
		setSimpleQuiz(false);
		console.log(simpleQuiz);
	};
	// const handleQuizDesign = useCallback(() => {
	// 	setSimpleQuiz((simpleQuiz) => !simpleQuiz);
	// }, [simpleQuiz]);
	// console.log(simpleQuiz);

	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<Description>{description}</Description>
			<SimpleQuizImage src={image2} />
			<InputBox>
				{simpleQuiz ? (
					<QuestionQuizIndividualSimple
						rowsValues={rowsValues}
						handleSliderInput={handleSliderInput}
						sliderValue={sliderValue}
					/>
				) : (
					<QuestionQuizIndividualComplex
						rowsValues={rowsValues}
						handleSliderInput={handleSliderInput}
						sliderValue={sliderValue}
					/>
				)}
				<CheckBox handleQuizDesign={handleQuizDesign} />
			</InputBox>
		</QuestionsWrapper>
	);
};
