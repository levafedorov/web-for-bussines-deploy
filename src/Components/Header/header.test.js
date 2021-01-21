import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';



test('Should header render', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });

 
