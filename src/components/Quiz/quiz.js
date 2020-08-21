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
	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}
	@media (max-width: 380px) and (max-height: 812px) {
		height: 130vh;
		height: ${(props) => (props.carbonQuiz ? '100vh' : '113vh')};
	}
	@media (max-width: 430px) and (max-height: 750px) {
		height: ${(props) => (props.carbonQuiz ? '110vh' : '120vh')};
	}
	@media (max-width: 400px) and (max-height: 700px) {
		height: 110vh;
		height: ${(props) => (props.carbonQuiz ? '116vh' : '125vh')};
	}
	@media (max-width: 350px) and (max-height: 600px) {
		height: 130vh;
		height: ${(props) => (props.carbonQuiz ? '130vh' : '135vh')};
	}
`;

const QuizBox = styled.div`
	color: black;
	width: 60vw;
	height: 100%;
	@media (max-width: 1400px) and (max-height: 700px) {
		padding-top: 1em;
	}
	@media (max-width: 810px) {
		max-width: 100%;
		padding-top: 5em;
	}
	@media (max-width: 450px) {
		max-width: 100%;
		margin: 0;
		padding: 0;
		padding-top: 5em;
		margin: 0;
		padding: 0;
		padding-top: 5em;
	}
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
