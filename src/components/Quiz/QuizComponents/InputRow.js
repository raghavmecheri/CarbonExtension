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
	const { title, energyType, quantity, gdp } = rowData;
	console.log(placeHolder);
	return (
		<QuestionsOptionsWrapper>
			<Input
				type='text'
				id={0}
				onChange={(e) => handleInput(e, rowIndex, 'title')}
				value={title}
				placeholder={placeHolder.first}
			/>
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
