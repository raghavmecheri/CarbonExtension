import React, { useRef } from 'react';
import styled from 'styled-components';

import Background from '../../assets/titlebg.jpg';

const Container = styled.div`
	width: 100%;
	background: transparent;
`;

const TitleStyle = styled.div`
	font-weight: 800;
	color: transparent;
	font-size: 50px;
	font-family: ${(props) => props.theme.fontFamily.title2};
	background: url(${Background});
	background-repeat: repeat;
	background-size: 770px;
	background-position: 50% 40%;
	-webkit-background-clip: text;
	position: relative;
	text-align: center;
	line-height: 80px;
	letter-spacing: 5px;
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
	font-size: 14px;
	background-color: #222;
	padding: 10px 40px;
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

const Intro = ({ handleIntro }) => {
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
			<br />
			<ButtonWrapper onClick={handleIntro}>
				<Button>
					<ButtonSpan>Start!</ButtonSpan>
				</Button>
			</ButtonWrapper>
		</Container>
	);
};

export default Intro;
