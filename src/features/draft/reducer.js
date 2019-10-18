const defaultState = {
  name: '',
  content: '',
  date: '',
  tags: '',
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case 'DRAFT_SET_CONTENT':
      return {
        ...state,
        content: action.payload.content,
      };
    case 'DRAFT_INIT':
      return {
        ...state,
        ...action.payload.draft,
      };
    case 'DRAFT_SET_DATE':
      return {
        ...state,
        date: action.payload.date,
      };
    case 'DRAFT_SET_TAGS':
      return {
        ...state,
        tags: action.payload.tags,
      };
    case 'DRAFT_CLEAR':
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};

export default reducer;
