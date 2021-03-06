import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import RevealIterativeWorker from './revealIterative.worker'
import { setGrid } from '../../redux/actions';
import { StyledMineField } from './styledComponents';
import { getGrid, getGameStatus } from '../../redux/selectors'
import config from '../../config';

const { gameStatuses } = config;

const revealIterativeWorker = new RevealIterativeWorker();

export class Minefield extends Component {

    cellClickHandler(x, y) {

        let grid = [...this.props.grid];

        if (grid[x][y].hasMine) {
            grid[x][y] = { ...grid[x][y], open: true, exploded: true};
            grid = this.getGameLostGrid(grid);
            this.props.setGrid(grid);
        } else {
            revealIterativeWorker.postMessage({ grid: this.props.grid, x, y })
            revealIterativeWorker.onmessage = (e) => {
                grid = e.data;
                this.props.setGrid(grid);
            }
        }
    }

    cellRightClickHandler(x, y) {
        const grid = [...this.props.grid];
        grid[x][y].marked = !grid[x][y].marked;
        this.props.setGrid(grid);
    }

    getGameLostGrid(grid) {

        const newGrid = grid.map(column => column.map(cell => {
            if (cell.hasMine && !cell.open && !cell.marked) {
                cell.open = true;
            }
            if (cell.marked && !cell.hasMine) {
                cell.mistaken = true;
            }
            return cell;
        }))

        return newGrid;

    }

    renderColumn(column, i) {

        const { gameStatus } = this.props;
        const clickFunction = (gameStatus === gameStatuses.PLAYING) ? (i, j) => this.cellClickHandler(i, j) : () => { };
        const rightClickFunction = (gameStatus === gameStatuses.PLAYING) ? (i, j) => this.cellRightClickHandler(i, j) : () => { };

        return (
            <div key={i}>
                {
                    column.map((cell, j) => (
                        <Cell
                            key={j}
                            {...cell}
                            onClick={() => clickFunction(i,j)}
                            onRightClick={() => rightClickFunction(i, j)}
                        />
                    ))
                }
            </div>
        )
    }
    render() {
        const { grid } = this.props;
        return (
            <StyledMineField data-cy="MineField">
                {grid.map(this.renderColumn, this)}
            </StyledMineField>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        grid: getGrid(state),
        gameStatus: getGameStatus(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGrid: (grid) => dispatch(setGrid(grid))
    }
}

Minefield.defaultProps = {
    grid: [[]],
    gameStatus: gameStatuses.PLAYING,
    setGrid: () => {}
}

Minefield.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.array),
    gameStatus: PropTypes.oneOf([gameStatuses.PLAYING, gameStatuses.WON, gameStatuses.LOST]),
    setGrid: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Minefield);