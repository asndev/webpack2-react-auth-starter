import {authSagas} from './auth';

// Register all sagas which will be 'run' within the redux store
export default function* sagas() {
  yield [...authSagas];
}
