import React from 'react';
import {CompactSlidingMenuTest} from './CompactSlidingMenu';
import {shallow, mount} from 'enzyme';

const props = {items: {home: 'home', about: 'about', services: 'services'}}





describe('CompactSlidingMenuTest component', () => {
    const setUp = (props) => mount(<CompactSlidingMenuTest {...props}/>);
    let component;
    let instance;
    beforeEach(() => {
        component = setUp(props);
        instance = component.instance();
    });

    it("Should components prop's to be working", () => {
        component = setUp();
        expect(component).toMatchSnapshot();
        component = setUp(props);
        expect(component).toMatchSnapshot();
    });

//     describe('Component methods', () => {
      
            
// });

});
