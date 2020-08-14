import React, { useState } from 'react';
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
	width: 45%;
`;

const HeroWrapper = styled.div`
	height: 100;
	width: 55%;
`;

const HomePage = () => {
	const [start, setStart] = useState(false);

	const handleIntro = () => {
		console.log('eneter');
		setStart(true);
	};

	if (start)
		return (
			<>
				<BackgroundWrapper>
					<HomeBackground />
				</BackgroundWrapper>
				<HeroWrapper>
					<Hero />
				</HeroWrapper>
			</>
		);

	return <Intro handleIntro={handleIntro} />;
};

const Home = () => {
	return (
		<HomeWrapper>
			<HomePage />
		</HomeWrapper>
	);
};

export default Home;
