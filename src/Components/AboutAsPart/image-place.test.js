import React from 'react';
import {shallow} from 'enzyme';
import ImagePlace from './ImagePlace';

describe("ImagePlace component", ()=>{

    test("Should ImagePlace render", ()=>{
       const component = shallow(<ImagePlace/>);
       expect(component).toMatchSnapshot();    
    });

});