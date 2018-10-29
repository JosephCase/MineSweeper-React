import React, { Component } from 'react';
import matrixHelper from '../../helpers/matrixHelper'
import Cell from '../Cell';
import styles from './style.css';

const GAME_STATUSI = {
    WON: 'WON',
    LOST: 'LOST',
    PLAYING: 'PLAYING'
}

class Minefield extends Component {

    workingGrid = null

    cellClickHandler(x, y) {
        const grid = revealIterative(this.props.grid, x, y);
        console.log(grid);
        this.props.updateGrid(grid);
        // if (this.checkWin() === true) {
        //     this.finishGame(true);
        // };
    }

    cellRightClickHandler(x, y) {
        const newGrid = [...this.props.grid];
        newGrid[x][y].marked = !newGrid[x][y].marked;
        this.props.updateGrid(newGrid);
    }

    openCell(x, y, clicked) {
        this.workingGrid = [...this.props.grid];
        this.workingGrid[x][y].open = true;

        if (this.workingGrid[x][y].hasMine) {
            this.workingGrid[x][y].exploded = true;
            this.finishGame(false);
        } else if (this.workingGrid[x][y].adjacentMines === 0) {
            this.openAdjacentCells(x, y);
        }
    }

    openAdjacentCells(x, y) {
        matrixHelper.forAdjacent(this.workingGrid, x, y, (cell, i, j) => {
            if (!cell.open && !cell.marked) {
                this.openCell(i, j);
            }
        })
    }

    checkWin() {

        const win = this.props.grid.every(column => column.every(cell => (cell.open || cell.marked)));

        return win;

    }

    finishGame(win) {

        const gameStatus = win ? GAME_STATUSI.WON : GAME_STATUSI.LOST
        this.props.updateStatus(gameStatus);

        if (!win) {
            this.workingGrid = matrixHelper.map(this.workingGrid, (cell) => {
                if (cell.hasMine && !cell.open && !cell.marked) {
                    cell.open = true;
                }
                if (cell.marked && !cell.hasMine) {
                    cell.mistaken = true;
                }
                return cell;
            })
        }
    }

    renderColumn(column, i) {
        const { status } = this.props;
        return (
            <div key={i}>
                {
                    column.map((cell, j) => (
                        <Cell
                            key={j}
                            {...cell}
                            onClick={() => this.cellClickHandler(i, j)}
                            onRightClick={() => this.cellRightClickHandler(i, j)}
                            disableClick={status !== GAME_STATUSI.PLAYING}
                        />
                    ))
                }
            </div>
        )
    }
    render() {
        const { grid } = this.props;
        return (
            <div className={styles.mineField}>
                {grid.map(this.renderColumn, this)}
            </div>
        )
    }
}

const revealIterative = (grid, x, y) => {
    let workingGrid = [...grid];

    let toOpen = [{x,y}];
    let index = 0;

    while(index < toOpen.length) {

        let {x,y} = toOpen[index];

        // if already open, it means we're repeating a path, lets skip
        if(workingGrid[x][y].open === true) {
            index++;
            continue;
        }

        workingGrid[x][y].open = true;
        index++;

        if(workingGrid[x][y].adjacentMines === 0) {

            for (let i = x - 1; i <= x + 1; i++) {
                if(workingGrid[i]) {
                    for (let j = y - 1; j <= y + 1; j++) {
                        if(!(i === x && j === y) && workingGrid[i][j]) {
                            
                            if(workingGrid[i][j].open === false) {
                                toOpen = [...toOpen, {x: i, y: j}]
                            }

                        }
                    }
                }
            }
        }
    }

    return workingGrid;
}

export default Minefield