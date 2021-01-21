import React from 'react';
import slidingMenuHOC from './SlidingMenuHoc';
import {shallow} from 'enzyme';

describe('HOCMenu component', () => {

    let MockedComponent; 
    let MenuHoc; 
    let didMountSpy; 
    let didUnmountSpy;
    let component;
    let instance;

    beforeEach(() => {
        MockedComponent = jest.fn();
        MenuHoc = slidingMenuHOC(MockedComponent);
        didMountSpy = jest.spyOn(MenuHoc.prototype, 'componentDidMount');
        didUnmountSpy = jest.spyOn(MenuHoc.prototype, 'componentWillUnmount');
        jest.spyOn(window, 'addEventListener');
        jest.spyOn(window, 'removeEventListener');
        component = shallow(<MenuHoc />);
        instance = component.instance(); 
    });

    afterEach(() => {
        window.addEventListener.mockRestore();
        window.removeEventListener.mockRestore();
    });
 
    test('Should HOC renders wrapped elem', () => {
        expect(component).toMatchSnapshot();
    });

    describe('HOCMenu cicles', () => {
        test('Did mount method when started', () => {
            expect(didMountSpy).toHaveBeenCalledTimes(1);
            expect(window.addEventListener).toHaveBeenCalledTimes(1);
        });
        test('Unmount method after elem is unmouted', () => {
            expect(didUnmountSpy).toHaveBeenCalledTimes(0);
            component.unmount();
            expect(didUnmountSpy).toHaveBeenCalledTimes(1);
        });
         test('Should remove listener when unmount', () => {
             component.unmount();
             expect(window.removeEventListener).toHaveBeenCalledTimes(1);  

         });
    });
    describe('HOCMenu methods', () => {

         test('Should resizeAlg to be called when peelOfMenu is', () => {
            instance.resizeAlg = jest.fn(); 
            instance.peelOffMenu();
            expect(instance.resizeAlg).toHaveBeenCalledTimes(1); 
        });

        test('Should resizeAlg change state', () => {
            instance.resizeAlg(800);
            expect(component.state().fixed).toBe(true);
        });
    });
  
});