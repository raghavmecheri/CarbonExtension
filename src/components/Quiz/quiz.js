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
`;

const QuizBox = styled.div`
	color: black;
	width: 60vw;
	height: 100%;
`;

const Quiz = ({ children, handleClick }) => {
	return (
		<QuizWrapper>
			<Navbar />
			<ButtonArrow handleClick={handleClick} content='back' />
			<QuizBox>{children}</QuizBox>
			<ButtonArrow handleClick={handleClick} content='next' />
		</QuizWrapper>
	);
};

export default Quiz;
