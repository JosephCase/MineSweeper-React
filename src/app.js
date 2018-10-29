import React from 'react';
import ReactDOM from 'react-dom';

import Minesweeper from './components/Minesweeper';

ReactDOM.render(<Minesweeper settings={{ size: 10, mineChance: 0.1 }} />, document.getElementById('app'));