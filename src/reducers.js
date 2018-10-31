import { actionTypes } from './actions'
import { combineReducers } from 'redux';
import { createGrid } from './helpers/mineFieldHelper';

const { CREATE_GRID, SET_GRID, SET_GAME_STATUS, SET_MINE_CHANCE, SET_SIZE } = actionTypes;

const grid = (state = [[]], action, settings) => {

    const { type } = action;

    switch (type) {
        case CREATE_GRID:
        case SET_MINE_CHANCE:
        case SET_SIZE:
            return createGrid(settings);
        case SET_GRID:
            return action.grid;
        default:
            return state;
    }
}

const gameStatus = (state = 'PLAYING', action) => {
    const { type, gameStatus } = action;
    switch (type) {
        case SET_GAME_STATUS:
            return gameStatus;
        case SET_MINE_CHANCE:
        case SET_SIZE:
            return 'PLAYING'
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

const reducer = (state = {}, action) => {
    let settingsState = settings(state.settings, action);
    return {
        grid: grid(state.grid, action, settingsState),
        settings: settingsState,
        gameStatus: gameStatus(state.gameStatus, action)
    }
}

export default reducer;