import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	font-size: 30px;
	padding: 20px;
	width: 9em;
`;

export const RowTitles = ({ rowTitles }) =>
	rowTitles.map((header, key) => {
		return <HeaderWrapper key={key}>{header}</HeaderWrapper>;
	});
