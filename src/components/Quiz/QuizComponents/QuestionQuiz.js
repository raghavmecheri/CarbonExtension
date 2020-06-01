import React from 'react';
import styled from 'styled-components';

import { RowTitles } from './RowTitles';
import { InputRow } from './InputRow';

const QuestionsWrapper = styled.div``;

const Tittle = styled.div`
	font-size: 60px;
	font-weight: 600;
	padding-bottom: 0em;
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
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

export const QuestionQuiz = ({ rowsValues, handleInput, value }) => {
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
			</RowInputBox>
		</QuestionsWrapper>
	);
};
