import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../StyledCompontents/Floater';
import { Option, StyledDifficultyControl } from './styledComponents';
import { connect } from 'react-redux';
import { setMineChance } from '../../actions';

const difficulties = [
    { mineChance: 0.25, text: 'Super hard' },
    { mineChance: 0.2, text: 'Hard' },
    { mineChance: 0.15, text: 'Normal' },
    { mineChance: 0.1, text: 'Easy' },
    { mineChance: 0.05, text: 'Super easy' },
]

const DifficultyControl = ({ mineChance, setMineChance }) => (
    <StyledDifficultyControl vertical>
        {
            difficulties.map(difficulty => {
                const isSelectedDifficulty = mineChance === difficulty.mineChance;
                return (
                    <Option 
                        key={difficulty.mineChance}
                        onClick={() => setMineChance(difficulty.mineChance)}
                        selected={isSelectedDifficulty}
                    >
                        {difficulty.text}
                    </Option>
                )
            })
        }
    </StyledDifficultyControl>
)

const mapStateToProps = ({ settings }) => {
    return {
        mineChance: settings.mineChance
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMineChance: (mineChance, size) => {
            dispatch(setMineChance(mineChance));
        }
    }
}

DifficultyControl.defaultProps = {
    setMineChance: () => {}
}

DifficultyControl.propTypes = {
    setMineChance: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyControl);
