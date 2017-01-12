import {firebaseAuth} from 'store/firebase';
import {authActions} from './actions';

export const initAuth = (dispatch) => {
  return new Promise((resolve, reject) => {
    firebaseAuth.onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(authActions.loginSucceeded(authUser));
        }
        resolve();
      },
      error => reject(error)
    );
  });
};
