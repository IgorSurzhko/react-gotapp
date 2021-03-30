import React from 'react';
import RandomChar from './randomChar';
import { shallow } from 'enzyme';



describe('Testing <RandomChar/>', () => {
    it('RandomChar have rendered correctly', () => {
        const char = shallow(<RandomChar/>);
        expect(char).toMatchSnapshot();
    })
});