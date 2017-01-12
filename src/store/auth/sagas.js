import {browserHistory as history} from 'react-router';
import {call, fork, put, take} from 'redux-saga/effects';
import {firebaseAuth} from 'store/firebase';
import {authActions} from './actions';

function* login(authProvider) {
  try {
    const authData = yield call(
      [firebaseAuth, firebaseAuth.signInWithPopup],
      authProvider
    );
    yield put(authActions.loginSucceeded(authData.user));
    yield history.push('/');
  } catch (error) {
    yield put(authActions.loginFailed(error));
  }
}

function* logout() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(authActions.logoutSucceeded());
    yield history.replace('/login');
  } catch (error) {
    yield put(authActions.logoutFailed(error));
  }
}

/* eslint-disable no-constant-condition */
function* watchLogin() {
  // Take every LoginRequest action
  while (true) {
    let {payload} = yield take(authActions.LOGIN_REQUESTED);
    // and yield a signin action with the given payload
    yield fork(login, payload.authProvider);
  }
}

function* watchLogout() {
  // Take every logout action
  while (true) {
    yield take(authActions.LOGOUT);
    // and yield a signout
    yield fork(logout);
  }
}

export const authSagas = [
  fork(watchLogin),
  fork(watchLogout)
];
