import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.h2`
	text-align: center;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: 700;
	font-size: 20px;
	padding-top: 2em;
	margin-bottom: 0;
	@media only screen and (max-width: 1000px) {
		font-size: 18px;
		margin-bottom: 1em;
	}
	@media only screen and (max-width: 500px) {
		font-size: 15px;
		margin-bottom: 1em;
	}
`;

const HeroText = ({ children }) => {
	return <TextStyle>{children}</TextStyle>;
};

export default HeroText;
