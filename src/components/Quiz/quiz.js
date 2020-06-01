import React, { useState, useReducer, reducer, initialState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { StumbleuponCircle } from '@styled-icons/fa-brands';
import { CheckmarkCircle } from '@styled-icons/evaicons-solid';

import logo from '../../assets/logo.png';

import bg_error from '../../assets/bg_error.jpeg';
import { QuestionQuiz } from './QuizComponents/QuestionQuiz';
import { Buttons } from './QuizComponents/ButtonsQuiz';
import { OrganizationQuizData } from '../../data/organization-quiz-data';
import { PersonQuizData } from '../../data/person-quiz-data';

const QuizWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #f1f1f1;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 650px) {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}
`;

const LogoStyle = styled.img`
	position: absolute;
	width: 12em;
	top: -1.5em;
	left: 3em;
`;

const QuizBox = styled.div`
	color: black;
	max-width: 70vw;
	padding: 2em;
	height: 100%;
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SideQuizMenu = styled.div`
	width: 30vw;
	height: 100%;
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
	padding-top: 45%;
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

const ErrorContainer = styled.div`
	height: 100vh;
	color: red;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	background: black;
`;

const ErrorButton = styled.button`
	background: transparent;
	color: white;
	font-size: 1.5rem;
	padding: 1rem;
	border: 1px solid red;
	&:hover {
		cursor: pointer;
		background: white;
		color: red;
	}
`;

const ErrorPage = () => (
	<ErrorContainer>
		<div>
			<h1>Error 404</h1>
			<p>Page not found</p>
			<Link to='/'>
				<ErrorButton>Go Back!</ErrorButton>
			</Link>
		</div>
	</ErrorContainer>
);

export const Quiz = ({ stateScreen, setStateScreen }) => {
	const [formState, setFormState] = useState(OrganizationQuizData);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);

	console.log(formState);
	console.log(questionIndex);

	const back = () => {
		if (questionIndex > 0) {
			let updateIndexQuestion = questionIndex - 1;
			setQuestionIndex(updateIndexQuestion);
			setEndQuestion(false);
		}
	};

	const next = () => {
		if (questionIndex > Object.keys(formState).length - 3) {
			let newIndex = questionIndex + 1;
			setQuestionIndex(newIndex);
			setEndQuestion(true);
		} else if (questionIndex < Object.keys(formState).length - 1) {
			let updateIndexQuestion = questionIndex + 1;

			setQuestionIndex(updateIndexQuestion);
		}
	};

	const updateInputValueForm = ({ columName, rowIndex, value }) => {
		const screenRows = formState[questionIndex].rowStructure;
		screenRows[rowIndex][columName] = value;
		setFormState({
			...formState,
			[questionIndex]: {
				...formState[questionIndex],
				rowStructure: screenRows,
			},
		});
	};

	const handleAddRow = () => {
		const newScreenState = {
			...formState[questionIndex],
			rowStructure: [
				...formState[questionIndex].rowStructure,
				{ ...formState[questionIndex].rowsType[0] },
			],
		};
		setFormState({
			...formState,
			[questionIndex]: newScreenState,
		});
	};

	const handleDeleteQuestion = () => {
		const newScreenState = {
			...formState[questionIndex],
		};
		newScreenState.rowStructure.pop();
		setFormState({
			...formState,
			[questionIndex]: newScreenState,
		});
	};

	const handleInput = (e, rowIndex, columName) => {
		e.preventDefault();
		const { value } = e.target;
		updateInputValueForm({ value, rowIndex, columName });
	};

	const finish = () => {
		console.log('finsish');
		setStateScreen({ ...stateScreen, formState });
	};

	return (
		<QuizWrapper>
			<SideQuizMenu>
				<Link to='/'>
					<LogoStyle src={logo} alt='logo' />
				</Link>
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
					<InfoQuizTitle>Transport</InfoQuizTitle>
					<InfoQuizSubTitle>Step 1</InfoQuizSubTitle>
					<InfoQuizImage
						src={formState[questionIndex].image}
						alt={formState[questionIndex]}
					/>
					<InfoQuizBody>
						This is the footprint produced by the use of different uses of
						trasnports.
						<br />
						<br />
						And it would be included inside the First scope of the Carbon
						Footprint.
					</InfoQuizBody>
					<InfoQuizPlus>
						<InfoQuizPlusTitle>Did you know:</InfoQuizPlusTitle>
						<InfoQuizPlusBody>
							That the earth isn't round and it is in fact flat. All those
							people laughing about it and they were rigth all along.
						</InfoQuizPlusBody>
					</InfoQuizPlus>
				</InfoQuiz>
			</SideQuizMenu>

			<QuizBox>
				<QuestionQuiz
					rowsValues={formState[questionIndex]}
					handleInput={handleInput}
				/>
				<Buttons
					back={back}
					next={next}
					finish={finish}
					end={endQuestion}
					handleDeleteQuestion={handleDeleteQuestion}
					handleAddRow={handleAddRow}
				/>
			</QuizBox>
		</QuizWrapper>
	);
};
