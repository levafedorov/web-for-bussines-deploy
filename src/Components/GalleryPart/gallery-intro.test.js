import React from 'react';
import {shallow} from 'enzyme';
import GalleryIntro from './GalleryIntro';




describe('GalleryIntro component', () => {
    test("Should component GalleryIntro render", () => {
         const component =  shallow(<GalleryIntro/>);
         expect(component).toMatchSnapshot();
    });
});