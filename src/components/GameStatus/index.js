import React from 'react';
import { connect } from 'react-redux';
import { StyledGameStatus } from './styledComponents';
import { createGrid } from '../../actions';
import { getGameStatus } from '../../selectors';

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

const mapStateToProps = (state) => ({
    gameStatus: getGameStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
    replay: () => dispatch(createGrid())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameStatus);