import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk';
import { middleware } from '../Navigator';


const store = createStore(
  reducers,
  applyMiddleware(thunk),
  applyMiddleware(middleware)
  )

export default store;
