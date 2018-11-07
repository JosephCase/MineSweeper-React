export const getGrid = state => state.grid;

export const getSettings = state => state.settings;
export const getMineChance = state => getSettings(state).mineChance;
export const getSize = state => getSettings(state).size;

export const getPlayDimensions = state => state.playDimensions;

export const getGameStatus = state => state.gameStatus;