import React from 'react';
import styled from 'styled-components';

const ComplexQuestionBox = styled.div`
	font-family: 'Heebo', sans-serif;
	width: 100%;
	font-size: 10px;
`;

const QuestionWrapper = styled.div`
	display: flex;
	justify-content: initial;
	align-items: center;
	position: relative;
	@media (max-width: 810px) {
		height: 4.5em;
		padding: 30px 0px;
	}
`;

const QuestionComplex = styled.div`
	font-size: 20px;
	margin: 0.3em 0;
	max-width: null;
	@media (max-width: 810px) {
		max-width: 7em;
		text-align: initial;
		font-size: 15px;
	}
`;

const QuestionInput = styled.input`
	position: absolute;
	right: 20%;
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
	border-radius: 0.5em;
	height: 2em;
	width: 15em;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	&:focus {
		background: white;
	}
	@media (max-width: 1200px) {
		width: 12em;
		right: 16%;
	}
	@media (max-width: 1150px) {
		width: 12em;
		right: 12%;
	}
	@media (max-width: 1000px) {
		width: 10em;
		right: 10%;
	}
	@media (max-width: 900px) {
		width: 10em;
		right: 8%;
	}
	@media (max-width: 810px) {
		width: 7em;
		right: 5%;
	}
`;

const QuestionQuizIndividualComplex = ({ state }) => {
	const { quizData, questionIndex } = state;
	const { questions, placeHolder } = quizData[questionIndex].complexState;
	return (
		<ComplexQuestionBox>
			{Object.keys(questions).map((question, key) => {
				return (
					<QuestionWrapper key={key}>
						<QuestionComplex>{question}</QuestionComplex>
						<QuestionInput type='number' value='' placeholder={placeHolder[question]} />
					</QuestionWrapper>
				);
			})}
		</ComplexQuestionBox>
	);
};

export default QuestionQuizIndividualComplex;
