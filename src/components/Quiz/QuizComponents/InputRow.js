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
		margin: 5px;
	}
`;

const Selector = styled.select`
	width: 100%;
	margin: 0em 2em;
	font-size: medium;
	border-radius: 0.3em;
	text-align-last: center;
	text-align: center;
	@media (max-width: 710px) {
		width: ${(props) => (props.id === 2 ? '74%' : '36%')};
		margin: ${(props) => (props.id === 2 ? '0' : '0em 1em')};
		margin-left: ${(props) => (props.id === 2 ? '1em' : '')};
		margin-right: ${(props) => (props.id === 2 ? '0.5em' : '')};
	}
`;

export const InputRow = ({
	rowData,
	handleInput,
	rowIndex,
	dropdownTypes,
	placeHolder,
	gdp,
	id,
}) => {
	const { title, title2, energyType, quantity } = rowData;

	return (
		<QuestionsOptionsWrapper>
			<Input
				type='text'
				id={0}
				onChange={(e) => handleInput(e, rowIndex, 'title')}
				value={title}
				placeholder={placeHolder.first}
			/>
			<Selector
				value={energyType}
				id={id}
				onChange={(e) => handleInput(e, rowIndex, 'energyType')}>
				{dropdownTypes.map((item, i) => {
					return <option key={i}>{item}</option>;
				})}
			</Selector>
			{Object.keys(rowData).length > 3 && !gdp ? (
				<Input
					type='number'
					id={3}
					onChange={(e) => handleInput(e, rowIndex, 'title2')}
					value={title2}
					placeholder={placeHolder.third}
				/>
			) : gdp ? (
				<Selector
					value={energyType}
					onChange={(e) => handleInput(e, rowIndex, 'energyType')}>
					{gdp.map((item, i) => {
						return <option key={i}>{item}</option>;
					})}
				</Selector>
			) : null}
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
