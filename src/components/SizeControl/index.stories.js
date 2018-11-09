import React from 'react';

import { storiesOf } from '@storybook/react';

import { SizeControl } from './';

storiesOf('SizeControl', module)

    .add('with size 5', () => (
        <SizeControl
            size={5}
            playDimensions={{ width: 500, height: 500 }}
        />
    ))

    .add('with size 10', () => (
        <SizeControl
            size={10}
            playDimensions={{ width: 500, height: 500 }}
        />
    ))