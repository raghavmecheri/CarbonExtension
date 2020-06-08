import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fuelData } from '../../data/fuelData';

import logo from '../../assets/logo.png';
import earth from '../../assets/earth.png';

const ResultWrapper = styled.div`
	color: #000;
	height: 100vh;
`;
const Box = styled.div`
	margin: auto;
`;

const LogoWrapper = styled.div`
	position: absolute;
	width: inherit;
	top: -3em;
	left: 1em;
`;
const LogoStyle = styled.img`
	width: 20vw;
	margin: auto;
`;

const TitleResult = styled.div`
	font-size: 30px;
	text-transform: uppercase;
	margin: auto;
	padding-top: 2em;
`;
const SubTitleResult = styled.div`
	font-size: 30px;
	font-weight: 900;
	margin: auto;
	margin-top: 2em;
	margin-bottom: 1.5em;
`;
const DataResult = styled.div`
	font-size: 46px;
	margin: auto;
`;
const AwarenessText = styled.div`
	font-size: 30px;
	margin: auto;
	margin-top: 1.5em;
	margin-bottom: 0.5em;
`;
const AwarenessResult = styled.div`
	font-size: 40px;
	margin: auto;
	margin-bottom: 0.5em;
`;
const AwarenessWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 80vw;
	margin: auto;
`;
const AwarenessImg = styled.img`
	width: 15vw;
	margin: auto;
`;
const AwarenessButton = styled.button`
	width: 10vw;
	margin: 1em;
	background: none;
	border-radius: 2px;
	padding: 0.5em;
	font-size: 20px;
	&:hover {
		cursor: pointer;
	}
`;

export function Result({ stateScreen }) {
	let result = 0;

	console.log(stateScreen);

	if (stateScreen.formState) {
		Object.keys(stateScreen.formState).map((key) => {
			Object.keys(stateScreen.formState[key].rowStructure).map((i) => {
				let energy = stateScreen.formState[key].rowStructure[i].energyType;
				let quantity = stateScreen.formState[key].rowStructure[i].quantity;
				result = result + Number(quantity) * Number(fuelData[key][energy]);
			});
		});
	}

	console.log(result);

	const countEarths = 5;

	return (
		<ResultWrapper>
			<LogoWrapper>
				<Link to='/'>
					<LogoStyle src={logo} alt='logo' />
				</Link>
			</LogoWrapper>
			<Box>
				<TitleResult>Results</TitleResult>
				<SubTitleResult>Your carbon footprint is :</SubTitleResult>
				<DataResult>{result} ton CO2</DataResult>
				<AwarenessText>
					If everybody had your lifestyle, we would need
				</AwarenessText>
				<AwarenessResult>
					{countEarths} Earths<AwarenessButton>See How</AwarenessButton>{' '}
				</AwarenessResult>
				<AwarenessWrapper>
					<AwarenessImg src={earth}></AwarenessImg>
					<AwarenessImg src={earth}></AwarenessImg>
					<AwarenessImg src={earth}></AwarenessImg>
					<AwarenessImg src={earth}></AwarenessImg>
					<AwarenessImg src={earth}></AwarenessImg>
				</AwarenessWrapper>
			</Box>
		</ResultWrapper>
	);
}
