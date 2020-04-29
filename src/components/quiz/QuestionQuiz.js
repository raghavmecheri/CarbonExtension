import React from 'react';
import styled from 'styled-components';
import { AddBox } from '@styled-icons/material';

import { ColumnQuiz } from './ColumnQuiz';
import { InputRow } from './InputQuiz';

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
	handleAddRow,
	handleDeleteQuestion,
	rowsHeaders = ['Edificio', 'energyType', 'quantity'],
	rowsValues,
	handleInput,
	value,
}) => {
	const { title, description, rowStructure } = rowsValues;
	return (
		<QuestionsWrapper>
			<Tittle>{rowsValues.title}</Tittle>
			<Description>{rowsValues.description}</Description>
			<InputBox>
				<ColumnQuizWrapper>
					<ColumnQuiz rowsHeaders={rowsHeaders} />
				</ColumnQuizWrapper>
				{rowStructure.map((row, key) => (
					<InputQuizWrapper>
						<InputRow
							rowIndex={key}
							rowData={row}
							handleInput={handleInput}
							value={value}
						/>
					</InputQuizWrapper>
				))}
				<button onClick={handleDeleteQuestion}>Delete last </button>
				<AddButton onClick={handleAddRow} />
			</InputBox>
		</QuestionsWrapper>
	);
};
