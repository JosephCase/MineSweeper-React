export const actionTypes = {
    CREATE_GRID: 'CREATE_GRID',
    SET_GRID: 'SET_GRID',
    SET_GAME_STATUS: 'SET_GAME_STATUS',
    SET_MINE_CHANCE: 'SET_MINE_CHANCE',
} 


export const createGrid = () => (
    {
        type: actionTypes.CREATE_GRID,
    }
)
export const setGrid = (grid) => (
    {
        type: actionTypes.SET_GRID,
        grid
    }
) 
export const setGameStatus = gameStatus => (
    {
        type: actionTypes.SET_GAME_STATUS,
        gameStatus
    }
)
export const setMineChance = mineChance => (
    {
        type: actionTypes.SET_MINE_CHANCE,
        mineChance
    }
)