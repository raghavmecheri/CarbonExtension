import React, { useState, useReducer, useCallback } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Quiz from './quiz';
import QuizHeader from './IndividualQuiz/quiz-header';
import QuizBody from './IndividualQuiz/quiz-body';
import quizData from '../../data/individual-carbon-data';

const QuestionsWrapper = styled.div`
	height: 100%;
	width: 100%;

	${({ theme }) =>
		theme.query.bigMobile({
			height: 'auto',
		})}

	&.next-enter {
		transform: translateX(100vw);
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(180vw)',
			})}
	}
	&.next-enter-active {
		transform: translateX(0%);
		transition: transform 1000ms ease-in-out;
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(0vw)',
				transition: 'transform 1000ms ease-in-out',
			})}
	}
	&.next-exit {
		transform: translateX(-50vw);
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(-80vw)',
			})}
	}
	&.next-exit-active {
		transform: translateX(-200vw);
		transition: transform 1000ms ease-in-out;
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(-200vw)',
				transition: 'transform 1000ms ease-in-out',
			})}
	}

	&.back-enter {
		transform: translateX(-100vw);
	}
	&.back-enter-active {
		transform: translateX(0%);
		transition: transform 1000ms ease-in-out;
	}
	&.back-exit {
		transform: translateX(-50vw);
		${({ theme }) =>
			theme.query.bigMobile({
				transform: 'translateX(-80vw)',
			})}
	}
	&.back-exit-active {
		transform: translateX(100vw);
		transition: transform 1000ms ease-in-out;
	}
`;

const reducer = (state, action) => {
	const questionsLenght = Object.keys(state.quizData).length;
	let questionIndex = state.questionIndex;
	let newState = { ...state };
	switch (action.type) {
		case 'next':
			if (state.questionIndex === questionsLenght - 1) return state;
			return { ...state, questionIndex: state.questionIndex + 1 };
		case 'back':
			if (state.questionIndex === 0) return state;
			return { ...state, questionIndex: state.questionIndex - 1 };
		case 'reset':
			return { ...state, questionIndex: 0 };
		case 'quizSlider':
			newState.quizData[questionIndex].simpleState.slider = action.value;
			return newState;
		case 'quizInput':
			newState.quizData[questionIndex].complexState.savedValue[action.name] = action.value;
			return newState;
		case 'quizState':
			newState.quizData[state.questionIndex].quizType = !action.payload;
			return newState;
		default:
			throw new Error('Unexpected action');
	}
};

const initialState = {
	quizData: { ...quizData },
	questionIndex: 0,
};

const IndividualQuiz = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [slideTransition, setSlideTransition] = useState(true);

	const handleClick = (e) => {
		dispatch({ type: e.currentTarget.id });
		if (e.currentTarget.id === 'next') return setSlideTransition('next');
		return setSlideTransition('back');
	};

	return (
		<Quiz handleClick={handleClick} state={state}>
			<TransitionGroup
				style={{ display: 'flex' }}
				childFactory={(child) => React.cloneElement(child, { classNames: slideTransition, timeout: 1000 })}>
				<CSSTransition key={state.questionIndex} timeout={1000} classNames={slideTransition}>
					<QuestionsWrapper>
						<QuizHeader state={state} />
						<QuizBody state={state} dispatch={dispatch} />
					</QuestionsWrapper>
				</CSSTransition>
			</TransitionGroup>
		</Quiz>
	);
};

export default IndividualQuiz;
