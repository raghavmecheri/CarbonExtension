import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
	padding: 1em;
	text-transform: uppercase;
	text-align: center;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	font-size: 20px;
`;

const HeroText = ({ children }) => {
	return <TextStyle>{children}</TextStyle>;
};

export default HeroText;
