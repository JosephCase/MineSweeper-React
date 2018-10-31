import React from 'react';
import PropTypes from 'prop-types';
import cellStyles from './style.css';

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
const calculateClass = ({ open = false, hasMine, marked, mistaken, exploded }) => {
    if (open) {
        if (hasMine) {
            if (exploded) {
                return cellStyles.mineClicked;
            }
            return cellStyles.mine;
        }
        return cellStyles.open
    } else if (marked) {
        if (mistaken) {
            return cellStyles.mistaken;
        } else {
            return cellStyles.marked;
        }
    }
    return cellStyles.default;
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
        disableClick,
        onClick,
        onRightClick
    } = props;

    const displayVal = calculateDisplayValue({ adjacentMines, hasMine, open, marked });
    const className = calculateClass({ open, hasMine, marked, mistaken, exploded });

    return (
        <p
            className={className}
            onClick={() => clickHandler({ marked, onClick })}
            onContextMenu={(e) => rightClickHandler({ e, onRightClick })}
        >{displayVal}</p>
    )
}

Cell.defaultProps = {
    adjacentMines: 0,
    hasMine: false,
    open: false,
    marked: false,
    mistaken: false,
    exploded: false,
    disableClick: false,
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
    disableClick: PropTypes.bool,
    onClick: PropTypes.func,
    onRightClick: PropTypes.func
}

export default Cell