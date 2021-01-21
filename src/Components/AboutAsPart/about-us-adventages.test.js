import React from 'react';
import {shallow} from 'enzyme';
import Adventages from './Adventages';

describe("Adventages component", ()=>{
    test("Should component render", ()=>{
       const component = shallow(<Adventages/>);
       expect(component).toMatchSnapshot();    
    });
});

