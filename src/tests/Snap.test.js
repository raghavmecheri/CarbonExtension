import React from 'react';
import ReactDOM from 'react-dom';
import Title from '../components/Home/intro-title';
import Theme from '../Theme';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly enzyme', () => {
	const wrapper = shallow(
		<Theme>
			<Title />
		</Theme>
	);

	expect(toJson(wrapper)).toMatchSnapshot();
});
