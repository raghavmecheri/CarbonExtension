import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 25px;
	border: 2px solid;
	border-radius: 0.12em;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: palegoldenrod;
	border-color: palegoldenrod;
	&:hover {
		cursor: pointer;
		color: palegoldenrod;
		background-color: transparent;
		font-weight: 500;
	}
	@media only screen and (max-width: 950px) {
		width: 10em;
		margin: 0.3em;
	}
`;

const ButtonComponent = ({ handleClick, content }) => {
	return <Button onClick={handleClick}>{content}</Button>;
};

export default ButtonComponent;
