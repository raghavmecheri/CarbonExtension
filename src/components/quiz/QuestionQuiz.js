import React from 'react';
import styled from 'styled-components';
import { AddBox } from '@styled-icons/material';

import { RowTitles } from './RowTitles';
import { InputRow } from './InputRow';

const QuestionsWrapper = styled.div``;

const Tittle = styled.div`
	font-size: 60px;
	font-weight: 600;
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
`;

const RowInputBox = styled.div``;

const RowTitlesWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const InputRowWrapper = styled.div`
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
	rowsValues,
	handleInput,
	value,
}) => {
	const {
		title,
		description,
		rowTitles,
		rowStructure,
		dropdownTypes,
	} = rowsValues;

	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<Description>{description}</Description>
			<RowInputBox>
				<RowTitlesWrapper>
					<RowTitles rowTitles={rowTitles} />
				</RowTitlesWrapper>
				{rowStructure.map((row, key) => (
					<InputRowWrapper>
						<InputRow
							rowIndex={key}
							rowData={row}
							handleInput={handleInput}
							value={value}
							dropdownTypes={dropdownTypes}
						/>
					</InputRowWrapper>
				))}
				<button onClick={handleDeleteQuestion}>Delete last </button>
				<AddButton onClick={handleAddRow} />
			</RowInputBox>
		</QuestionsWrapper>
	);
};
