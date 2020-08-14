import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Background from '../../assets/intro_earth.jpg';

const Container = styled.div`
	position: absolute;
	width: 90vw;
	background: transparent;
	-webkit-transform: translate(-50%, -45%);
	-ms-transform: translate(-50%, -45%);
	transform: translate(-50%, -45%);
	left: 50%;
	top: 40%;
	font-family: 'Anonymous Pro', monospace;
`;

const TitleStyle = styled.div`
	font-weight: 800;
	color: transparent;
	font-size: 170px;
	background: url(${Background});
	background-repeat: repeat;
	background-size: 600px;
	background-position: 45% 40%;
	-webkit-background-clip: text;
	position: relative;
	text-align: center;
	line-height: 110px;
	letter-spacing: -8px;
`;

const Subtitle = styled.div`
	display: block;
	text-align: center;
	text-transform: uppercase;
	padding-top: 10px;
	color: black;
	padding-top: 1em;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2em;
`;

const Button = styled.button`
	border: none;
	display: block;
	text-align: center;
	cursor: pointer;
	text-transform: uppercase;
	outline: none;
	overflow: hidden;
	position: relative;
	color: #fff;
	font-weight: 700;
	font-size: 18px;
	background-color: #222;
	padding: 17px 60px;
	margin: 0 auto;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	&:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 490%;
		width: 150%;
		background: #03b554;
		-webkit-transition: all 1s ease-in-out;
		transition: all 1s ease-in-out;
		-webkit-transform: translateX(-82%) translateY(-25%) rotate(45deg);
		transform: translateX(-82%) translateY(-25%) rotate(45deg);
	}
	&:hover {
		&:after {
			-webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
			transform: translateX(-9%) translateY(-25%) rotate(45deg);
		}
	}
`;

const ButtonSpan = styled.span`
	position: relative;
	z-index: 1;
`;

const Title = ({ handleIntro }) => {
	const titleRef = useRef();

	const handleMouseMove = (e) => {
		const mouseX = e.pageX;
		const mouseY = e.pageY;
		const traX = (8 * mouseX) / 570 + 40;
		const traY = (8 * mouseY) / 570 + 50;
		titleRef.current.style.backgroundPosition = traX + '%' + traY + '%';
	};

	return (
		<Container onMouseMove={handleMouseMove}>
			<TitleStyle ref={titleRef}>
				CALCULATE <br /> YOUR <br /> CARBON <br /> FOOTPRINT <br />
			</TitleStyle>
			<Subtitle>Do you wanna know if you pollute more or less than the average? ClicK Start!</Subtitle>
			<ButtonWrapper onClick={handleIntro}>
				<Button>
					<ButtonSpan>Start Calculation</ButtonSpan>
				</Button>
			</ButtonWrapper>
		</Container>
	);
};

export default Title;
