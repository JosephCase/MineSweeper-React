import React from 'react';

import { storiesOf } from '@storybook/react';

import { GameStatus } from './';

import config from '../../config';

storiesOf('GameStatus', module)

    .add('with won status', () => (
        <GameStatus
            gameStatus={config.gameStatuses.WON}
        />
    ))

    .add('with lost status', () => (
        <GameStatus
            gameStatus={config.gameStatuses.LOST}
        />
    ))