onmessage = (message) => {

    let {grid, x, y} = message.data;

    let toOpen = [{x,y}];
    let index = 0;

    while(index < toOpen.length) {

        let {x,y} = toOpen[index];
        index++;

        // if already open, it means we're repeating a path, lets skip
        if(grid[x][y].open === true || grid[x][y].marked === true) {
            continue;
        }

        grid[x][y].open = true;

        if(grid[x][y].adjacentMines === 0) {

            for (let i = x - 1; i <= x + 1; i++) {
                if(grid[i]) {
                    for (let j = y - 1; j <= y + 1; j++) {
                        if(!(i === x && j === y) && grid[i][j]) {
                            
                            if(grid[i][j].open === false) {
                                toOpen = [...toOpen, {x: i, y: j}]
                            }

                        }
                    }
                }
            }
        }
    }

    postMessage(grid);
}