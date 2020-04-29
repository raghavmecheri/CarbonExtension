import React from 'react';
import styled from 'styled-components';

const QuestionsOptionsWrapper = styled.div`
	font-size: 30px;
	padding: 20px;
	width: 9em;
`;

export const ColumnQuiz = ({ rowsHeaders }) =>
	rowsHeaders.map((header, key) => {
		return (
			<QuestionsOptionsWrapper key={key}>{header}</QuestionsOptionsWrapper>
		);
	});
