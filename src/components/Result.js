import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ResultWrapper = styled.div`
	color: black;
	font-size: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	input {
		height: 3em;
		width: 17em;
		margin: 2em;
	}
`;

const initialState = {
	firstName: '',
	lastName: '',
};
function reducer(state, action) {
	switch (action.type) {
		case 'firstName':
			return { firstName: action.payload };
		case 'lastName':
			return { lastName: action.payload };
		default:
			throw new Error();
	}
}
export function Result({ stateScreen }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const object = stateScreen.formState[0].rowStructure[0];

	if (stateScreen.formState) {
		console.log(object);
	}

	const handleInput = (e, name) => {
		dispatch({
			type: name,
			payload: e.target.value,
		});
	};

	const display = Object.keys(object).map((d, key) => {
		console.log(d);
		console.log(object[d]);
		return (
			<div className='my-posts'>
				<li key={key}>{object[d]}</li>
			</div>
		);
	});

	return (
		<ResultWrapper>
			<div>{display}</div>

			<input
				type='text'
				name='firstName'
				placeholder='First Name'
				onChange={(e) => handleInput(e, 'firstName')}
				value={state.firstName}
			/>
			<input
				type='text'
				name='lastName'
				placeholder='Last Name'
				onChange={(e) => handleInput(e, 'lastName')}
				value={state.lastName}
			/>
		</ResultWrapper>
	);
}
