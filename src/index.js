import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {initAuth} from './store/auth';
import {configureStore} from './store/store';
import Root from './views/root';

import './views/styles/globals.scss';

const store = configureStore();
const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root
        history={syncHistoryWithStore(browserHistory, store)}
        store={store}
      />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

// if user is still logged in in the browser history, log him back in.
initAuth(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.error(error));
