import React, { Component } from 'react';
import cellStyles from './style.css';


const calculateDisplayValue = ({adjacentMines = 0, hasMine, open, marked}) => {
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
const calculateClass = ({open = false, hasMine, marked, mistaken, exploded}) => {
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
const clickHandler = ({disableClick, marked, onClick}) => {

    // cancel the click event if it has been disabled
    if (disableClick || marked) {
        return;
    }

    onClick();
}
const rightClickHandler = ({e, disableClick, onRightClick}) => {
    e.preventDefault();
    if (disableClick) {
        return;
    }
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
    return (
        <p
            className={calculateClass({open, hasMine, marked, mistaken, exploded})}
            onClick={() => clickHandler({disableClick, marked, onClick})}
            onContextMenu={(e) => rightClickHandler({e, disableClick, onRightClick})}
        >{displayVal}</p>
    )
}

export default Cell