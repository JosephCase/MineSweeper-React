const intitialCellState = {
    hasMine: false,
    adjacentMines: 0,
    open: false,
    marked: false,
    mistaken: false
}


export const createGrid = ({ size, mineChance }) => {
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

const map = (matrix, fn) => {
    return matrix.map((column, i) => column.map((cell, j) => fn(cell, i, j)))
}

const forAdjacent = (grid, x, y, fn) => {
    for (let i = x - 1; i <= x + 1; i++) {
        if(grid[i]) {
            for (let j = y - 1; j <= y + 1; j++) {
                if(!(i === x && j === y) && grid[i][j]) {
                    fn(grid[i][j], i, j);
                }
            }
        }
    }
}


const populateAdjacentMineCounts = (grid) => {
    return map(grid, (cell, x, y) => (
        Object.assign(cell, {
            adjacentMines: getAdjacentCellsCount(grid, x, y)
        })
    ))
}

const getAdjacentCellsCount = (grid, x, y) => {
    let mineCount = 0;
    forAdjacent(grid, x, y, (cell) => {
        if (cell.hasMine) {
            mineCount++;
        }
    })
    return mineCount;
}