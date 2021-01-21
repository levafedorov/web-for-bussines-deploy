import React from 'react';
import MainPartMessage from './MainPartMessage';
import {shallow, mount} from 'enzyme';







describe('CompactSlidingMenuTest component', () => {
    const setUp = (props) => shallow(<MainPartMessage {...props}/>);
    let component;
    let instance;
    beforeEach(() => {
        component = setUp();
        instance = component.instance();
    });

    it("Should components render", () => {
        component = setUp();
        expect(component).toMatchSnapshot();
    });

//     describe('Component methods', () => {
      
            
// });

});
