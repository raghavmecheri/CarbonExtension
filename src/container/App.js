import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../style/Theme';

import { Home } from '../components/Home';
import { Carbon } from '../components/Carbon';
import { Quiz } from '../components/Quiz';

const AppContainer = styled.div`
	color: ${(props) => props.theme.colors.ligth};
	text-align: center;
	height: 100%;
`;

function App() {
	return (
		<BrowserRouter>
			<Theme>
				<AppContainer>
					<Route exact path='/' component={Home} />
					<Route path='/carbon' component={Carbon} />
					<Route path='/quiz/:type' component={Quiz} />
				</AppContainer>
			</Theme>
		</BrowserRouter>
	);
}

export default App;
