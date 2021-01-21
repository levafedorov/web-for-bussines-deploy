import React from "react";
import {shallow, mount} from "enzyme";
import Form from "./Form";
import {testState, testFormFilled, testFormErrors} from './testObjects';


const categories = ['Fisrt', 'Second', 'Third'];
const cities = ['Praha', 'Brno', 'Plzen', 'Ostrava', 'Olomouc'];

const props = {...testState, categories, cities};
const propsWithErr = {...testFormErrors};

describe("Form component", () => {
   const setUp = (props) => shallow(<Form {...props}/>); 
   let component;
   let instance;

   test("Should component render", () => {
        component = setUp({...props});
        expect(component).toMatchSnapshot();
   }); 

   test("Should component render with default props", () => {
    component = setUp({...testState});
    expect(component).toMatchSnapshot();
  });

  test("Should component render with filled form", () => {
    component = setUp({...testFormFilled});
    expect(component).toMatchSnapshot();
  });

  test("Should component render with error fields", () => {
    component = setUp({...propsWithErr});
    expect(component).toMatchSnapshot();
  });
  
  describe("Check inputs", () => {
       test("Check all imputs on change", () => {
         const setFormState = jest.fn();
         const component = mount(<Form  setFormState={setFormState} {...props}/>)
         const componentDOM  = component.getDOMNode();
         const allInputElems = [...componentDOM.querySelectorAll('.form-input')];
         const allNames = allInputElems.map(item => item.getAttribute('name'));
         console.log(allNames);

         for(let int = 0; int < allNames.length; int++){
            const input = component.find(`[name='${allNames[int]}']`)
            input.simulate("change", {target: {value: 'check', name: 'check'}});
            expect(setFormState).toHaveBeenCalledWith({check: 'check'}, 'form');
            setFormState.mockRestore();
         }
       });
  });
});