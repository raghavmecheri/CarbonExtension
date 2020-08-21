import React from 'react';
import styled from 'styled-components';

const TextDropdown = styled.div`
	font-size: 17px;
	font-weight: 600;
`;

const CheckBoxWrapper = styled.div`
	position: relative;
	z-index: 0;
	margin-top: 1em;
	width: 6em;
`;
const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 25%;
	width: 3em;
	height: 26px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
const CheckBoxStyle = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 25px;
			transition: 0.2s;
		}
	}
`;

export const CheckBox = ({ handleQuizDesign, ComplexForm }) => {
	return (
		<div>
			<CheckBoxWrapper>
				{ComplexForm ? (
					<CheckBoxStyle onChange={handleQuizDesign} id='checkbox' type='checkbox' />
				) : (
					<CheckBoxStyle onChange={handleQuizDesign} id='checkbox' type='checkbox' checked disabled />
				)}
				<CheckBoxLabel htmlFor='checkbox' />
			</CheckBoxWrapper>
			<TextDropdown>
				Añadir Mas Informacion
				<br />
				Mejorar Exactitud
			</TextDropdown>
		</div>
	);
};
