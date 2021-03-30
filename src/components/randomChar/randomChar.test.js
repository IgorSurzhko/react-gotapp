import React from 'react';
import RandomChar from './randomChar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';



describe('Testing <RandomChar/>', () => {
    const char = shallow(<RandomChar/>);
    it('RandomChar have rendered correctly', () => {        
        expect(toJson(char, {mode: 'shallow'})).toMatchSnapshot();
    });

    it('RandomChar state "char" is empty object', () => {
        expect(char.state().char).toBeObject();
    })
});