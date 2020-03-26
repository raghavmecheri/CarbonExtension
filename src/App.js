import React from 'react';
import styled from 'styled-components';
import Theme from './style/Theme';

const AppContainer = styled.div`
	color: ${props => props.theme.colors.ligth};
	text-align: center;
	position: sticky;
	margin: auto;
	height: 100%;
	width: 100vw;
`;

function App() {
	return (
		<Theme>
			<AppContainer>
				<h1>Landing Page</h1>
			</AppContainer>
		</Theme>
	);
}

export default App;
