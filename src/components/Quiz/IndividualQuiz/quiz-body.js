import React from 'react';
import styled from 'styled-components';

import QuizIndividualSimple from './quiz-individual-simple';
import { QuestionQuizIndividualComplex } from './quiz-individual-complex';
import { CheckBox } from '../ComponentsQuiz/CheckBox';

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 100%;
	height: 30vh;
	padding: 0 0.5em;
	overflow-y: hidden;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 9px 9px 14px -13px rgba(138, 138, 138, 1);
	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}
	${({ theme, open }) =>
		theme.query.bigMobile({
			'margin-bottom': '2em',
		})}
`;

const QuizBody = ({ state, handleSlider }) => {
	return (
		<InputBox>
			<QuizIndividualSimple state={state} handleSlider={handleSlider} />
			{/* <QuizIndividualComplex state={state} /> */}
			<CheckBox />
		</InputBox>
	);
};

export default QuizBody;
