const config = {
    cellSize: 34,
    breakPoints: {
        b1000: '999px'
    },
    gameStatuses: {
        PLAYING: 'PLAYING',
        WON: 'WON',
        LOST: 'LOST'
    },
    difficulties: [
        { mineChance: 0.05, text: 'Easy-peasy' },
        { mineChance: 0.1, text: 'Easy' },
        { mineChance: 0.15, text: 'Normal' },
        { mineChance: 0.2, text: 'Hard' },
        { mineChance: 0.25, text: 'Super Hard' },
    ],
    defaultSize: 10
}

export default config;