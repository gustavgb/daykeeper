const defaultState = {
  logs: [],
  status: 'ready',
  error: null,
  draft: '',
  lastUpdateTime: null
}

const fillLog = (log) => ({
  ...log,
  date: log.date || new Date(parseInt(log.name, 10)),
  tags: log.tags || '',
  added: log.added || log.date || new Date(parseInt(log.name, 10))
})

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case 'FETCH_TIMELINE_LOGS':
      return {
        ...state,
        status: 'fetching',
        lastUpdateTime: Date.now()
      }
    case 'FAILED_TIMELINE_LOGS':
      return {
        ...state,
        status: 'failed',
        error: action.payload.error,
        lastUpdateTime: Date.now()
      }
    case 'RESOLVE_TIMELINE_LOGS':
      return {
        ...state,
        logs: action.payload.logs.map(log => fillLog(log)),
        status: 'fetched',
        error: null,
        lastUpdateTime: Date.now()
      }
    case 'SAVE_TIMELINE_SAVE_LOGS':
      return {
        ...state,
        status: 'saving',
        lastUpdateTime: Date.now()
      }
    case 'RESOLVE_TIMELINE_SAVE_LOGS':
      return {
        ...state,
        status: 'saved',
        lastUpdateTime: Date.now()
      }
    case 'FAILED_TIMELINE_SAVE_LOGS':
      return {
        ...state,
        status: 'failed',
        error: action.payload.error,
        lastUpdateTime: Date.now()
      }
    case 'TIMELINE_ADD_LOG':
      return {
        ...state,
        logs: [
          action.payload.log,
          ...state.logs
        ],
        status: 'not-saved'
      }
    case 'TIMELINE_DELETE_LOG':
      return {
        ...state,
        logs: state.logs.filter(log => log.name !== action.payload.logName),
        status: 'not-saved'
      }
    case 'TIMELINE_CHANGE_LOG': {
      const log = state.logs.filter(l => l.name === action.payload.draft.name)[0]
      const index = state.logs.indexOf(log)

      const logs = [...state.logs]
      logs[index] = {
        ...logs[index],
        content: action.payload.draft.content,
        tags: action.payload.draft.tags,
        date: action.payload.draft.date
      }

      return {
        ...state,
        logs,
        status: 'not-saved'
      }
    }
    case 'DRAFT_SET_LOGNAME':
    case 'DRAFT_SET_DATE':
    case 'DRAFT_SET_TAGS':
    case 'DRAFT_SET_CONTENT':
      return {
        ...state,
        status: 'not-saved'
      }
    default:
      return state
  }
}

export default reducer
