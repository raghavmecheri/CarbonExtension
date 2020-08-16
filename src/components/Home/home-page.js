import React from 'react';
import styled from 'styled-components';

import HomeBackground from './home-background';
import Hero from './hero';
import Intro from './intro';
import Navbar from '../Navbar/navbar';

const HomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackgroundWrapper = styled.div`
	height: 100;
	width: 40%;
	z-index: -999;
`;

const HeroWrapper = styled.div`
	height: 100;
	width: 60%;
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
					<BackgroundWrapper>
						<HomeBackground />
					</BackgroundWrapper>
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
