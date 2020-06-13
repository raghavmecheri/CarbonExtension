import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeNavBar } from '../../Home/HomeNavBar';
import AboutImg from '../../../assets/bg_aboutPage.jpg';
import AboutImg2 from '../../../assets/bg_aboutPage2.jpg';

import '../../Home/HomeNavBar.css';

const HomeNavBarWrapper = styled.div`
	position: absolute;
	height: 2em;
	width: 100vw;
	top: 0;
	left: 0;
`;

const AboutWrapper = styled.div`
	width: 60vw;
	text-align: left;
	margin: auto;
	margin-top: 20vh;
	margin-bottom: 10vh;
	padding: 1em 2em;
	box-shadow: 0px 1px 1px rgba(10, 10, 10, 0.1),
		0px 1px 2px rgba(10, 10, 10, 0.1), 0px 0px 1px rgba(10, 10, 10, 0.8);
	box-shadow: var(
		--theme-container-box-shadow,
		0px 1px 1px rgba(10, 10, 10, 0.1),
		0px 1px 2px rgba(10, 10, 10, 0.1),
		0px 0px 1px rgba(10, 10, 10, 0.8)
	);
	@media (max-width: 550px) {
		width: 85vw;
		margin-top: 15vh;
	}
`;

const Title = styled.h1`
	color: black;
`;

const TextWrapper = styled.div``;

const TextLeft = styled.h4`
	color: black;
	padding-right: 20vw;
	font-size: 20px;
	font-weight: 500;
	padding-top: 0;
	margin-top: 0;
	position: relative;
	@media (max-width: 1200px) {
		padding-right: 25vw;
	}
	@media (max-width: 550px) {
		padding: 0;
	}
`;

const TextRigth = styled.h4`
	color: black;
	padding-left: 23vw;
	font-size: 20px;
	font-weight: 500;
	padding-top: 0;
	margin-top: 0;
	position: relative;
	@media (max-width: 1200px) {
	}
	@media (max-width: 550px) {
		padding: 0;
	}
`;

const AboutImage = styled.img`
	width: 15em;
	position: absolute;
	right: -3em;
	top: -2em;
	border-radius: 10px;
	-webkit-box-shadow: 21px 21px 69px -40px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 21px 21px 69px -40px rgba(0, 0, 0, 0.75);
	box-shadow: 21px 21px 69px -40px rgba(0, 0, 0, 0.75);
	@media (max-width: 1200px) {
		top: -1em;
	}
	@media (max-width: 550px) {
		display: none;
	}
`;

const AboutImage2 = styled.img`
	width: 15em;
	position: absolute;
	left: -3em;
	top: 0em;
	border-radius: 10px;
	-webkit-box-shadow: -25px 21px 69px -40px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -25px 21px 69px -40px rgba(0, 0, 0, 0.75);
	box-shadow: -25px 21px 69px -40px rgba(0, 0, 0, 0.75);
	@media (max-width: 1200px) {
		top: 2em;
	}
	@media (max-width: 550px) {
		display: none;
	}
`;

export const About = ({ handleMenu }) => {
	return (
		<>
			<HomeNavBarWrapper>
				<HomeNavBar />
			</HomeNavBarWrapper>
			<AboutWrapper>
				<Title>About</Title>
				<TextWrapper>
					<TextLeft>
						This is a carbon and water calculator footprint. The purpose of this
						calculator is to raise awareness about our consumption habits and
						about how our actions as individual persons impact the world.
						<br />
						<br />
						This calculator can calculate the carbon footprint of a business and
						of individual persons. It can also calculate the water footprint of
						individual persons.
						<br />
						<br />
						<br />
						<AboutImage src={AboutImg} />
					</TextLeft>
					<TextRigth>
						In some questions you can enter your exact consumption data or you
						can choose to enter it more easily with a slider. These data are
						obtained from the average consumption of spanish citizens provided
						by the differents ministries of the spanish government.
						<br />
						<br />
						The emission factors on which the calculator is based, are also
						calculated and obtained with respect to the data from Spain. Since
						your footprint varies depending on the country in which you live.
						<br />
						<br />
						This page is made by me. A student from Burgos University. Who made
						this page as my final degree project.
						<AboutImage2 src={AboutImg2} />
					</TextRigth>
				</TextWrapper>
			</AboutWrapper>
		</>
	);
};
