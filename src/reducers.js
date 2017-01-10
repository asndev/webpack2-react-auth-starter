import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth';


export default combineReducers({
  auth: authReducer,
  routing: routerReducer
});
