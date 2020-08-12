import React from 'react';
import styled from 'styled-components';

import { HomeBackgroundAnimation } from './HomeBackgroundAnimation';
import bgTree from '../../assets/bg_home.svg';

const BackgroundAnimationWrapper = styled.div`
	position: absolute;
	height: 500px;
	width: 100vw;
	top: 5em;
	left: 0;
	padding-left: 16vw;
	z-index: -99999999;
	@media (max-width: 550px) {
		padding-left: 0;
	}
`;

const BackgroundTree = styled.img`
	position: absolute;
	bottom: 1em;
	left: -1em;
	width: 35em;
	z-index: -9999;
	@media (max-height: 750px) {
		width: 31em;
	}
	@media (max-height: 700px) {
		width: 30em;
	}
	@media (max-height: 650px) {
		width: 28em;
	}
	@media (max-height: 600px) {
		width: 23em;
	}
	@media (max-width: 1200px) {
		width: 30em;
	}
	@media (max-width: 800px) {
		display: none;
	}
`;

const BackgroundStyle = () => {
	return (
		<>
			<BackgroundTree src={bgTree} alt='TreeBackground' />
			<BackgroundAnimationWrapper>
				<HomeBackgroundAnimation />
			</BackgroundAnimationWrapper>
		</>
	);
};

export default BackgroundStyle;
