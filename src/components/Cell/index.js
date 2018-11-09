import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell } from './styledComponents';
import config from '../../config';

const getDisplayValue = ({ adjacentMines = 0, hasMine, open, marked }) => {

    if (open && hasMine) {
        return 'x';
    }
    if (open && adjacentMines === 0) {
        return '';
    }
    if (open) {
        return adjacentMines;
    }

    if (!open && marked) {
        return 'o';
    }

    if (!open) {
        return ''
    }

}

const clickHandler = ({ marked, onClick }) => {

    // stop left click when the cell is marked
    if (marked) {
        return;
    }

    onClick();
}
const rightClickHandler = ({ e, onRightClick }) => {
    e.preventDefault();
    onRightClick();
}

const Cell = (props) => {

    const { cellSize } = config;

    const {
        adjacentMines,
        hasMine,
        open,
        marked,
        mistaken,
        exploded,
        onClick,
        onRightClick
    } = props;

    const displayVal = getDisplayValue({ adjacentMines, hasMine, open, marked });

    return (
        <StyledCell
            open={open}
            mine={hasMine}
            marked={marked}
            mistaken={mistaken}
            exploded={exploded}
            cellSize={cellSize}
            onClick={() => clickHandler({ marked, onClick })}
            onContextMenu={(e) => rightClickHandler({ e, onRightClick })}
        >{displayVal}</StyledCell>
    )
}

Cell.defaultProps = {
    adjacentMines: 0,
    hasMine: false,
    open: false,
    marked: false,
    mistaken: false,
    exploded: false,
    onClick: () => { },
    onRightClick: (e) => {
        e.preventDefault();
    }
}

Cell.propTypes = {
    adjacentMines: PropTypes.number,
    hasMine: PropTypes.bool,
    open: PropTypes.bool,
    marked: PropTypes.bool,
    mistaken: PropTypes.bool,
    exploded: PropTypes.bool,
    onClick: PropTypes.func,
    onRightClick: PropTypes.func
}

export default Cell