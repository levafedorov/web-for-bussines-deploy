import React from 'react';
import {shallow} from 'enzyme';
import {GalleryPart} from './GalleryPart';




describe('Gallery component', () => {
   let component;
   let instance;
   const context = {theme: 'default',  change: () => {}}

   beforeEach(() => {
     component = shallow(<GalleryPart/>);
     instance =  component.instance();     
   });

    test('Check different context', () => {
        const component = shallow(<GalleryPart/>, {context});
        expect(component).toMatchSnapshot();
        component.setContext({theme: 'light',  change: () => {}});
        expect(component).toMatchSnapshot();  
    });

});