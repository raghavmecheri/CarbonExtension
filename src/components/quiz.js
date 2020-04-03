import React, { useCallback, useState } from 'react';
import { Question } from './quiz/QuestionsQuiz';
import { Buttons } from './quiz/ButtonsQuiz';
import styled from 'styled-components';

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

const Quiz = ({ QuizDefinition }) => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);
	const [clickOption, setClickOption] = useState(false);

	const handleOption = () => {
		setClickOption(true);
		console.log(clickOption);
	};

	const next = useCallback(() => {
		if (questionIndex == QuizDefinition.length - 2) {
			console.log(questionIndex);
			let newIndex = questionIndex + 1;
			setQuestionIndex(newIndex);
			setEndQuestion(true);
		} else if (questionIndex < QuizDefinition.length - 1) {
			console.log('question', questionIndex);
			console.log('total', QuizDefinition.length - 1);
			let newIndex = questionIndex + 1;
			setQuestionIndex(newIndex);
		}
	}, [questionIndex, setQuestionIndex]);

	const back = useCallback(() => {
		if (questionIndex > 0) {
			const newIndex = questionIndex - 1;
			setQuestionIndex(newIndex);
			setEndQuestion(false);
		}
	}, [questionIndex, setQuestionIndex]);

	const finish = useCallback(() => {
		console.log('finish');
	}, [questionIndex, setQuestionIndex]);

	return (
		<QuizWrapper>
			<Box>
				<Question
					questionDef={QuizDefinition[questionIndex]}
					handleOption={handleOption}
				/>
				<Buttons back={back} next={next} finish={finish} end={endQuestion} />
			</Box>
		</QuizWrapper>
	);
};

export default Quiz;
