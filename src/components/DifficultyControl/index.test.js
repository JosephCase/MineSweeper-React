import React from 'react';
import { DifficultyControl } from './';
import { shallow } from 'enzyme'
import config from '../../config';
import { Option } from './styledComponents'

const { difficulties } = config;

describe('Cell', () => {
    it('should render an option for each difficulty', () => {
        const expectedLength = difficulties.length;
        const wrapper = shallow(<DifficultyControl />);
        expect(wrapper.children(Option).length).toBe(expectedLength);
    })
    it('should display the text property for each difficulty', () => {
        const mockedFunction = jest.fn();
        const wrapper = shallow(<DifficultyControl />);
        wrapper.children(Option).forEach((node, index) => {
            expect(node.text()).toBe(difficulties[index].text)
        })
    })
    it('should, when clicked, call the setMineChance function with correct mine chance', () => {
        const mockedFunction = jest.fn();
        const wrapper = shallow(<DifficultyControl setMineChance={mockedFunction} />);
        wrapper.children(Option).forEach((node, index) => {
            node.simulate('click');
            expect(mockedFunction).toHaveBeenLastCalledWith(difficulties[index].mineChance)
        })
    })
    it('should pass the selected prop to the Option (child) that matches the mineChance', () => {
        const difficultyIndex = 2;
        const mineChance = difficulties[difficultyIndex].mineChance
        const wrapper = shallow(<DifficultyControl mineChance={mineChance} />);
        expect(wrapper.children(Option).at(difficultyIndex).prop('selected')).toBe(true);
    })
})