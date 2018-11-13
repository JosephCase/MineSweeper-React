import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';

import Minesweeper from './components/Minesweeper';
import sagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(sagas);

if (window.Cypress) {
    // only available during E2E tests
    window.store = store;
}

ReactDOM.render(<Provider store={store}><Minesweeper /></Provider>, document.getElementById('app'));