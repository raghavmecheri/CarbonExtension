import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: inherit;
`;

const Input = styled.input`
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
	border-radius: 0.5em;
	height: 3em;
	width: 100%;
	margin: 0em 2em;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	&:focus {
		background: white;
	}
	@media (max-width: 810px) {
		margin: 0em;
	}
`;

const Selector = styled.select`
	width: 100%;
	margin: 0em 2em;
	font-size: medium;
	border-radius: 0.3em;
	text-align-last: center;
	text-align: center;
`;

export const InputRow = ({
	rowData,
	handleInput,
	rowIndex,
	dropdownTypes,
	placeHolder,
}) => {
	const { title, title2, energyType, quantity, gdp } = rowData;

	return (
		<QuestionsOptionsWrapper>
			<Input
				type='text'
				id={0}
				onChange={(e) => handleInput(e, rowIndex, 'title')}
				value={title}
				placeholder={placeHolder.first}
			/>
			{Object.keys(rowData).length > 3 ? (
				<Input
					type='text'
					id={3}
					onChange={(e) => handleInput(e, rowIndex, 'title2')}
					value={title2}
					placeholder={placeHolder.third}
				/>
			) : null}
			<Selector onChange={(e) => handleInput(e, rowIndex, 'energyType')}>
				{dropdownTypes.map((item, i) => {
					return <option key={i}>{item}</option>;
				})}
			</Selector>
			<Input
				type='number'
				id={2}
				value={quantity}
				onChange={(e) => handleInput(e, rowIndex, 'quantity')}
				placeholder={placeHolder.second}
			/>
		</QuestionsOptionsWrapper>
	);
};
