import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeNavBar } from '../../Home/HomeNavBar';

import '../../Home/HomeNavBar.css';

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const InformationWrapper = styled.div`
	width: 60vw;
	text-align: left;
	margin: auto;
	margin-top: 20vh;
	margin-bottom: 10vh;
	padding: 1em 2em;
	box-shadow: 0px 1px 1px rgba(10, 10, 10, 0.1),
		0px 1px 2px rgba(10, 10, 10, 0.1), 0px 0px 1px rgba(10, 10, 10, 0.8);
	box-shadow: var(
		--theme-container-box-shadow,
		0px 1px 1px rgba(10, 10, 10, 0.1),
		0px 1px 2px rgba(10, 10, 10, 0.1),
		0px 0px 1px rgba(10, 10, 10, 0.8)
	);
	@media (max-width: 550px) {
		width: 85vw;
		margin-top: 15vh;
	}
`;

const Title = styled.h1`
	color: black;
`;

export const Information = () => {
	return (
		<>
			<HomeNavBarWrapper>
				<HomeNavBar />
			</HomeNavBarWrapper>
			<InformationWrapper>
				<Title>Informacion</Title>
			</InformationWrapper>
		</>
	);
};
