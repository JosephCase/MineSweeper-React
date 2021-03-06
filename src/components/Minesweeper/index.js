import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Minefield from '../Minefield'
import DifficultyControl from '../DifficultyControl';
import SizeControl from '../SizeControl';
import { createGrid } from '../../redux/actions';
import { StyledMineSweeper, Wrapper } from './styledComponents';
import GameSpace from '../GameSpace';
import GlobalStyle from '../StyledCompontents/GlobalStyle';
import GameStatus from '../GameStatus';

const Minesweeper = ({ createGrid }) => {

    createGrid();

    return (
        <StyledMineSweeper vertical>
            <Wrapper>
                <GameSpace>
                    <Minefield />
                    <GameStatus />
                </GameSpace>
                <DifficultyControl />
            </Wrapper>
            <SizeControl />
            <GlobalStyle />
        </StyledMineSweeper>
    )

}

Minesweeper.defaultProps = {
    createGrid: () => { }
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