import React from 'react';
import {shallow} from 'enzyme';
import AboutUsArticle from './AboutUsArticle';



describe("AboutUsArticle component", () => {
    test("Should AboutUsArticle component render", () => {
        const component = shallow(<AboutUsArticle/>);
        expect(component).toMatchSnapshot();
    });
});