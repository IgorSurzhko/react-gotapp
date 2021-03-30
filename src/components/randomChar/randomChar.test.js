import React from 'react';
import RandomChar from './randomChar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';



describe('Testing <RandomChar/>', () => {
    it('RandomChar have rendered correctly', () => {
        const char = shallow(<RandomChar/>);
        expect(toJson(char, {mode: 'shallow'})).toMatchSnapshot();
    })
});