import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Minefield from '../Minefield'
import DifficultyControl from '../DifficultyControl';
import { createGrid } from './actions';

class Minesweeper extends PureComponent {

    constructor(props) {
        super(props);
        const { createGrid } = props;
        createGrid();
    }

    render() {
        return (
            <div>
                <Minefield />
                <DifficultyControl />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGrid: () => dispatch(createGrid())
    }
}

Minesweeper.defaultProps = {
    createGrid: () => {}
}

Minesweeper.propTypes = {
    createGrid: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Minesweeper);