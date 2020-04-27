import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
	padding: 20px;
`;

export const ColumnQuiz = ({ questionData, handleOption }) => {
	const { options } = questionData;
	return options.map((option, key) => {
		return (
			<QuestionsOptionsWrapper key={key} onClick={() => handleOption(option)}>
				{option}
			</QuestionsOptionsWrapper>
		);
	});
};
