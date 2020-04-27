import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
`;

export const InputQuiz = ({ questionData, handleOption }) => {
	const { options, type } = questionData;
	return options.map((option, key) => {
		console.log(type);
		return (
			<QuestionsOptionsWrapper key={key} onClick={() => handleOption(option)}>
				<input type='text' id='lastName' name='lastName'></input>
			</QuestionsOptionsWrapper>
		);
	});
};
