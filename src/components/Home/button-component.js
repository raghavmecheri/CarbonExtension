import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	width: 120px;
	padding: 10px;
	font-size: 13px;
	border: 2px solid;
	border-radius: 5px;
	font-weight: 500;
	text-transform: uppercase;
	transition: background-color 1s ease;
	color: white;
	border-color: white;
	background: forestgreen;
	z-index: 0;
	transition: all 300ms;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`;

const ButtonComponent = ({ content }) => {
	return <Button>{content}</Button>;
};

export default ButtonComponent;
