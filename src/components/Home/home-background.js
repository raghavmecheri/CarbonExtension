import React from 'react';
import styled from 'styled-components';

import BirdAnimation from './bird-animation';
import bgTree from '../../assets/bg_home.svg';

const AnimationWrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	z-index: -999;
`;

const BackgroundTree = styled.img`
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

const HomeBackground = () => {
	return (
		<>
			<BackgroundTree src={bgTree} alt='TreeBackground' />
			<AnimationWrapper>
				<BirdAnimation />
			</AnimationWrapper>
		</>
	);
};

export default HomeBackground;
