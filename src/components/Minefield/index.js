import React, { Component } from 'react';
import matrixHelper from '../../helpers/matrixHelper'
import Cell from '../Cell';
import path from 'path';

const GAME_STATUSI = {
    WON     :   'WON',
    LOST    :   'LOST',
    PLAYING :   'PLAYING'
}

class Minefield extends Component {

    static defaultProps = {
        size: 10,
        mineChance: 0.1
    }

    state = {
        grid: this.props.startingGrid,
        gameStatus: GAME_STATUSI.PLAYING
    }

    workingGrid = null
    
    cellClickHandler(x, y) {
        const myWorker = new Worker(path.join('/src/Minefield/', 'worker.js'));
        myWorker.postMessage('Hi');
        myWorker.onmessage = function(e) {
            console.log(e.data);
        }
        this.openCell(x,y);
        this.setState(() => ({
            grid: this.workingGrid
        }))
        this.checkWin();
    }

    cellRightClickHandler(x, y) {
        const newGrid = matrixHelper.map(this.state.grid, (cell, i, j) => {
            if(x === i && y === j) {
                cell.marked = !cell.marked;
            }
            return cell;
        })
        this.setState(() => ({
            grid: newGrid
        }))
    }
    
    openCell(x,y) {
        this.workingGrid = this.state.grid.slice();
        this.workingGrid[x][y].open = true;
        
        if(this.workingGrid[x][y].hasMine) {
            this.finishGame(false);
        } else if (this.workingGrid[x][y].adjacentMines === 0) {
            this.openAdjacentCells(x, y);
        }
    }
    
    
    
    checkWin() {

        let win = true;

        this.forEachCellInGrid((cell) => {
            win = (cell.open || cell.marked) ? win : false
        })

        if (win) {
            this.finishGame(true);
        }
        
    }

    finishGame(win) {
        this.setState(() => ({
            gameStatus: win ? GAME_STATUSI.WON : GAME_STATUSI.LOST
        }))
        if(!win) {
            this.workingGrid = matrixHelper.map(this.workingGrid, (cell) => {
                if(cell.hasMine && !cell.open && !cell.marked) {
                    cell.open = true;
                }
                if(cell.marked && !cell.hasMine) {
                    cell.mistaken = true;
                }
                return cell;
            })
        }
    }

    forEachCellInGrid(fn) {
        this.state.grid.forEach((column, i) => {
            column.forEach(fn)
        })
    }

    openAdjacentCells(x, y) {
        matrixHelper.forAdjacent(this.workingGrid, x, y, (cell, i, j) => {
            if(!cell.open && !cell.marked) {
                this.openCell(i,j);
            }
        })
    }

    renderColumn(column, i) {
        const { gameStatus } = this.state;
        return (
            <div key={i} className='column'>
                {
                    column.map((cell, j) => (
                        <Cell 
                            key={j}
                            {...cell}
                            clickHandler={() => this.cellClickHandler(i,j)}
                            rightClickHandler={() => this.cellRightClickHandler(i,j)}
                            disableClick={gameStatus !== GAME_STATUSI.PLAYING}
                        />
                    ))
                }
            </div>
        )
    }

    render() {
        const { grid } = this.state;
        return (
            <div style={{ display: 'flex', cursor: 'pointer' }}>
                { grid.map(this.renderColumn, this) }
            </div>
        )
    }
}

export default Minefield