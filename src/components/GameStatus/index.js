import React from 'react';
import { connect } from 'react-redux';
import { StyledGameStatus } from './styledComponents';
import { createGrid } from '../../redux/actions';
import { getGameStatus } from '../../redux/selectors';
import PropTypes from 'prop-types';
import config from '../../config';

const { gameStatuses } = config;

export const GameStatus = ({ gameStatus, replay }) => {
    return (
        <StyledGameStatus data-cy='GameStatus' hidden={gameStatus === gameStatuses.PLAYING}>
            <h2>
                {gameStatus}
            </h2>
            <p>-</p>
            <p onClick={replay}>Replay?</p>
        </StyledGameStatus>
    )
}

GameStatus.defaultProps = {
    gameStatus: gameStatuses.PLAYING,
    replay: () => { }
}

GameStatus.propTypes = {
    gameStatus: PropTypes.oneOf([gameStatuses.PLAYING, gameStatuses.WON, gameStatuses.LOST]),
    replay: PropTypes.func
}

const mapStateToProps = (state) => ({
    gameStatus: getGameStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
    replay: () => dispatch(createGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameStatus);