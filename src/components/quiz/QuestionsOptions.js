import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
	padding: 1em 1em;
	&:hover {
		cursor: pointer;
		background: black;
		color: white;
	}
`;

export const QuestionsOptions = ({ options, handleOption }) => {
	const handleClick = option => {
		let arr = [];
		arr.push(option);
		console.log(arr);
		handleOption(arr);
	};
	return options.map((option, key) => {
		return (
			<QuestionsOptionsWrapper key={key} onClick={() => handleClick(option)}>
				{option}
			</QuestionsOptionsWrapper>
		);
	});
};
