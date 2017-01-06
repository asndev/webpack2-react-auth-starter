import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './router';
import 'assets/style.css';

const App = () => {
  return (
    <Routes />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
