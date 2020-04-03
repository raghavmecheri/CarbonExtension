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

const BgImg = styled.img`
	position: absolute;
	z-index: -99;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

export const Question = ({ questionDef, handleOption }) => {
	const { title, description, options, image } = questionDef;
	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<h3>{description}</h3>
			<QuestionsBox>
				<QuestionsOptions options={options} handleOption={handleOption} />
			</QuestionsBox>
			<BgImg src={image} />
		</QuestionsWrapper>
	);
};
