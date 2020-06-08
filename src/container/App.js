import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../style/Theme';

import { Home } from '../components/Home/Home';
import { Quiz } from '../components/Quiz/quiz';
import { Result } from '../components/Result/Result';
import { ErrorPage } from '../components/Error/ErrorPage';

import { OrganizationCarbonQuizData } from '../data/organization-carbon-quiz-data';
import { PersonCarbonQuizData } from '../data/person-carbon-quiz-data';

import { OrganizationWaterQuizData } from '../data/organization-water-quiz-data';
import { PersonWaterQuizData } from '../data/person-water-quiz-data';

const AppContainer = styled.div`
	color: ${(props) => props.theme.colors.ligth};
	text-align: center;
	height: 100%;
`;

function App() {
	const [stateScreen, setStateScreen] = useState({});
	return (
		<BrowserRouter>
			<Theme>
				<AppContainer>
					<Route exact path='/' component={Home} />
					<Route
						path='/carbon/quiz/person'
						component={() => (
							<Quiz
								stateScreen={stateScreen}
								setStateScreen={setStateScreen}
								QuizData={PersonCarbonQuizData}
							/>
						)}
					/>
					<Route
						path='/carbon/quiz/organization'
						component={() => (
							<Quiz
								stateScreen={stateScreen}
								setStateScreen={setStateScreen}
								QuizData={OrganizationCarbonQuizData}
							/>
						)}
					/>
					<Route
						path='/water/quiz/person'
						component={() => (
							<Quiz
								stateScreen={stateScreen}
								setStateScreen={setStateScreen}
								QuizData={PersonWaterQuizData}
							/>
						)}
					/>
					<Route
						path='/water/quiz/organization'
						component={() => (
							<Quiz
								stateScreen={stateScreen}
								setStateScreen={setStateScreen}
								QuizData={OrganizationWaterQuizData}
							/>
						)}
					/>
					<Route
						path='/result'
						component={() => <Result stateScreen={stateScreen} />}
					/>
					{/* <Route path='/errorPage' component={ErrorPage} />
					<Route render={() => <Redirect to='/' />} /> */}
				</AppContainer>
			</Theme>
		</BrowserRouter>
	);
}

export default App;
