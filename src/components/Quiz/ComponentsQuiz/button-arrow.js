import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowLeftShort } from '@styled-icons/bootstrap';
import { ArrowRightShort } from '@styled-icons/bootstrap';
import { DoneAll } from '@styled-icons/evaicons-solid';

const ButtonBox = styled.div`
	width: 20vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SVG = styled.button`
	border: 0px solid transparent;
	cursor: pointer;
	background: transparent;
	svg {
		border: 2px solid black;
		width: 50px;
		border-radius: 50%;
	}
`;

const Buttons = ({ content, handleClick }) => {
	const Selected = {
		next: ArrowRightShort,
		back: ArrowLeftShort,
		done: DoneAll,
	}[content];

	return (
		<ButtonBox>
			<SVG id={content} onClick={handleClick}>
				<Selected />
			</SVG>
		</ButtonBox>
	);
};

export default Buttons;
