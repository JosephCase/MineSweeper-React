import React from 'react';
import PropTypes from 'prop-types';
import { Option, StyledDifficultyControl } from './styledComponents';
import { connect } from 'react-redux';
import { setMineChance } from '../../redux/actions';
import { getMineChance } from '../../redux/selectors';
import config from '../../config';

const { difficulties } = config;

export const DifficultyControl = ({ mineChance, setMineChance }) => (
    <StyledDifficultyControl vertical data-cy='DifficultyControl'>
        {
            difficulties.map(difficulty => {
                const isSelectedDifficulty = mineChance === difficulty.mineChance;
                return (
                    <Option
                        data-cy={difficulty.text}
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

const mapStateToProps = state => {
    return {
        mineChance: getMineChance(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMineChance: (mineChance) => {
            dispatch(setMineChance(mineChance));
        }
    }
}

DifficultyControl.defaultProps = {
    setMineChance: () => { },
    mineChance: difficulties[0].mineChance
}

DifficultyControl.propTypes = {
    setMineChance: PropTypes.func,
    mineChance: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyControl);
