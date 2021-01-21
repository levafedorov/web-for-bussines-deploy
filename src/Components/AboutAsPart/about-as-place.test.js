import React from 'react';
import {shallow} from 'enzyme';
import AboutUsPlace from './AboutUsPlace';



describe("AboutUsPlace component", () => {
    test("Should AboutUsPlace component render", () => {
        const component = shallow(<AboutUsPlace/>);
        expect(component).toMatchSnapshot();
    });
});