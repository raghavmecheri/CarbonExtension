import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
			<HeroText>Select the type of carbon footprint calculation</HeroText>
			<ButtonBox>
				<Link to='/quiz/person'>
					<ButtonComponent content={'Individual'} handleClick={handleIndividual} />
				</Link>
				<Link to='/quiz/organization'>
					<ButtonComponent content={'Small Organization'} handleClick={handleOrganization} />
				</Link>
			</ButtonBox>
		</>
	);
};

export default HeroBody;
