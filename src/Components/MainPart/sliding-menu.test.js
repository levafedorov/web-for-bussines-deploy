import React from 'react';
import {SlidingMenuTest} from './SlidingMenu';
import {shallow, mount} from 'enzyme';

const props = {items: {home: 'home', about: 'about', services: 'services'}}





describe('SlidingMenu component', () => {
    const setUp = (props) => mount(<SlidingMenuTest {...props}/>);
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

    describe('Component methods', () => {
        test('should add class active when clicked', () => {
             let listItem = component.find('.link-2');
             instance.setClassNameToItem = jest.fn();
             listItem.simulate('click');
             expect(instance.setClassNameToItem).toHaveBeenCalledTimes(1);              
        });
         
            
});

});
