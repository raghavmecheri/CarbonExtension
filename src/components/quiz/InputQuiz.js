import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
`;

const Input = styled.input`
	background: #ffffff6b;
	border: none;
	border-bottom: 2px solid lightgreen;
	height: 3em;
	width: 17em;
	color: white;
	padding: 0;
	margin: 0;
	font-size: medium;
	text-align: center;
	&:focus {
		background: #00000080;
	}
`;

const Selector = styled.select`
	font-size: medium;
	width: 17em;
	text-align-last: center;
	text-align: center;
`;

export const InputQuiz = ({ questionData, handleInput, keyRow }) => {
	const { options, type, gdp } = questionData;

	return options.map((option, key) => {
		if (key === 1) {
			return (
				<Selector>
					{type.map((item, i) => {
						return <option key={i}>{item}</option>;
					})}
				</Selector>
			);
		} else if (key === 2 && gdp) {
			return (
				<Selector>
					{gdp.map((item, i) => {
						return <option key={i}>{item}</option>;
					})}
				</Selector>
			);
		}

		return (
			<QuestionsOptionsWrapper>
				<Input
					type='text'
					id={keyRow}
					name={option}
					onChange={handleInput}
					placeholder='Put Something'></Input>
			</QuestionsOptionsWrapper>
		);
	});
};
