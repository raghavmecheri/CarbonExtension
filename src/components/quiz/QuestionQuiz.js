import React from 'react';
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

const InputBox = styled.div``;

const ColumnQuizWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const InputQuizWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
`;

const AddButton = styled(AddBox)`
	width: 40px;
	margin: 20px;
	color: white;
	&:hover {
		cursor: pointer;
		color: green;
	}
`;

export const QuestionQuiz = ({
	questionData,
	handleAddField,
	handleDeleteQuestion,
	inputAdd,
	handleInput,
	value,
}) => {
	const { title, description } = questionData;

	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<Description>{description}</Description>
			<InputBox>
				<ColumnQuizWrapper>
					<ColumnQuiz questionData={questionData} />
				</ColumnQuizWrapper>
				{inputAdd.input.map((input, key) => (
					<InputQuizWrapper>
						<InputQuiz
							keyRow={key}
							questionData={questionData}
							handleInput={handleInput}
							value={value}
						/>
					</InputQuizWrapper>
				))}
				<button onClick={handleDeleteQuestion}>Delete last </button>
				<AddButton onClick={handleAddField} />
			</InputBox>
		</QuestionsWrapper>
	);
};
