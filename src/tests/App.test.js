import React from 'react';
import { render } from '@testing-library/react';
import HeroBody from '../components/Home/hero-body';

test('renders learn react link', () => {
	const { getByText } = render(<HeroBody />);
	const linkElement = getByText(/Select/i);
	expect(linkElement).toBeInTheDocument();
});
