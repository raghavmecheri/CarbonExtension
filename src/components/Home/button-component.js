import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 20px;
	border: 2px solid;
	border-radius: 5px;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: white;
	border-color: white;
	background: forestgreen;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
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
