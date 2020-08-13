import React from 'react';
import styled from 'styled-components';

const Intro = ({ handleIntro }) => {
	return (
		<div>
			<button onClick={handleIntro}>Start</button>
		</div>
	);
};

export default Intro;
