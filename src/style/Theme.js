import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		ligth: 'white',
		dark: 'black',
	},
	fonts: ['sans-serif'],
	fontSize: {
		smal: '1em',
		medium: '2em',
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
