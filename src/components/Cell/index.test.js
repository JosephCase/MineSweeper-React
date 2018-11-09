import React from 'react';
import Cell from './';
import { shallow } from 'enzyme'

describe('Cell', () => {

    it('should display no value when the cell is not open', () => {
        const wrapper = shallow(<Cell adjacentMines={3} />);
        expect(wrapper.text()).toBe('');
    })

    describe('when has prop open', () => {
        it('should displays adjacent mines count when greater than 0', () => {
            const wrapper = shallow(<Cell adjacentMines={3} open={true} />);
            expect(wrapper.text()).toBe('3');
        })
        it('should display no value when adjacent mines count is less than 1', () => {
            const wrapper = shallow(<Cell adjacentMines={0} open={true} />);
            expect(wrapper.text()).toBe('');
        })
        it('should display no value when adjacent mines count is not passed', () => {
            const wrapper = shallow(<Cell open={true} />);
            expect(wrapper.text()).toBe('');
        })
    })

    describe('when clicked', () => {
        it('should call onClick prop', () => {
            const mockedFunction = jest.fn();
            const wrapper = shallow(<Cell onClick={mockedFunction} />);
            wrapper.simulate('click');
            expect(mockedFunction).toHaveBeenCalledTimes(1);
        })
        it('should not call onClick prop if it has marked prop', () => {
            const mockedFunction = jest.fn();
            const wrapper = shallow(<Cell onClick={mockedFunction} marked={true} />);
            wrapper.simulate('click');
            expect(mockedFunction).toHaveBeenCalledTimes(0);
        })
    })

    describe('when right click', () => {

        it('should call onRightClick prop', () => {
            const mockedFunction = jest.fn();
            const eventMock = { preventDefault: () => { } };
            const wrapper = shallow(<Cell onRightClick={mockedFunction} />);
            wrapper.simulate('contextMenu', eventMock);
            expect(mockedFunction).toHaveBeenCalledTimes(1);
        })
        it('it should prevent the event object\'s default behavour', () => {
            const mockedFunction = jest.fn();
            const mockedPreventDefault = jest.fn();
            const eventMock = { preventDefault: mockedPreventDefault };
            const wrapper = shallow(<Cell onRightClick={mockedFunction} />);
            wrapper.simulate('contextMenu', eventMock);
            expect(mockedPreventDefault).toHaveBeenCalledTimes(1);
        })
    })
})