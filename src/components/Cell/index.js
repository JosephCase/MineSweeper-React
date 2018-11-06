import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell } from './styledComponents';

const calculateDisplayValue = ({ adjacentMines = 0, hasMine, open, marked }) => {
    if (open) {
        if (hasMine) {
            return 'x';
        }
        if (adjacentMines === 0) {
            return '';
        }
        return adjacentMines;
    } else {
        if (marked) {
            return 'o'
        }
        return '';
    }
}

const clickHandler = ({ marked, onClick }) => {

    // cancel the click event if it has been disabled
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

    const displayVal = calculateDisplayValue({ adjacentMines, hasMine, open, marked });

    return (
        <StyledCell
            onClick={() => clickHandler({ marked, onClick })}
            onContextMenu={(e) => rightClickHandler({ e, onRightClick })}
            open={open}
            mine={hasMine}
            marked={marked}
            mistaken={mistaken}
            exploded={exploded}
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