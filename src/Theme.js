import React from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';

const colors = {
	primary: 'white',
	secondary: 'black',
	forest: '#38a66d',
	lightForest: '#03b554',
};

const breakpoints = {
	xxl: '1180px',
	xl: '70%',
	l: '55%',
	m: '30%',
	s: '20%',
	xs: '15%',
};

const fontSizes = {
	title: '16',
	subtitle: '16',
	header: '16',
	subheader: '16',
	text: '16',
};

const fontWeights = {
	lighter: '300',
	light: '400',
	normal: '500',
	bold: '700',
};

WebFont.load({
	google: {
		families: ['Boogaloo&family=Raleway:wght@800&family=Yanone+Kaffeesatz:wght@700&display=swap'],
	},
});

const fontFamily = {
	// title: 'Boogaloo, cursive',
	title: 'Yanone Kaffeesatz, sans-serif',
	title2: 'Raleway, sans-serif',
};

const theme = {
	breakpoints,
	colors,
	fontSizes,
	fontWeights,
	fontFamily,
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
