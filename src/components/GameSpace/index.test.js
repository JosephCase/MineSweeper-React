import React from 'react';
import { GameSpace } from './';
import { mount } from 'enzyme'

describe('GameSpace', () => {

    it('should render it\'s children', () => {
        const MockChild = () => <div />
        const wrapper = mount(
            <GameSpace>
                <MockChild />
            </GameSpace>
        )

        expect(wrapper.contains(<MockChild />)).toBe(true);
    })

    it('should call setPlayDimensions on componentDidMount', () => {
        const mockedFunction = jest.fn();
        const wrapper = mount(<GameSpace setPlayDimensions={mockedFunction} />);
        expect(mockedFunction).toHaveBeenCalledTimes(1);
    })

})