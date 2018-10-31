import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';
import styles from './style.css';
import { connect } from 'react-redux';
import { setMineChance } from '../Minesweeper/actions';

const difficulties = [
    { mineChance: 0.25, text: 'Super hard' },
    { mineChance: 0.2, text: 'Hard' },
    { mineChance: 0.15, text: 'Normal' },
    { mineChance: 0.1, text: 'Easy' },
    { mineChance: 0.05, text: 'Super easy' },
]

const DifficultyControl = ({ mineChance, setMineChance }) => (
    <div className={styles.control}>
        {
            difficulties.map(difficulty => {
                const isSelectedDifficulty = mineChance === difficulty.mineChance;
                return (
                    <div key={difficulty.mineChance} className={styles.option}>
                        <Cell
                            marked={isSelectedDifficulty}
                            open={!isSelectedDifficulty}
                            onClick={() => setMineChance(difficulty.mineChance)}
                        />
                        <span>{difficulty.text}</span>
                    </div>
                )
            })
        }
    </div>
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
