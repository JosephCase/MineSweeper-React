import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import styles from './style.css';
import RevealIterativeWorker from './revealIterative.worker'
import { setGrid, setGameStatus } from '../../actions';

const GAME_STATUSI = {
    WON: 'WON',
    LOST: 'LOST',
    PLAYING: 'PLAYING'
}

class Minefield extends Component {

    worker = new RevealIterativeWorker();

    cellClickHandler(x, y) {

        let grid = [...this.props.grid];

        if (grid[x][y].hasMine) {
            grid[x][y].open = true;
            grid[x][y].exploded = true;
            grid = this.finishGame(false, grid);
            this.props.setGrid(grid);
        } else {
            this.worker.postMessage({ grid: this.props.grid, x, y })
            this.worker.onmessage = (e) => {
                grid = e.data;
                if (this.checkWin(grid) === true) {
                    this.finishGame(true);
                };
                this.props.setGrid(grid);
            }
        }
    }

    cellRightClickHandler(x, y) {
        const newGrid = [...this.props.grid];
        newGrid[x][y].marked = !newGrid[x][y].marked;

        if (this.checkWin(newGrid) === true) {
            this.finishGame(true);
        };

        this.props.setGrid(newGrid);
    }

    checkWin(grid) {

        const win = grid.every(column => column.every(cell => (cell.open || cell.marked)));

        return win;

    }

    finishGame(win, grid) {

        const gameStatus = win ? GAME_STATUSI.WON : GAME_STATUSI.LOST;
        this.props.setGameStatus(gameStatus);

        if (!win) {
            grid = grid.map(column => column.map(cell => {
                if (cell.hasMine && !cell.open && !cell.marked) {
                    cell.open = true;
                }
                if (cell.marked && !cell.hasMine) {
                    cell.mistaken = true;
                }
                return cell;
            }))
        }

        return grid;

    }

    renderColumn(column, i) {

        const { gameStatus } = this.props;
        const clickFunction = (gameStatus === GAME_STATUSI.PLAYING) ? (i, j) => this.cellClickHandler(i, j) : () => { };
        const rightClickFunction = (gameStatus === GAME_STATUSI.PLAYING) ? (i, j) => this.cellRightClickHandler(i, j) : () => { };

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
            <div className={styles.mineField}>
                {grid.map(this.renderColumn, this)}
            </div>
        )
    }
}

const mapStateToProps = ({ grid, gameStatus }) => {
    return {
        grid,
        gameStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGrid: (grid) => dispatch(setGrid(grid)),
        setGameStatus: (status) => dispatch(setGameStatus(status))
    }
}

Minefield.defaultProps = {
    grid: [[]],
    gameStatus: 'PLAYING',
    setGrid: () => {},
    setGameStatus: () => {}
}

Minefield.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.array),
    gameStatus: PropTypes.oneOf(['PLAYING', 'WON', 'LOST']),
    setGrid: PropTypes.func,
    setGameStatus: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Minefield);