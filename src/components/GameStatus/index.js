import React from 'react';
import { connect } from 'react-redux';
import { StyledGameStatus } from './styledComponents';
import { createGrid } from '../../actions';
import { getGameStatus } from '../../selectors';
import PropTypes from 'prop-types';

const GameStatus = ({gameStatus, replay}) => {
    return (
        <StyledGameStatus hidden={gameStatus === 'PLAYING'}>
            <h2>
                {gameStatus}
            </h2>
            <p>-</p>
            <p onClick={replay}>Replay?</p>
        </StyledGameStatus>
    )
}

GameStatus.defaultProps = {
    gameStatus: 'PLAYING',
    replay: () => {}
}

GameStatus.propTypes = {
    gameStatus: PropTypes.oneOf(['PLAYING', 'WON', 'LOST']),
    replay: PropTypes.func
}

const mapStateToProps = (state) => ({
    gameStatus: getGameStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
    replay: () => dispatch(createGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameStatus);