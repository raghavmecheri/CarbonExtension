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

export const QuestionQuiz = ({ questionData, handleOption }) => {
	const { title, description } = questionData;
	const [inputAdd, setInputAdd] = useState({ input: ['input-0'] });

	let newInput = 0;

	const handleAddField = () => {
		newInput++;
		setInputAdd({
			...inputAdd,
			input: [...inputAdd.input, `input-${newInput}`],
		});
	};

	const clearAddField = () => {
		console.log('cleeeeeaaaaar');
	};

	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<Description>{description}</Description>
			<InputBox>
				<ColumnQuizWrapper>
					<ColumnQuiz questionData={questionData} />
				</ColumnQuizWrapper>
				{inputAdd.input.map((input, key) => (
					<InputQuizWrapper clearAddField={clearAddField}>
						<InputQuiz
							key={key}
							questionData={questionData}
							handleOption={handleOption}
						/>
					</InputQuizWrapper>
				))}

				<AddButton onClick={handleAddField} />
			</InputBox>
		</QuestionsWrapper>
	);
};
