import React from 'react';
import styled from 'styled-components';

import { QuestionWaterQuizIndividualSimple } from './SimpleQuiz/QuestionWaterQuizIndividualSimple';
import { QuestionWaterQuizIndividualComplex } from './ComplexQuiz/QuestionWaterQuizIndividualComplex';
import { CheckBox } from '../QuizComponents/CheckBox';

const QuestionsWrapper = styled.div`
	height: 100%;
	width: inherit;
	padding-top: 0;
	/* padding-top: ${(props) => (props.id === 0 ? '0%' : '4%')}; */
	@media (max-height: 740px) {
		padding-top: 0;
	}
`;

const Tittle = styled.div`
	font-size: 42px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	color: cornflowerblue;
	padding-bottom: ${(props) =>
		props.id === 0 && !props.simpleQuiz ? '2%' : '0%'};
	padding-bottom: 0;
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
	display: flex;
	justify-content: center;
`;

const SimpleQuizImage = styled.img`
	width: 18em;
	/* display: ${(props) =>
		(props.id === 0 && !props.simpleQuiz) || props.id === 6
			? 'none'
			: 'initial'}; */
	@media (max-height: 650px) {
		width: 10em;
	}
`;

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 80%;
	margin: auto;
	max-height: 47vh;
	overflow-y: hidden;
	overflow-y: scroll;
	padding-bottom: 0.5em;
	padding-top: 0.5em;
	/* max-height: ${(props) => (props.simpleQuiz ? '50vh' : '72vh')}; */
	max-height: 60vh;
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
		margin: auto;
	}
`;

const QuestionQuiz = styled.div`
	font-size: 25px;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	display: flex;
	justify-content: center;
`;

const SubQuestionQuiz = styled.div`
	font-size: 15px;
	padding-bottom: 1.5em;
	display: flex;
	justify-content: center;
`;

export const QuestionWaterQuizIndividual = ({
	rowsValues,
	handleWaterSlider,
	handleWaterInput,
	handleQuizDesign,
	simpleQuiz,
}) => {
	const {
		id,
		title,
		description,
		description2,
		image2,
		ComplexForm,
	} = rowsValues;

	return (
		<QuestionsWrapper id={id}>
			<Tittle id={id} simpleQuiz={simpleQuiz}>
				{title}
			</Tittle>
			<Description>{description}</Description>
			<QuestionQuiz>{description2}</QuestionQuiz>
			<SubQuestionQuiz>(Higher or Lower than average)</SubQuestionQuiz>
			<InputBox ComplexForm={ComplexForm}>
				{simpleQuiz && ComplexForm ? (
					<QuestionWaterQuizIndividualSimple
						rowsValues={rowsValues}
						handleWaterSlider={handleWaterSlider}
						handleWaterInput={handleWaterInput}
					/>
				) : (
					<QuestionWaterQuizIndividualComplex
						rowsValues={rowsValues}
						handleWaterInput={handleWaterInput}
					/>
				)}
			</InputBox>
			<CheckBox handleQuizDesign={handleQuizDesign} ComplexForm={ComplexForm} />
		</QuestionsWrapper>
	);
};
