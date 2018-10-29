import React, { PureComponent } from 'react'
import Minefield from '../Minefield'
import DifficultyControl from '../DifficultyControl';
import matrixHelper from '../../helpers/matrixHelper'

const intitialCellState = {
    hasMine: false,
    adjacentMines: 0,
    open: false,
    marked: false,
    mistaken: false
}

class Minesweeper extends PureComponent {

    state = {
        settings: this.props.settings,
        grid: this.createGrid(this.props.settings),
        status: 'PLAYING'
    }

    createGrid({ size, mineChance }) {
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

        return this.populateAdjacentMineCounts(grid)

    }

    populateAdjacentMineCounts(grid) {
        return matrixHelper.map(grid, (cell, x, y) => (
            Object.assign(cell, {
                adjacentMines: this.getAdjacentCellsCount(grid, x, y)
            })
        ))
    }

    getAdjacentCellsCount(grid, x, y) {
        let mineCount = 0;
        matrixHelper.forAdjacent(grid, x, y, (cell) => {
            if (cell.hasMine) {
                mineCount++;
            }
        })
        return mineCount;
    }



    setDifficulty = (mineChance) => {

        
        this.setState(prevState => {

            const newSettings = { ...prevState.settings, mineChance }

            return {
                settings: newSettings,
                grid: this.createGrid(newSettings),
                status: 'PLAYING'
            }

        })

    }

    updateGrid = (grid) => {
        this.setState(() => ({ grid }))
    }

    updateStatus = (status) => {
        this.setState(() => ({ status }))
    }

    render() {
        return (
            <div>
                <Minefield
                    grid={this.state.grid}
                    updateGrid={this.updateGrid}
                    status={this.state.status}
                    updateStatus={this.updateStatus}
                />
                <DifficultyControl
                    mineChance={this.state.settings.mineChance}
                    selectDifficulty={this.setDifficulty}
                />
            </div>
        )
    }
}

export default Minesweeper;