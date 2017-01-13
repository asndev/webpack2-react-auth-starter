import {browserHistory as history} from 'react-router';
import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {firebaseAuth} from 'store/firebase';
import {authActions} from './actions';

function* login(action) {
  const {authProvider} = action.payload;

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

function* watchLogin() {
  // Take every LoginRequest action
  yield takeLatest(authActions.LOGIN_REQUESTED, login);
}

function* watchLogout() {
  // Take every logout action
  yield takeLatest(authActions.LOGOUT, logout);
}

export const authSagas = [
  fork(watchLogin),
  fork(watchLogout)
];
