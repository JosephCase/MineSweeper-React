import { takeEvery, put, select } from 'redux-saga/effects';
import { actionTypes, setGrid } from './actions';
import { getSettings } from './selectors';
import { createGrid as createGridHelper } from './helpers/mineFieldHelper';

const { SET_SIZE, SET_MINE_CHANCE, CREATE_GRID } = actionTypes;

function* createGrid() {
    const settings = yield select(getSettings);
    const grid = createGridHelper(settings);
    yield put(setGrid(grid));
}

export default function* watchCreateGrid() {
    yield takeEvery([CREATE_GRID, SET_SIZE, SET_MINE_CHANCE], createGrid)
}