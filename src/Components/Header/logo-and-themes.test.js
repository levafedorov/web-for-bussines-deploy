import React from 'react';
import {shallow} from 'enzyme';
import LogoAndThemes from './LogoAndThemes.jsx';


test('Should logo render', () => {
    const component = shallow(<LogoAndThemes />);
    expect(component).toMatchSnapshot();
});