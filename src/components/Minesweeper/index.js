import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Minefield from '../Minefield'
import DifficultyControl from '../DifficultyControl';
import SizeControl from '../SizeControl';
import { createGrid } from '../../actions';

const Minesweeper = (props) => {

    const { createGrid } = props;
    createGrid();

    return (
        <div>
            <Minefield />
            <DifficultyControl />
            <SizeControl />
        </div>
    )
    
}

Minesweeper.defaultProps = {
    createGrid: () => {}
}

Minesweeper.propTypes = {
    createGrid: PropTypes.func
}

const mapDispatchToProps = dispatch => {
    return {
        createGrid: () => dispatch(createGrid())
    }
}
export default connect(null, mapDispatchToProps)(Minesweeper);