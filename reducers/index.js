import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation'

const reducers = combineReducers({
  // ... other reducers ...
  auth,
  navigation
})

export default reducers;
