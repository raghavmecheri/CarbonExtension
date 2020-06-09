import React from 'react';
import styled from 'styled-components';

import { RowTitles } from './RowTitles';
import { InputRow } from './InputRow';

const QuestionsWrapper = styled.div`
	height: 100%;
	width: inherit;
`;

const Tittle = styled.div`
	font-size: 42px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	padding-left: 3vw;
	color: #38a66d;
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
	display: flex;
	justify-content: center;
	padding-left: 3vw;
	@media (max-width: 810px) {
		padding-left: 0;
		padding: 1em;
	}
`;

const RowInputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	padding-bottom: 1em;
	margin-left: 1vw;
	-webkit-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	-moz-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	@media (max-width: 810px) {
		padding: 1em;
	}
`;

const RowTitlesWrapper = styled.div`
	margin-top: 1em;
	width: inherit;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 810px) {
		margin-top: 0em;
	}
`;

const InputRowWrapper = styled.div`
	margin-top: 1em;
	width: inherit;
	border-top: 1px solid #6fce99;
	padding-top: 1em;
`;

export const QuestionQuizBusiness = ({ rowsValues, handleInput, value }) => {
	const {
		id,
		title,
		description,
		rowTitles,
		rowStructure,
		dropdownTypes,
		placeHolder,
		gdp,
	} = rowsValues;

	console.log(rowsValues);

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
							key={key}
							gdp={gdp}
							id={id}
							handleInput={handleInput}
							value={value}
							dropdownTypes={dropdownTypes}
							placeHolder={placeHolder}
						/>
					</InputRowWrapper>
				))}
			</RowInputBox>
		</QuestionsWrapper>
	);
};
