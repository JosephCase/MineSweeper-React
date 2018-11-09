import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import GlobalStyle from '../src/components/StyledCompontents/GlobalStyle';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
setAddon(JSXAddon);

addDecorator(withKnobs)
addDecorator(story => (
  <div>
    {story()}
    <GlobalStyle />
  </div>
))

configure(loadStories, module);