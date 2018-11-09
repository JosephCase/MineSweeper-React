import React from 'react';

import { storiesOf } from '@storybook/react';

import { DifficultyControl } from './';

import config from '../../config';
import { boolean, select } from '@storybook/addon-knobs';

const difficulties = {};

config.difficulties.forEach(difficulty => {
    difficulties[difficulty.text] = difficulty.mineChance
});

storiesOf('Difficulty Control', module)

    .add('playground', () => (
        <DifficultyControl
            mineChance={select('Difficulty', difficulties)}
        />
    ))