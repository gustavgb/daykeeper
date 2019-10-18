/* global window:false */

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import reducer from 'features/app/reducer'

export const history = createBrowserHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  () => next => action => {
    if (action.type === '@@router/LOCATION_CHANGE') {
      window.scrollTo(0, 0)
    }
    next(action)
  }
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  reducer(history),
  {},
  composedEnhancers
)

window.store = store

export default store
