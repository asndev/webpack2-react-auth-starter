import { isAuthenticated } from 'store/auth';
import App from './app';
import SignInPage from './components/sign-in';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  TASKS: '/'
};

const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.TASKS);
    }
  };
};

export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          getComponent(location, cb) {
            System.import('./components/tasks')
              .then(module => cb(null, module.default));
          },
          onEnter: requireAuth(getState)
        }
      },
      {
        path: paths.SIGN_IN,
        component: SignInPage,
        onEnter: requireUnauth(getState)
      }
    ]
  };
};
