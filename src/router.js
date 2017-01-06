import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from 'components/Home';
import Dashboard from 'components/Dashboard';

const routes = {
  component: Home,
  path: '/',
  indexRoute: { component: Dashboard },
  childRoutes: [{
    path: 'image',
    getComponent(location, cb) {
      System.import('src/components/Image')
        .then((module) => {
          cb(null, module.default);
        });
    }
  }]
}

const Routes = () => {
  return (
    <Router history={hashHistory} routes={routes} />
  );
};

export default Routes;
