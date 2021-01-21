import React from 'react';
import {mount} from 'enzyme';
import AboutUsPart from './AboutAsPart';
import ThemeContext from "../PageContexts/PageThemes.jsx";

const fakeContext = {theme:"light", change: () => {}}

describe("AboutUsPart component", () => {
    describe("Check context of AboutUsPart component", () => {
        const setUp = (context) => mount(<ThemeContext.Provider value={context}><AboutUsPart/></ThemeContext.Provider>)
        test("Check with contenxt", () => {
          const component = setUp(fakeContext);
          expect(component).toMatchSnapshot();
        });
        test("Check default contenxt", () => {
            const component = mount(<AboutUsPart/>)
            expect(component).toMatchSnapshot();
        });
    });
});