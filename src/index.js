import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { initAuth } from './store/auth';
import { configureStore } from './store';
import Root from './views/root';

import './views/assets/style.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(
    <Root history={history} store={store} />,
    rootElement
  );
}

initAuth(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.error(error));
