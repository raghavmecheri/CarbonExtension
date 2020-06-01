import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
`;

const Input = styled.input`
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
	border-radius: 0 0.5em;
	height: 3em;
	width: 16em;
	color: white;
	padding: 0;
	margin: 0 30px;
	font-size: medium;
	text-align: center;
	&:focus {
		background: #00000080;
	}
`;

const Selector = styled.select`
	font-size: medium;
	width: 14em;
	text-align-last: center;
	text-align: center;
`;

export const InputRow = ({ rowData, handleInput, rowIndex, dropdownTypes }) => {
	const { title, energyType, quantity, gdp } = rowData;
	return (
		<QuestionsOptionsWrapper>
			<Input
				type='text'
				id={0}
				onChange={(e) => handleInput(e, rowIndex, 'title')}
				value={title}
				placeholder='Put Something'
			/>
			<Selector onChange={(e) => handleInput(e, rowIndex, 'energyType')}>
				{dropdownTypes.map((item, i) => {
					return <option key={i}>{item}</option>;
				})}
			</Selector>
			<Input
				type='text'
				id={2}
				value={quantity}
				onChange={(e) => handleInput(e, rowIndex, 'quantity')}
				placeholder='Put Something'
			/>
		</QuestionsOptionsWrapper>
	);
};

// export const InputQuiz = ({ questionData, handleInput, keyRow }) => {
// 	const { options, type, gdp } = questionData;

// 	return options.map((option, key) => {
// 		if (key === 1) {
// 			return (
// 				<Selector>
// 					{type.map((item, i) => {
// 						return <option key={i}>{item}</option>;
// 					})}
// 				</Selector>
// 			);
// 		} else if (key === 2 && gdp) {
// 			return (
// 				<Selector>
// 					{gdp.map((item, i) => {
// 						return <option key={i}>{item}</option>;
// 					})}
// 				</Selector>
// 			);
// 		}

// 		return (
// 			<QuestionsOptionsWrapper>
// 				<Input
// 					type='text'
// 					id={keyRow}
// 					name={option}
// 					onChange={handleInput}
// 					placeholder='Put Something'
// 				/>
// 			</QuestionsOptionsWrapper>
// 		);
// 	});
// };
