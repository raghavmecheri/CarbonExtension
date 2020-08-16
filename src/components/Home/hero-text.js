import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
	padding-top: 2em;
	text-align: center;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: 700;
	font-size: 20px;
`;

const HeroText = ({ children }) => {
	return <TextStyle>{children}</TextStyle>;
};

export default HeroText;
