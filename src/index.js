import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const handleClick = () => {
    System.import('src/image').then((module) => {
      module.default();
    });
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
