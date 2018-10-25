class matrixHelper {

    static map = (matrix, fn) => {
        return matrix.map((column, i) => column.map((cell, j) => fn(cell, i, j)))
    }

    static forAdjacent = (grid, x, y, fn) => {
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

}

export default matrixHelper;