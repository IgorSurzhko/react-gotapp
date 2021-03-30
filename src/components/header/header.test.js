import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Testing <Header/>', () => {
    it('Header have rendered correctly', () => {
        const header = shallow(<Header/>);
        expect(toJson(header, {mode: 'shallow'})).toMatchSnapshot();
    })
});
