import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../style/Theme';

import { Home } from '../components/Home';
import { Quiz } from '../components/Quiz/quiz';
import { Result } from '../components/Result/Result';
import { Information } from '../components/NavBarPages/Information/InformationPage';
import { About } from '../components/NavBarPages/About/AboutPage';
import { Contribute } from '../components/NavBarPages/Contribute/ContributePage';
import { ErrorPage } from '../components/Error/ErrorPage';

import { BusinessCarbonQuizData } from '../data/carbon/business-carbon-quiz-data';
import { IndividualCarbonQuizData } from '../data/carbon/individual-carbon-quiz-data';

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
								QuizData={IndividualCarbonQuizData}
							/>
						)}
					/>
					<Route
						path='/carbon/quiz/organization'
						component={() => (
							<Quiz
								stateScreen={stateScreen}
								setStateScreen={setStateScreen}
								QuizData={BusinessCarbonQuizData}
							/>
						)}
					/>
					<Route path='/information' component={Information} />
					<Route path='/about' component={About} />
					<Route path='/contribute' component={Contribute} />

					<Route
						path='/contribute/tree'
						component={() => {
							window.location.href = 'https://teamtrees.org/';
							return null;
						}}
					/>
					<Route
						path='/contribute/wwf'
						component={() => {
							window.location.href = 'https://www.wwf.org.uk/';
							return null;
						}}
					/>
					<Route
						path='/donate/wwf'
						component={() => {
							window.location.href = 'https://support.wwf.org.uk/donate-to-wwf';
							return null;
						}}
					/>
					<Route
						path='/contribute/oceans'
						component={() => {
							window.location.href = 'https://4ocean.com/';
							return null;
						}}
					/>
					<Route
						path='/donate/oceans'
						component={() => {
							window.location.href = 'https://4ocean.com/shop-all/';
							return null;
						}}
					/>
					<Route path='/result' component={() => <Result stateScreen={stateScreen} />} />
					{/* <Route path='/errorPage' component={ErrorPage} />
					<Route render={() => <Redirect to='/' />} /> */}
				</AppContainer>
			</Theme>
		</BrowserRouter>
	);
}

export default App;
