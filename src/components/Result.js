import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fuelData } from '../data/fuelData';

const ResultWrapper = styled.div`
	color: black;
	font-size: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Button = styled.button`
	background: transparent;
	color: red;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px;
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

	return (
		<ResultWrapper>
			<Link to='/'>
				<Button>Home</Button>
			</Link>
			<div>Results: {result} t CO2</div>
		</ResultWrapper>
	);
}

// const initialState = {
// 	firstName: '',
// 	lastName: '',
// };

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'firstName':
// 			return { firstName: action.payload };
// 		case 'lastName':
// 			return { lastName: action.payload };
// 		default:
// 			throw new Error();
// 	}
// }

// function manageState({ stateScreen }) {
// 	const [state, dispatch] = useReducer(reducer, initialState);
// 	const handleInput = (e, name) => {
// 		dispatch({
// 			type: name,
// 			payload: e.target.value,
// 		});
// 	};

// 	return (
// 		<ResultWrapper>
// 			<input
// 				type='text'
// 				name='firstName'
// 				placeholder='First Name'
// 				onChange={(e) => handleInput(e, 'firstName')}
// 				value={state.firstName}
// 			/>
// 			<input
// 				type='text'
// 				name='lastName'
// 				placeholder='Last Name'
// 				onChange={(e) => handleInput(e, 'lastName')}
// 				value={state.lastName}
// 			/>
// 		</ResultWrapper>
// 	);
// }
