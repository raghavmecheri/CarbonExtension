import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
	text-transform: uppercase;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	text-align: center;
	font-size: 50px;
`;

const HeroTitle = ({ children }) => {
	return <Title>{children}</Title>;
};

export default HeroTitle;
