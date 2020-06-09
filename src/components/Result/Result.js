import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { businessCarbonData } from '../../data/businessCarbonData';
import { individualCarbonData } from '../../data/individualCarbonData';
import { simpleIndividualCarbonData } from '../../data/simpleIndividualCarbonData';
import { fakeData } from '../../data/fakeData';

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

export function Result({}) {
	let result = 0;

	const stateScreen = fakeData;
	console.log(stateScreen);

	if (stateScreen.formState && stateScreen.formState[0].type === 'business') {
		Object.keys(stateScreen.formState).map((key) => {
			Object.keys(stateScreen.formState[key].rowStructure).map((i) => {
				let energy = stateScreen.formState[key].rowStructure[i].energyType;
				let quantity = stateScreen.formState[key].rowStructure[i].quantity;
				if (energy && quantity) {
					result =
						result + Number(quantity) * Number(businessCarbonData[key][energy]);
				}
			});
		});
	} else if (
		stateScreen.formState &&
		stateScreen.formState[0].type === 'individual' &&
		stateScreen.formState[0].footprint === 'carbon'
	) {
		Object.keys(stateScreen.formState).map((key) => {
			let frecuency = stateScreen.formState[key].rowStructureSimple['slider'];
			let combustion = stateScreen.formState[key].rowStructureSimple['car'];
			let eficiencyCar =
				stateScreen.formState[key].rowStructureSimple['eficiency'];
			let moto = stateScreen.formState[key].rowStructureSimple['moto'];
			let title = stateScreen.formState[key].simpleName;
			let frecuencyMultiplier;
			if (frecuency < 1) {
				frecuencyMultiplier = 0;
			} else if (frecuency < 3) {
				frecuencyMultiplier = 1 / 3;
			} else if (frecuency < 5) {
				frecuencyMultiplier = 1;
			} else if (frecuency < 7) {
				frecuencyMultiplier = 1.5;
			} else if (frecuency < 9) {
				frecuencyMultiplier = 3;
			} else if (frecuency <= 10) {
				frecuencyMultiplier = 5;
			}
			if (stateScreen.formState[key].ComplexFormState === false) {
				let footprintFactor = individualCarbonData[key][title];
				let footprintFactorCar = individualCarbonData[key][combustion];
				let footprintFactorMoto = individualCarbonData[key][moto];
				let averageConsume = simpleIndividualCarbonData[key][title];
				if (footprintFactor) {
					result =
						result +
						Number(averageConsume) *
							Number(frecuencyMultiplier) *
							Number(footprintFactor);
					console.log(averageConsume);
					console.log(footprintFactor);
					console.log(frecuencyMultiplier);
					console.log(result);
				}
				if (footprintFactorCar) {
					result =
						Number(result) +
						Number(averageConsume) *
							Number(frecuencyMultiplier) *
							Number(footprintFactorCar) *
							(Number(eficiencyCar) / 100);
					console.log(averageConsume);
					console.log(eficiencyCar);
					console.log(footprintFactorCar);
					console.log(result);
				}
				if (moto) {
					result =
						Number(result) +
						Number(averageConsume) *
							Number(frecuencyMultiplier) *
							Number(footprintFactorMoto);
					console.log(averageConsume);
					console.log(footprintFactorMoto);
					console.log(result);
				}
			}
			if (stateScreen.formState[key].ComplexFormState === true) {
				Object.keys(stateScreen.formState[key].rowStructureComplex[0]).map(
					(i) => {
						let quantity = stateScreen.formState[key].rowStructureComplex[0][i];
						if (quantity) {
							let footprintFactor = individualCarbonData[key][i];
							console.log(quantity);
							console.log(footprintFactor);
							result =
								Number(result) + Number(quantity) * Number(footprintFactor);
						}
					}
				);
			}
		});
	}

	result = result / 1000;
	result = result.toFixed(2);
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
