import React from 'react';
import styled from 'styled-components';

import Hero from './hero';
import Intro from './intro';

const HomeWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HeroWrapper = styled.div`
	height: auto;
	width: 60%;
	padding: 1em;
`;

const AnimationIntro = styled.div`
	&.fade-exit {
		opacity: 1;
		transform: translateY(0);
	}
	&.fade-exit-active {
		opacity: 0;
		transform: translateY(-100%);
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
		transition: opacity 700ms, transform 700ms;
	}
`;

const HomePage = ({ start, handleIntro }) => {
	if (start)
		return (
			<AnimationHero>
				<HomeWrapper>
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
