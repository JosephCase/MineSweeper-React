export const getGrid = state => state.grid;

export const getSettings = state => state.settings;
export const getMineChance = state => getSettings(state).mineChance;
export const getSize = state => getSettings(state).size;

export const getPlayDimensions = state => state.playDimensions;

export const getGameStatus = state => {
    const grid = getGrid(state);
    if(grid.every(column => column.every(cell => (cell.open || cell.marked)))) {
        return 'WON';
    }
    if(grid.some(column => column.some(cell => (cell.open && cell.hasMine)))) {
        return 'LOST';
    }
    return 'PLAYING';
}