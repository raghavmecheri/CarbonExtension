import React, { useState } from 'react';
import styled from 'styled-components';
import { AddBox } from '@styled-icons/material';

import { ColumnQuiz } from './ColumnQuiz';
import { InputQuiz } from './InputQuiz';

const QuestionsWrapper = styled.div``;

const Tittle = styled.div`
	font-size: 60px;
	font-weight: 600;
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
`;

const InputBox = styled.div`
	width: 42em;
`;

const ColumnQuizWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputQuizWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const AddButton = styled(AddBox)`
	width: 40px;
	margin: 20px;
	color: black;
	&:hover {
		cursor: pointer;
		color: green;
	}
`;

export const QuestionQuiz = ({ questionData, handleOption }) => {
	const { title, description } = questionData;
	const [inputAdd, setInputAdd] = useState({ input: ['input-0'] });

	const handleAddField = () => {
		console.log('add');
	};
	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<Description>{description}</Description>
			<InputBox>
				<ColumnQuizWrapper>
					<ColumnQuiz questionData={questionData} />
				</ColumnQuizWrapper>
				<InputQuizWrapper>
					{inputAdd.input.map((input) => (
						<InputQuiz
							key={input}
							questionData={questionData}
							handleOption={handleOption}
						/>
					))}
				</InputQuizWrapper>
				<AddButton onClick={handleAddField} />
			</InputBox>
		</QuestionsWrapper>
	);
};
