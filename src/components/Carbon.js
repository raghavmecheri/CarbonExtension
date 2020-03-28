import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import PersonQuiz from './person-quiz';
const CarbonWrapper = styled.div`
	color: black;
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: auto;
	margin-top: 5em;
	@media only screen and (max-width: 850px) {
		display: grid;
		align-items: center;
		justify-content: center;
		margin-top: 0;
	}
`;

const Button = styled.button`
	background: transparent;
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

const Title = () => {
	return (
		<>
			<h1>Carbon</h1>
			<p>Start this quiz in order to know your carbon footprint.</p>
			<p>Are you a...</p>
		</>
	);
};
const PERSON = 'Person';
const COMPANY = 'Company';
const UNIVERSITY = 'University';

const QuizSelectionComponent = ({ handleClick }) => {
	return (
		<ButtonBox>
			<Button id={PERSON} onClick={handleClick}>
				Person
			</Button>
			<Button id={COMPANY} onClick={handleClick}>
				Company
			</Button>
			<Button id={UNIVERSITY} onClick={handleClick}>
				University
			</Button>
		</ButtonBox>
	);
};

const QuizWrapper = ({ quizType, handleClick }) => {
	if (quizType) {
		return getQuizType(quizType);
	}
	return <QuizSelectionComponent handleClick={handleClick} />;
};

const getQuizType = type => {
	switch (type) {
		case PERSON:
			return <PersonQuiz />;

		case COMPANY:
			return <div>{type}</div>;

		case UNIVERSITY:
			return <div>{type}</div>;

		default:
			return <div>{type}</div>;
	}
};
export const Carbon = () => {
	const [quizType, setQuizActiveType] = useState(null);
	const handleClick = useCallback((e = {}) => {
		const { id } = e.currentTarget;
		setQuizActiveType(id);
	}, []);

	return (
		<CarbonWrapper>
			<Title />
			<QuizWrapper quizType={quizType} handleClick={handleClick} />
		</CarbonWrapper>
	);
};
