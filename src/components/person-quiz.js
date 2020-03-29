import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { PersonQuizDefinition } from '../data/person-quiz-data';

const QuizWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Box = styled.div`
	background: #ffffff73;
	padding: 7px 35px;
`;
const QuestionsWrapper = styled.div``;

const Tittle = styled.div`
	font-size: 60px;
	font-weight: 600;
`;

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
	padding: 1em 1em;
`;

const QuestionsBox = styled.div`
	display: flex;
`;

const BgImg = styled.img`
	position: absolute;
	z-index: -99;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	@media only screen and (max-width: 850px) {
		display: grid;
		align-items: center;
		justify-content: center;
		margin-top: 0;
	}
`;

const Button = styled.button`
	background: whites;
	backdrop-filter: blur(2px);
	padding: 8px;
	color: ${props => props.theme.colors.dark};
	font-size: 20px;
	border: 2px solid dark;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.ligth};
		background: ${props => props.theme.colors.dark};
		font-weight: 500;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
`;

const QuestionsOptions = ({ options }) => {
	return options.map((option, key) => {
		return (
			<QuestionsOptionsWrapper key={key}>{option}</QuestionsOptionsWrapper>
		);
	});
};
const Question = ({ questionDef }) => {
	const { title, description, options, image, layout } = questionDef;
	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<h3>{description}</h3>
			<QuestionsBox>
				<QuestionsOptions options={options} />
			</QuestionsBox>
			<BgImg src={image} />
		</QuestionsWrapper>
	);
};

const PersonQuiz = () => {
	const [questionIndex, setQuestionIndex] = useState(0);

	const next = useCallback(() => {
		if (questionIndex < PersonQuizDefinition.length - 1) {
			const newIndex = questionIndex + 1;
			setQuestionIndex(newIndex);
		}
	}, [questionIndex, setQuestionIndex]);
	const back = useCallback(() => {
		console.log(questionIndex);
		if (questionIndex > 0) {
			const newIndex = questionIndex - 1;
			setQuestionIndex(newIndex);
		}
	}, [questionIndex, setQuestionIndex]);
	return (
		<QuizWrapper>
			<Box>
				<Question questionDef={PersonQuizDefinition[questionIndex]} />
				<ButtonBox>
					<Button onClick={back}>Back</Button>
					<Button onClick={next}>Next</Button>
				</ButtonBox>
			</Box>
		</QuizWrapper>
	);
};

export default PersonQuiz;
