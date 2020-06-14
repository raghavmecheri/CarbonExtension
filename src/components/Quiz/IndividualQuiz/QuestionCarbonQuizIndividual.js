import React from 'react';
import styled from 'styled-components';

import { QuestionQuizIndividualSimple } from './SimpleQuiz/QuestionCarbonQuizIndividualSimple';
import { QuestionQuizIndividualComplex } from './ComplexQuiz/QuestionCarbonQuizIndividualComplex';
import { CheckBox } from '../QuizComponents/CheckBox';

const QuestionsWrapper = styled.div`
	height: 100%;
	width: inherit;
	padding-top: ${(props) => (props.id === 6 ? '0%' : '6%')};
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
	padding-bottom: ${(props) =>
		props.id === 0 && !props.simpleQuiz ? '2%' : '0%'};
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
	display: flex;
	justify-content: center;
`;

const SimpleQuizImage = styled.img`
	width: 13em;
	display: ${(props) =>
		(props.id === 0 && !props.simpleQuiz) || props.id === 6
			? 'none'
			: 'initial'};
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
	padding-bottom: 1em;
	margin-top: 0.5em;
	max-height: ${(props) =>
		props.id === 6 || props.id === 0 ? '72vh' : '50vh'};
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
		margin: none;
		max-height: ${(props) =>
			props.id === 6 || props.id === 0 ? '72vh' : '50vh'};
		width: ${(props) => (props.id === 6 ? '90%' : '90%')};
		margin-top: ${(props) => (props.id === 0 ? '1em' : '0.5em')};
	}
`;

export const QuestionCarbonQuizIndividual = ({
	rowsValues,
	handleSliderInput,
	handleInputIndividual,
	handleQuizDesign,
	simpleQuiz,
}) => {
	const {
		id,
		title,
		description,
		image2,
		ComplexForm,
		ComplexFormState,
	} = rowsValues;

	return (
		<QuestionsWrapper id={id}>
			<Tittle id={id} simpleQuiz={simpleQuiz}>
				{title}
			</Tittle>
			{simpleQuiz && <Description>{description}</Description>}
			<SimpleQuizImage src={image2} id={id} simpleQuiz={simpleQuiz} />
			<InputBox id={id}>
				{simpleQuiz && ComplexForm ? (
					<QuestionQuizIndividualSimple
						rowsValues={rowsValues}
						handleSliderInput={handleSliderInput}
					/>
				) : (
					<QuestionQuizIndividualComplex
						rowsValues={rowsValues}
						handleSliderInput={handleSliderInput}
						handleInputIndividual={handleInputIndividual}
					/>
				)}
				<CheckBox
					handleQuizDesign={handleQuizDesign}
					ComplexForm={ComplexForm}
				/>
			</InputBox>
		</QuestionsWrapper>
	);
};
