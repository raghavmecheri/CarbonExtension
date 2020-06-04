import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.png';

const LogoWrapper = styled.div`
	position: absolute;
	width: inherit;
	top: -1.5em;
	z-index: 9999;
`;
const LogoStyle = styled.img`
	width: 12em;
	margin: auto;
	z-index: 9999;
`;

const SideQuizMenuWrapper = styled.div`
	width: 30vw;
	height: 100%;
	max-height: 100vh;
	background-color: #ffffff;
	color: black;
	position: relative;
`;

const StepsQuiz = styled.div`
	height: 100%;
	width: 107%;
	position: absolute;
	display: grid;
	justify-content: end;
	align-items: center;
`;
const StepsQuizBorder = styled.div`
	height: ${(props) =>
		props.questionIndex === 0
			? `15%`
			: props.questionIndex === 1
			? `40%`
			: props.questionIndex === 2
			? '60%'
			: '90%'};
	width: 100%;
	position: absolute;
	border-right: 3px solid cornflowerblue;
`;

const StepsQuizShadow = styled.div`
	height: ${(props) =>
		props.questionIndex === 0
			? `85%`
			: props.questionIndex === 1
			? `60%`
			: props.questionIndex === 2
			? '40%'
			: '10%'};

	top: ${(props) =>
		props.questionIndex === 0
			? `15%`
			: props.questionIndex === 1
			? `40%`
			: props.questionIndex === 2
			? '60%'
			: '90%'};
	width: 100%;
	position: absolute;
	-webkit-box-shadow: 10px 0px 6px -6px #777;
	-moz-box-shadow: 10px 0px 6px -6px #777;
	box-shadow: 10px 0px 6px -6px #777;
`;

const InfoQuiz = styled.div`
	height: 100%;
	width: 100%;
	padding-top: 35%;
	display: flow-root;
	justify-content: center;
	align-items: center;
`;

const StepsIcon = styled.div`
	border: 3px solid
		${(props) =>
			Number(props.children.key) <= props.questionIndex
				? `cornflowerblue`
				: `#E0E0E0`};
	border-radius: 50%;
	background-color: ${(props) =>
		Number(props.children.key) <= props.questionIndex ? `#6FCE99` : `#E4E8ED`};
	font-size: 25px;
	font-weight: 900;
	padding: 6px;
`;

const StepsCircle = styled.div`
	width: 1.5em;
	color: ${(props) =>
		Number(props.children) <= props.questionIndex
			? `cornflowerblue`
			: `#E0E0E0`};
	border: 3px solid;
	background-color: ${(props) =>
		Number(props.children) <= props.questionIndex ? `white` : `white`};
	border-color: ${(props) =>
		Number(props.children) <= props.questionIndex ? `white` : `white`};
	border-radius: 50%;
	font-weight: 900;
	padding: 0px;
	margin: auto;
`;

const InfoQuizTitle = styled.div`
	border-top: 2px dashed gray;
	padding-top: 1em;
	font-size: 35px;
	font-weight: 600;
`;

const InfoQuizSubTitle = styled.div`
	font-size: 16px;
	padding-bottom: 1em;
	padding-top: 0.2em;
	color: gray;
	text-align: initial;
	padding-left: 4em;
	font-weight: 400;
`;

const InfoQuizBody = styled.div`
	font-size: 20px;
	color: gray;
	padding: 1em 1.5em;
	text-align: center;
	font-weight: 400;
`;

const InfoQuizPlus = styled.div`
	color: gray;
	border-top: 2px dashed gray;
	padding-top: 1em;
	margin: 0em 1.5em;
	margin-left: 2em;
	text-align: start;
	@media (max-height: 740px) {
		display: none;
	}
`;

const InfoQuizPlusTitle = styled.div`
	font-size: 25px;
	color: gray;
	font-weight: 500;
`;

const InfoQuizPlusBody = styled.div`
	padding-top: 0.5em;
	font-size: 20px;
	color: gray;
`;

const InfoQuizImage = styled.img`
	width: 15em;
	border-radius: 4%;
	margin: auto;
`;

export const SideQuizMenu = ({ questionIndex, formState }) => {
	const { sideTitle, sideBody, infoPlusBody } = formState[questionIndex];
	return (
		<SideQuizMenuWrapper>
			<LogoWrapper>
				<Link to='/'>
					<LogoStyle src={logo} alt='logo' />
				</Link>
			</LogoWrapper>
			<StepsQuizBorder questionIndex={questionIndex} />
			<StepsQuizShadow questionIndex={questionIndex} />
			<StepsQuiz>
				{formState
					? Object.keys(formState).map((item, key) => {
							return (
								<StepsIcon questionIndex={questionIndex} key={key}>
									<StepsCircle questionIndex={questionIndex} key={item}>
										{item}
									</StepsCircle>
								</StepsIcon>
							);
					  })
					: null}
			</StepsQuiz>
			<InfoQuiz>
				<InfoQuizTitle>{sideTitle}</InfoQuizTitle>
				<InfoQuizSubTitle>Step {questionIndex}</InfoQuizSubTitle>
				<InfoQuizImage
					src={formState[questionIndex].image}
					alt={formState[questionIndex]}
				/>
				<InfoQuizBody>{sideBody}</InfoQuizBody>
				<InfoQuizPlus>
					<InfoQuizPlusTitle>Did you know:</InfoQuizPlusTitle>
					<InfoQuizPlusBody>{infoPlusBody}</InfoQuizPlusBody>
				</InfoQuizPlus>
			</InfoQuiz>
		</SideQuizMenuWrapper>
	);
};
