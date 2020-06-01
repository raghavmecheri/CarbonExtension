import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	font-size: 25px;
	padding-top: 20px;
	width: 100%;
`;

export const RowTitles = ({ rowTitles }) =>
	rowTitles.map((header, key) => {
		return <HeaderWrapper key={key}>{header}</HeaderWrapper>;
	});
