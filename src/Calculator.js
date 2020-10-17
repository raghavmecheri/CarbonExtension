import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Theme from './Theme';

import { Home } from './components/Home';

const AppContainer = styled.div`
	margin: 0;
	width: 70vw;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
`;

const IndividualQuiz = () => {
	return (
		<div>Individual Quiz goes here!</div>
	);
}

const BusinessQuiz = () => {
	return (
		<div>Business Quiz goes here!</div>
	);
}


const App = () => (
	<BrowserRouter>
		<Theme>
			<AppContainer>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/quiz/person' component={IndividualQuiz} />
					<Route path='/quiz/organization' component={BusinessQuiz} />
				</Switch>
			</AppContainer>
		</Theme>
	</BrowserRouter>
);

export default App;
