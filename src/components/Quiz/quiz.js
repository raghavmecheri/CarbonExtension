import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SideQuizMenu } from './QuizComponents/SideQuizMenu';
import { QuestionQuizBusiness } from './QuizComponents/QuestionQuizBusiness';
import { QuestionQuizIndividual } from './QuizComponents/QuestionQuizIndividual';
import { Buttons } from './QuizComponents/ButtonsQuiz';
import { HomeNavBar } from '../Home/HomeNavBar';
import logo from '../../assets/logo.png';
import { Menu } from '@styled-icons/heroicons-outline';
import { Cross } from '@styled-icons/entypo';
import { HomeCircle } from '@styled-icons/boxicons-regular';
import '../Home/HomeNavBar.css';

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
	@media (max-width: 430px) and (max-height: 750px) {
		height: 110vh;
	}
	@media (max-width: 400px) and (max-height: 700px) {
		height: 110vh;
	}
	@media (max-width: 350px) and (max-height: 600px) {
		height: 130vh;
	}
`;

const HomeNavBarWrapper = styled.div`
	display: none;
	@media (max-width: 610px) {
		display: block;
		position: absolute;
		height: 2em;
		width: 100vw;
		top: 0;
		left: 0;
	}
`;

const LogoStyle = styled.img`
	position: absolute;
	position: absolute;
	top: -1.5em;
	left: 27%;
	width: 9em;
`;

const MenuStyle = styled(Menu)`
	position: absolute;
	top: 0.7em;
	left: 1em;
	font-size: 16px;
	color: #38a66d;
`;

const CrossStyle = styled(Cross)`
	position: absolute;
	top: 0.3em;
	left: 0.3em;
	font-size: 16px;
	color: #38a66d;
`;

const HomeCircleStyle = styled(HomeCircle)`
	color: #38a66d;
	position: absolute;
	left: 2.8em;
`;

const HomeMenuBackground = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	z-index: 999;
	background-color: #0000006b;
`;

const HomeMenuWraper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 70vw;
	height: 100%;
	z-index: 9999;
	background-color: white;
`;

const MenuNavBar = styled.div`
	padding-top: 7em;
	display: flow-root;
	justify-content: center;
	text-align: center;
	a {
		color: #000;
		text-decoration: none;
		padding: 1em;
	}

	div {
		position: relative;
		font-weight: 500;
		width: fit-content;
		justify-content: flex-start;
		padding-top: 0.2em;
		margin-left: 10%;
		font-size: 36px;
		border-bottom: 1px solid #38a66d;
		&:hover {
			cursor: pointer;
		}
	}
`;

const QuizBox = styled.div`
	color: black;
	position: relative;
	max-width: 70vw;
	padding: 2em;
	height: 100%;
	width: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 810px) {
		max-width: 100%;
		padding-top: 5em;
	}
`;

export const Quiz = ({ stateScreen, setStateScreen, QuizData }) => {
	const [formState, setFormState] = useState(QuizData);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [endQuestion, setEndQuestion] = useState(false);
	const [homeMenuState, setHomeMenuState] = useState(false);
	const [simpleQuiz, setSimpleQuiz] = useState(true);
	const businessQuiz = formState[0].type === 'business';

	const handleOpenMenu = () => {
		setHomeMenuState(true);
	};

	const handleCloseMenu = () => {
		setHomeMenuState(false);
	};

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

	const updateInputValueBusinessForm = ({ columName, rowIndex, value }) => {
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
	const updateSliderValueIndividualSimpleForm = ({ value, id }) => {
		const screenRows = formState[questionIndex].rowStructureSimple;
		screenRows['slider'] = value;
		setFormState({
			...formState,
			[questionIndex]: {
				...formState[questionIndex],
				rowStructureSimple: screenRows,
			},
		});
	};

	const updateImputValueIndividualComplexForm = ({ value, question }) => {
		const screenRows = formState[questionIndex].rowStructureComplex;
		screenRows[question] = value;
		setFormState({
			...formState,
			[questionIndex]: {
				...formState[questionIndex],
				rowStructureComplex: screenRows,
			},
		});
	};

	const updateComplexFormState = ({ newState }) => {
		setFormState({
			...formState,
			[questionIndex]: {
				...formState[questionIndex],
				ComplexFormState: !newState,
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
		updateInputValueBusinessForm({ value, rowIndex, columName });
	};

	const handleInputIndividual = (e, question) => {
		e.preventDefault();
		const { value } = e.target;
		updateImputValueIndividualComplexForm({ value, question });
	};

	const handleSliderInput = (e, id) => {
		e.preventDefault();
		const { value } = e.target;
		updateSliderValueIndividualSimpleForm({ value, id });
	};

	const handleQuizDesign = (e) => {
		setSimpleQuiz((prevState) => {
			const newState = !prevState;
			updateComplexFormState({ newState });
			return newState;
		});
	};

	const finish = () => {
		setStateScreen({ ...stateScreen, formState });
	};

	const HomeMenu = () => {
		if (homeMenuState) {
			return (
				<>
					<HomeMenuBackground onClick={handleCloseMenu} />
					<HomeMenuWraper>
						<LogoStyle src={logo} alt='logo'></LogoStyle>
						{homeMenuState ? (
							<CrossStyle onClick={handleCloseMenu} size='60' />
						) : (
							<MenuStyle onClick={handleCloseMenu} size='40' />
						)}
						<MenuNavBar>
							<NavLink
								to='/'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>
									<HomeCircleStyle size='40' />
									Home
								</div>
							</NavLink>
							<NavLink
								to='/a'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>Information</div>
							</NavLink>
							<NavLink
								to='/b'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>Others</div>
							</NavLink>
							<NavLink
								to='/c'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>About</div>
							</NavLink>
							<NavLink
								to='/d'
								activeStyle={{
									color: '#38a66d',
								}}>
								<div className='fill'>Contribute</div>
							</NavLink>
						</MenuNavBar>
					</HomeMenuWraper>
				</>
			);
		} else {
			return null;
		}
	};

	return (
		<QuizWrapper>
			<HomeNavBarWrapper>
				<HomeNavBar handleMenu={handleOpenMenu} />
			</HomeNavBarWrapper>
			<HomeMenu />
			<SideQuizMenu questionIndex={questionIndex} formState={formState} />
			<QuizBox>
				{businessQuiz ? (
					<QuestionQuizBusiness
						rowsValues={formState[questionIndex]}
						handleInput={handleInput}
					/>
				) : (
					<QuestionQuizIndividual
						rowsValues={formState[questionIndex]}
						handleSliderInput={handleSliderInput}
						handleInputIndividual={handleInputIndividual}
						handleQuizDesign={handleQuizDesign}
						simpleQuiz={simpleQuiz}
					/>
				)}
				<Buttons
					back={back}
					next={next}
					finish={finish}
					end={endQuestion}
					handleDeleteQuestion={handleDeleteQuestion}
					handleAddRow={handleAddRow}
					businessQuiz={businessQuiz}
					rowsValues={formState[questionIndex]}
				/>
			</QuizBox>
		</QuizWrapper>
	);
};
