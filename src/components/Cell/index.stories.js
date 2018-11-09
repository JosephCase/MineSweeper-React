import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import Cell from './';

const stories = storiesOf('Cell', module);


    stories.addWithJSX('playground', () => (
        <Cell 
            open={boolean('Open', false)}
            marked={boolean('Marked', false)}
            adjacentMines={select('adjacentMines', {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
            })}
            hasMine={boolean('hasMine', false)}
            exploded={boolean('exploded', false)}
            mistaken={boolean('mistaken', false)}
        />
    ))