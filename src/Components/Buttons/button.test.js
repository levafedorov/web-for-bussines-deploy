import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';


test('Check btn functionality', () => {
    const mockCallBack = jest.fn();
    expect(mockCallBack.mock.calls.length).toBe(0);
    const btn = shallow(<Button fn={mockCallBack}/>);
    btn.simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
});
