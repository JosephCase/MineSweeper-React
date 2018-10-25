import React from 'react'
import MineSweeperApp from '../Minefield'
import matrixHelper from '../../helpers/matrixHelper'

const settings = {
    size: 5,
    mineChance: 0
}

const intitialCellState = {
    hasMine: false,
    adjacentMines: 0,
    open: false,
    marked: false,
    mistaken: false
}

const Wrapper = () => {
    const startingGrid = createGrid(settings);
    return <MineSweeperApp startingGrid={startingGrid} />
}

const createGrid = ({ size, mineChance }) => {
    let grid = [];
    for (let i = 0; i < size; i++) {
        let column = [];
        for (let j = 0; j < size; j++) {
            const hasMine = (Math.random() < mineChance);
            const cell = Object.assign({}, intitialCellState, { hasMine })
            column = [...column, cell]
        }
        grid = [...grid, column]
    }
    
    return populateAdjacentMineCounts(grid)

}

const populateAdjacentMineCounts = (grid) => {
    return matrixHelper.map(grid, (cell, x, y) => (
        Object.assign(cell, {
            adjacentMines: getAdjacentCellsCount(grid, x, y)
        })
    ))
}

const getAdjacentCellsCount = (grid, x, y) => {
    let mineCount = 0;
    matrixHelper.forAdjacent(grid, x, y, (cell) => {
        if (cell.hasMine) {
            mineCount++;
        }
    })
    return mineCount;
}



export default Wrapper;