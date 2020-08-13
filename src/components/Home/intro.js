import React from 'react';
import styled from 'styled-components';

import IntroBackground from '../../assets/carbon-dioxide.svg';

const Intro = ({ handleIntro }) => {
	return (
		<div>
			<button onClick={handleIntro}>Start</button>
			<img src={IntroBackground} alt='backgrnd' />
		</div>
	);
};

export default Intro;
