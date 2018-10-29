import React from 'react';
import Cell from '../Cell';
import styles from './style.css';

const difficulties = [
    { mineChance: 0.25, text: 'Super hard' },
    { mineChance: 0.2, text: 'Hard' },
    { mineChance: 0.15, text: 'Normal' },
    { mineChance: 0.1, text: 'Easy' },
    { mineChance: 0.05, text: 'Super easy' },
]

const DifficultyControl = ({ mineChance, selectDifficulty }) => (
    <div className={styles.control}>
    {
        difficulties.map(difficulty => {
            const isSelectedDifficulty = mineChance === difficulty.mineChance;
            const clickFunction = !isSelectedDifficulty ? () => selectDifficulty(difficulty.mineChance) : () => { }
                return (
                    <div key={difficulty.mineChance} className={styles.option}>

                        {/* isSelectedDifficulty ?
                            <Cell marked={true} /> : 
                            <Cell open={true} onClick={() => selectDifficulty(difficulty.mineChance)} /> */}

                        <Cell 
                            marked={isSelectedDifficulty} 
                            open={!isSelectedDifficulty}
                            onClick={clickFunction}
                        />

                    <span>{difficulty.text}</span>
                </div>
    )})
}
    </div>
)

export default DifficultyControl;