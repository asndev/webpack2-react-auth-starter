import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './router';

const App = () => {
  return (
    <Routes />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
