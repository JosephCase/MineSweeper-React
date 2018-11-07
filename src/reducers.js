import { actionTypes } from './actions'
import { combineReducers } from 'redux';

const { SET_GRID, SET_MINE_CHANCE, SET_SIZE, SET_PLAY_DIMENSIONS } = actionTypes;

const grid = (state = [[]], action, settings) => {

    const { type } = action;

    switch (type) {
        case SET_GRID:
            return action.grid;
        default:
            return state;
    }
}

const mineChance = (state = 0.1, action) => {
    const { type, mineChance } = action;
    switch (type) {
        case SET_MINE_CHANCE:
            return mineChance;
        default:
            return state;
    }
}

const size = (state = 10, action) => {
    const { type, size } = action;
    switch (type) {
        case SET_SIZE:
            return size;
        default:
            return state;
    }
}

const settings = combineReducers({
    mineChance,
    size
})

const playDimensions = (state = {width: null, height: null}, action) => {
    const { type, dimensions } = action;
    switch(type) {
        case SET_PLAY_DIMENSIONS:
            return dimensions;
        default:
            return state;
    }
}

export default combineReducers({
    grid,
    settings,
    playDimensions
});