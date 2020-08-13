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
	color: ${(props) => (props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171')};
	border-color: ${(props) => (props.black ? 'black' : props.blue ? 'cornflowerblue' : '#a67171')};
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background-color: #38a66dab;
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
