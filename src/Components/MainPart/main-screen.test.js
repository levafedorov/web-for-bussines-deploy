import React from 'react';
import MainScreen from './MainScreen';
import {shallow, mount} from 'enzyme';







describe('CompactSlidingMenuTest component', () => {
    const setUp = (props) => shallow(<MainScreen {...props}/>);
    let component;
    let instance;
    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });

    it("Should component render", () => {
        component = setUp();
        expect(component).toMatchSnapshot();
    });

//     describe('Component methods', () => {
      
            
// });

});
