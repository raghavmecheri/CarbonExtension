import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonArrow from './ComponentsQuiz/button-arrow';
import Navbar from '../Navbar/navbar';

const QuizWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #f1f1f1;
	display: flex;
	justify-content: center;
	align-items: center;
	${({ theme }) =>
		theme.query.bigMobile({
			display: 'flex',
			'flex-direction': 'column',
			'justify-content': 'center',
			'align-items': 'center',
		})}
`;

const QuizBox = styled.div`
	color: black;
	width: 43vw;
	height: 100%;
	${({ theme }) =>
		theme.query.bigDesktop({
			width: '50vw',
		})}
	${({ theme }) =>
		theme.query.desktop({
			width: '65vw',
		})}
	${({ theme }) =>
		theme.query.smallDesktop({
			width: '80vw',
		})}
	${({ theme }) =>
		theme.query.bigMobile({
			height: 'auto',
			width: '90vw',
		})}
`;

const MobileStyle = styled.div`
	display: none;
	${({ theme }) =>
		theme.query.bigMobile({
			display: 'flex',
			'justify-content': 'space-around',
			'align-items': 'center',
			width: '100%',
		})}
`;

const Quiz = ({ children, handleClick, state }) => {
	const questionsLenght = Object.keys(state.quizData).length - 1;
	const questionIndex = state.questionIndex;

	return (
		<QuizWrapper>
			<Navbar />
			<ButtonArrow handleClick={handleClick} content='back' />
			<QuizBox>{children}</QuizBox>
			{questionIndex === questionsLenght ? (
				<ButtonArrow handleClick={handleClick} content='done' />
			) : (
				<ButtonArrow handleClick={handleClick} content='next' />
			)}
			<MobileStyle>
				<ButtonArrow mobile handleClick={handleClick} content='back' />
				<ButtonArrow mobile handleClick={handleClick} content='next' />
			</MobileStyle>
		</QuizWrapper>
	);
};

export default Quiz;
