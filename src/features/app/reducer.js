import { combineReducers } from 'redux'
import timelineReducer from 'features/timeline/reducer'
import draftReducer from 'features/draft/reducer'
import { connectRouter } from 'connected-react-router'

const reducer = (history) => combineReducers({
  router: connectRouter(history),
  timeline: timelineReducer,
  draft: draftReducer
})

export default reducer
