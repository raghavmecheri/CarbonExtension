import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowBackOutline } from '@styled-icons/typicons';
import { Person } from '@styled-icons/evaicons-solid';
import { Factory } from '@styled-icons/boxicons-solid';

const CarbonWrapper = styled.div`
	color: black;
	margin-right: 2vw;
	@media (max-width: 650px) {
		color: black;
	}
`;

const ArrowIcon = styled(ArrowBackOutline)`
	position: absolute;
	background-color: transparent;
	border: 2px solid #a67171;
	border-radius: 50%;
	padding-bottom: 5px;
	left: -5em;
	top: -2em;
	font-size: 16px;
	color: #a67171;
	&:hover {
		cursor: pointer;
		background-color: #38a66dab;
		color: white;
		border-color: white;
	}
`;

const TitleWrapper = styled.div`
	position: relative;
`;

const TextHidric = styled.div`
	padding: 10px;
	text-transform: uppercase;
	text-align: center;
	color: #38a66d;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	font-size: 20px;
	@media (max-width: 1000px) {
		display: flex;
		padding: 0px 0.45em;
	}
`;

const TitleHidric = styled.div`
	text-transform: uppercase;
	color: cornflowerblue;
	font-family: ${(props) => props.theme.fonts.tittle}, serif;
	font-weight: 700;
	text-align: center;
	font-size: 50px;
	@media (max-width: 1000px) {
		display: flex;
		padding: 0px 0.45em;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	margin-top: 2em;
	@media only screen and (max-width: 850px) {
		display: grid;
		align-items: center;
		justify-content: center;
		margin-top: 0;
	}
`;

const Button = styled.button`
	background: transparent;
	backdrop-filter: blur(2px);
	padding: 8px;
	font-size: 25px;
	border-radius: 0.12em;
	font-weight: 800;
	text-transform: uppercase;
	color: black;
	border: 2px solid black;
	&:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.ligth};
		background-color: #38a66dab;
		font-weight: 500;
	}
	@media only screen and (max-width: 850px) {
		width: 10em;
		margin: 0.8em;
	}
`;

const PersonIcon = styled(Person)`
	background-color: transparent;
	font-size: 16px;
	color: black;
`;

const FactoryIcon = styled(Factory)`
	background-color: transparent;
	font-size: 16px;
	color: black;
`;

const TitleIcon = styled.img``;

export const Hidric = ({ handleReturn }) => {
	return (
		<CarbonWrapper>
			<TitleWrapper>
				<ArrowIcon size='48' onClick={handleReturn} />
				<TitleHidric>Hidric Footprint</TitleHidric>
				<TitleIcon></TitleIcon>
				<TextHidric>This is the hidric footprint calculator.</TextHidric>
				<TextHidric>
					Choose what type of hidric footprint
					<br /> do you want to calcualte?
				</TextHidric>
			</TitleWrapper>
			<ButtonBox>
				<Link to='/quiz/person'>
					<Button>
						<PersonIcon size='30' /> Person
					</Button>
				</Link>
				<Link to='/quiz/organization'>
					<Button>
						<FactoryIcon size='30' /> Organization
					</Button>
				</Link>
			</ButtonBox>
		</CarbonWrapper>
	);
};
