import React from 'react';
import styled from 'styled-components';

import HomeBackground from './home-background';
import MobileHomeBackground from './home-background-mobile';
import Hero from './hero';
import Intro from './intro';
import Navbar from '../Navbar/navbar';

const HomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 800px) {
		display: block;
		height: auto;
	}
`;

const BackgroundWrapper = styled.div`
	height: 100%;
	width: 40%;
	z-index: -999;
	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;

const MobileBackgroundWrapper = styled.div`
	display: none;
	@media only screen and (max-width: 1200px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 40%;
	}
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
`;

const HeroWrapper = styled.div`
	height: auto;
	width: 60%;
	padding: 1em;
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
`;

const AnimationIntro = styled.div`
	&.fade-exit {
		opacity: 1;
		transform: translateY(0);
	}
	&.fade-exit-active {
		opacity: 0;
		transform: translateY(-100%);
	}

	&.fade-exit-active {
		transition: opacity 700ms, transform 700ms;
	}
`;

const AnimationHero = styled.div`
	&.fade-enter {
		opacity: 0;
		transform: translateY(100%);
	}
	&.fade-enter-active {
		opacity: 1;
		transform: translateY(0%);
	}
	&.fade-enter-active {
		transition: opacity 700ms, transform 700ms;
	}
`;

const HomePage = ({ start, handleIntro }) => {
	if (start)
		return (
			<AnimationHero>
				<HomeWrapper>
					<Navbar />
					<BackgroundWrapper>
						<HomeBackground />
					</BackgroundWrapper>
					<MobileBackgroundWrapper>
						<MobileHomeBackground />
					</MobileBackgroundWrapper>
					<HeroWrapper>
						<Hero />
					</HeroWrapper>
				</HomeWrapper>
			</AnimationHero>
		);

	return (
		<AnimationIntro>
			<Intro handleIntro={handleIntro} />
		</AnimationIntro>
	);
};

export default HomePage;
