import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonComponent from './button-component';
import HeroText from './hero-text';

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: auto;
	padding-top: 2em;
	@media only screen and (max-width: 1180px) {
		justify-content: space-around;
	}
	@media only screen and (max-width: 950px) {
		display: grid;
		align-items: center;
		justify-content: center;
		padding-top: 0;
	}
`;

const HeroBody = () => {
	const handleIndividual = () => {
		console.log('handleIndividual');
	};
	const handleOrganization = () => {
		console.log('handleOrganization');
	};

	return (
		<>
			<HeroText>Are you being all the green that you can be?</HeroText>
			<ButtonBox>
				<ButtonComponent content={'Individual'} handleClick={handleIndividual} />
				<ButtonComponent content={'Small Organization'} handleClick={handleOrganization} />
			</ButtonBox>
		</>
	);
};

export default HeroBody;
