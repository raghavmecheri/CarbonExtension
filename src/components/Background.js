import React from 'react';
import Bg from '../assets/bg1.jpeg';
import styled from 'styled-components';

const BgStyled = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	min-height: 800px;
	min-width: 1024px;
	z-index: -999999;
`;

export const Background = () => {
	return (
		<div>
			<BgStyled src={Bg} alt='bg' />
		</div>
	);
};
