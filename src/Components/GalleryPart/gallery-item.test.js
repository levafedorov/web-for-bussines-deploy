import React from 'react';
import {shallow} from 'enzyme';
import GalleryItem from './GalleryItem';


const fakeProps = {photo: "fake url", title: "fake title",  width:"100", active:true}

describe('GalleryItem component', () => {
    
    describe('Check GalleryItem props', ()=>{
        test("Check with props",  () => {
            const component = shallow(<GalleryItem {...fakeProps}/>)
            expect(component).toMatchSnapshot();
        });
        test("Check with defaultProps",  () => {
            const component = shallow(<GalleryItem/>)
            expect(component).toMatchSnapshot();
        });
    });

});