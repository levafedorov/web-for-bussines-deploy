import React from 'react';
import {shallow} from 'enzyme';
import Gallery from './Gallery';

const photos = 
[{photo: "photo", title: "photo"}, {photo: "photo", title: "photo"}, {photo: "photo", title: "photo"}];


describe('Gallery component', () => {
   let setUp = (props) => shallow(<Gallery {...props} />)
   let component;
   let instance;
   const context = {theme: 'default',  change: () => {}}

   beforeEach(() => {
     component = setUp({photos});
     instance =  component.instance();     
   });

   describe("check Gallery component with props and default props", () => {
       test('Check with props', () => {
        const component = setUp({photos});
        expect(component).toMatchSnapshot();
       });
       test('Check with defaultProps', () => {
        const component = setUp();
        expect(component).toMatchSnapshot();
       });
   });

   describe("Should width of GalleryItem change with amount of items", () => {
       test("width with 4 item", () => {
        const photosCopy = [...photos];
        photosCopy.push({photo: "photo", title: "photo"});
        const component = setUp({photos: photosCopy});
        expect(component).toMatchSnapshot();
       });
    });
    describe("check Handlers and position", () => {
        test("check leftHandler", () => {
          instance.leftHandler();
          expect(component).toMatchSnapshot();
        });
        test("check rightHandler", () => {
            instance.rightHandler();
            expect(component).toMatchSnapshot();
        });
     });

});