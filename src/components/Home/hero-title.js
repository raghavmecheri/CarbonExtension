import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.forest};
	font-family: ${(props) => props.theme.fontFamily.title};
	font-weight: 900;
	text-align: center;
	font-size: 80px;
	margin-bottom: 0;
	letter-spacing: -5px;
	@media only screen and (max-width: 1000px) {
		font-size: 75px;
	}
	@media only screen and (max-width: 800px) {
		margin-top: 0.3em;
	}
	@media only screen and (max-width: 550px) {
		font-size: 60px;
	}
`;

const Subtitle = styled.h4`
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.forest};
	font-weight: 500;
	text-align: center;
	font-size: 20px;
	margin-top: 0.3em;
	@media only screen and (max-width: 1000px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 550px) {
		font-size: 14px;
	}
`;

const HeroTitle = ({ children }) => {
	return (
		<>
			<Title>{children}</Title>
			<Subtitle>Are you being all the green that you can be?</Subtitle>
		</>
	);
};

export default HeroTitle;
