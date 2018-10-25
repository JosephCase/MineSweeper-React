import React, { Component } from 'react';

class Cell extends Component {

    state = {
        clicked: false
    }
    
    defaultStyle = {
        margin: 0,
        width: '32px',
        height: '32px',
        lineHeight: '32px',
        textAlign: 'center',
        border: '1px solid black',
        fontFamily: 'arial, sans-serif',
        background: 'lightgrey',
        cursor: 'pointer',
        userSelect: 'none',
        color: 'black'
    }

    calculateDisplayValue(adjacentMines, hasMine, open, marked) {
        if(open) {
            if(hasMine) {
                return 'x';
            }
            if(adjacentMines === 0) {
                return '';
            }
            return adjacentMines;
        } else {
            if(marked) {
                return 'o'
            }
            return '';
        }
    }

    calculateStyle() {
        const {open, hasMine, marked, mistaken} = this.props;
        if(open) {
            if(hasMine) {
                if(this.state.clicked) {
                    return Object.assign({}, this.defaultStyle, { background: 'red' });
                }
                return Object.assign({}, this.defaultStyle, { background: 'grey' });
            }
            return Object.assign({}, this.defaultStyle, { background: 'white' });
        } else {
            if(marked) {
                if(!mistaken) {
                    return Object.assign({}, this.defaultStyle, { background: 'black', color: 'white' });
                } else {
                    return Object.assign({}, this.defaultStyle, { background: 'black', color: 'red' });
                }
            }
            return this.defaultStyle;
        }
        
    }

    clickHandler = () => {

        // cancel the click event if it has been disabled
        if(this.props.disableClick || this.props.marked) {
            return;
        }

        this.setState(() => ({
            clicked: true
        }))
        this.props.clickHandler();
    }

    rightClickHandler = (e) => {
        e.preventDefault();
        if(this.props.disableClick) {
            return;
        }
        this.props.rightClickHandler();
    }

    render() {
        const { adjacentMines = 0, hasMine, open = false, marked } = this.props;
        const displayVal = this.calculateDisplayValue(adjacentMines, hasMine, open, marked);
        return (
            <p 
                style={this.calculateStyle()}
                onClick={this.clickHandler}
                onContextMenu={this.rightClickHandler}
            >{displayVal}</p>
        )
    }
}




export default Cell