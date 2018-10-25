import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Cell from './';

storiesOf('Cell', module)

    .add('when default', () => (
        <Cell 
            open={false}
            marked={false}
            clickHandler={action('clicked')}
        />
    ))
    .add('when open', () => (
        <Cell 
            open={true}
            clickHandler={action('clicked')}
        />
    ))
    .add('when marked', () => (
        <Cell 
            open={false}
            marked={true}
            clickHandler={action('clicked')}
        />
    ))
    .add('when open with adjacent mines', () => (
            <Cell 
                open={true}
                adjacentMines={1}
                clickHandler={action('clicked')}
            />
    ))
    .add('when open with mine', () => (
        <Cell 
            open={true}
            hasMine={true}
            clickHandler={action('clicked')}
        />
    ))
    .add('when mistakenly marked', () => (
        <Cell 
            marked={true}
            mistaken={true}
        />
    ))



