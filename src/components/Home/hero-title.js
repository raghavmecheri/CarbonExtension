import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.forest};
	font-family: ${(props) => props.theme.fontFamily.title};
	font-weight: 900;
	text-align: center;
	font-size: 60px;
	margin-bottom: 0;
	letter-spacing: -5px;
`;


const HeroTitle = ({ children }) => {
	return <Title>{children}</Title>;
};

export default HeroTitle;
