import React from 'react';
import {mount, shallow} from 'enzyme';
import ContactPart from "./ContactPart";
import ThemeContext from "../PageContexts/PageThemes";
import {defaultState, validObjects, invalidObjects, tryStateObj} from "./testObjects";






describe("ContactPart component", () => {
   let component = shallow(<ContactPart/>);
   let instance = component.instance();
   let mockedSetFormState;

   beforeAll(()=>{
    global.alert = jest.fn();}
   );
 
   afterEach(() => {
    global.alert.mockRestore();
    component.setState(defaultState);
   });

   describe("Check context", () => {
       
      test("Check with context", () => {
        const component = mount(
            <ThemeContext.Provider value={{theme: 'light', change: () => {}}}><ContactPart/></ThemeContext.Provider>)
        expect(component).toMatchSnapshot();
      });

      test("Check without context", () => {
        const component = mount(<ContactPart/>);
        expect(component).toMatchSnapshot();
       });
      });

    describe("Check methods", () => {
        describe("Check setFormState", () => {
             
            test("Check if setFormState fills form states", () => {
                 expect(component.state()).toMatchObject(defaultState);
                 instance.setFormState(tryStateObj, "form");
                 expect(component.state().form).toMatchObject(tryStateObj);
            });

            test("Check if setFormState fills form error object", () => {
                expect(component.state()).toMatchObject(defaultState);
                instance.setFormState(tryStateObj, "errObj");
                expect(component.state().errObj).toMatchObject(tryStateObj);
            });

        });
        describe("Check sendForm", () => {
   
            test("positive tests", () => {
                for(let int = 0; int < validObjects.length; int++){
                    component.setState({form: validObjects[int]});
                    instance.sendForm();
                    expect(global.alert).toHaveBeenCalledTimes(1);
                    global.alert.mockRestore();
                }
            });
             test("negative tests", () => {
                for(let int = 0; int < invalidObjects.length; int++){
                    let component = mount(<ContactPart/>);
                    component.instance().setFormState = jest.fn();
                    component.setState({form: invalidObjects[int]});
                    component.instance().sendForm();
                    expect(component.instance().setFormState).toHaveBeenCalledTimes(1);
    
                }
             });
        });

    });

   });



