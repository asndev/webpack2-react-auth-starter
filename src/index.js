import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import configureStore from './store';
import Root from './root';

// import Routes from './router';
import 'assets/style.css';

const store = configureStore();
const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root history={browserHistory} store={store} />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

render(Root);

// const App = () => {
//   return (
//     <Routes />
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
