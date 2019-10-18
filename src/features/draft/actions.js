export const init = (log) => (dispatch) => {
  const draft = {
    content: '',
    date: new Date(Date.now()),
    tags: '',
    name: '',
    ...log,
  };

  dispatch({
    type: 'DRAFT_INIT',
    payload: {
      draft,
    },
  });
};

export const setTags = (tags) => ({
  type: 'DRAFT_SET_TAGS',
  payload: {
    tags,
  },
});

export const setDate = (date) => ({
  type: 'DRAFT_SET_DATE',
  payload: {
    date,
  },
});

export const setContent = (content) => ({
  type: 'DRAFT_SET_CONTENT',
  payload: {
    content,
  },
});

export const clear = () => ({
  type: 'DRAFT_CLEAR',
});
