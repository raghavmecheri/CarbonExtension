import React from 'react';
import { Home } from '../components/Home';
import { Carbon } from '../components/Carbon';
import styled from 'styled-components';
import Theme from '../style/Theme';
import { BrowserRouter, Route } from 'react-router-dom';

const AppContainer = styled.div`
	color: ${props => props.theme.colors.ligth};
	text-align: center;
	height: 100%;
`;

function App() {
	return (
		<BrowserRouter>
			<Theme>
				<AppContainer>
					{/* <Background /> */}
					<Route exact path='/' component={Home} />
					<Route path='/Carbon' component={Carbon} />
				</AppContainer>
			</Theme>
		</BrowserRouter>
	);
}

export default App;
