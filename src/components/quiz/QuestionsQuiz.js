import React from 'react';
import { QuestionsOptions } from './QuestionsOptions';
import styled from 'styled-components';

const QuestionsWrapper = styled.div``;

const Tittle = styled.div`
	font-size: 60px;
	font-weight: 600;
`;

const QuestionsBox = styled.div`
	display: flex;
`;

export const Question = ({ questionData, handleOption }) => {
	const { title, description, options, image } = questionData;
	console.log('questionData', title);
	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<h3>{description}</h3>
			<QuestionsBox>
				{/* <QuestionsOptions options={options} handleOption={handleOption} /> */}
			</QuestionsBox>
		</QuestionsWrapper>
	);
};
