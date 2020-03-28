import React from 'react';
import { Home } from './components/Home';
import styled from 'styled-components';
import Theme from './style/Theme';

const AppContainer = styled.div`
	color: ${props => props.theme.colors.ligth};
	text-align: center;
	height: 100%;
`;

function App() {
	return (
		<Theme>
			<AppContainer>
				{/* <Background /> */}
				<Home />
			</AppContainer>
		</Theme>
	);
}

export default App;
