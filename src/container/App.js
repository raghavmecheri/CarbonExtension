import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Theme from '../style/Theme';

import { Home } from '../components/Home/Home';
import { Quiz } from '../components/Quiz/quiz';
import { Result } from '../components/Result/Result';

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
						path='/quiz/:type'
						component={() => (
							<Quiz stateScreen={stateScreen} setStateScreen={setStateScreen} />
						)}
					/>
					<Route
						path='/result'
						component={() => <Result stateScreen={stateScreen} />}
					/>
				</AppContainer>
			</Theme>
		</BrowserRouter>
	);
}

export default App;
