import React from 'react';
import {shallow} from 'enzyme';
import ThemeBar from './ThemeBar';


test('Should ThemeBar render', () => {
    const component = shallow(<ThemeBar />);
    expect(component).toMatchSnapshot();
});




