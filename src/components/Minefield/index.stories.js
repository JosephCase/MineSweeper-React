import React from 'react';

import { storiesOf } from '@storybook/react';

import { Minefield } from './';

storiesOf('Minefield', module)

  .add('at game start', () => {
    const mineField = [
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 5,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 6,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ]
    ]
    return <Minefield grid={mineField} />
  })
  .add('when game is complete', () => {
    const mineField = [
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ]
    ]
    return <Minefield grid={mineField} />
  })
  .add('when has been lost', () => {
    const mineField = [
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": false,
          "marked": true,
          "mistaken": true
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 4,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 3,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 3,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 5,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 0,
          "open": false,
          "marked": true,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 2,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ],
      [
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 0,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": true,
          "adjacentMines": 1,
          "open": true,
          "marked": false,
          "mistaken": false,
          "exploded": true
        },
        {
          "hasMine": false,
          "adjacentMines": 2,
          "open": false,
          "marked": false,
          "mistaken": false
        },
        {
          "hasMine": false,
          "adjacentMines": 1,
          "open": false,
          "marked": false,
          "mistaken": false
        }
      ]
    ]
    return <Minefield grid={mineField} />
  })