import React from 'react';
import {shallow} from 'enzyme';
import AdventageItem from './AdventageItem';

describe("AdventageItem component", ()=>{
    const setUp = (props) => shallow(<AdventageItem {...props}/>);

    test("Check with props", ()=>{
       const component = setUp({name: 'check prop'})
       expect(component).toMatchSnapshot();    
    });
    test("Check with def props", ()=>{
        const component = setUp();
        expect(component).toMatchSnapshot();    
     });
});
