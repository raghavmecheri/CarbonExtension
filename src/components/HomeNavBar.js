import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarbonWrapper = styled.div`
	margin: 0 10em;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	div {
		padding: 5px;
		border-bottom: 1px solid black;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const HomeNavBar = () => {
	return (
		<CarbonWrapper>
			<div>Home</div>
			<div>Information</div>
			<div>What Can You Do?</div>
			<div>About</div>
			<div>Contribute</div>
		</CarbonWrapper>
	);
};
