import React from 'react';
import styled from 'styled-components';

const ComplexQuestionBox = styled.div`
	font-family: 'Heebo', sans-serif;
	width: 100%;
	font-size: 10px;
	display: flex;
	flex-direction: column;
`;

const RowWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.5em 0;
`;

const Question = styled.h5`
	font-size: 20px;
	text-align: end;
	margin: 0;
	padding: 0.5em 2em;
	padding-left: 0;
	width: 24%;
`;

const QuestionInput = styled.input`
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
	border-radius: 0.5em;
	height: 2em;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	width: 45%;
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
					<RowWrapper key={key}>
						<Question>{question}</Question>
						<QuestionInput type='number' value='' placeholder={placeHolder[question]} />
					</RowWrapper>
				);
			})}
		</ComplexQuestionBox>
	);
};

export default QuestionQuizIndividualComplex;
