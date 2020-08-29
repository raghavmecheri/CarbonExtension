import React from 'react';
import styled from 'styled-components';

const ComplexQuestionBox = styled.div`
	font-family: 'Heebo', sans-serif;
	width: 100%;
	font-size: 10px;
`;

const QuestionWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const QuestionComplex = styled.div`
	font-size: 20px;
	margin: 0.3em 0;
`;

const QuestionInput = styled.input`
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
		color: white;
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
