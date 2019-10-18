import { getCurrentDate } from 'utils/date';

const getLogFiles = window.getLogFiles;
const setLogFiles = window.setLogFiles;

export const loadLogs = () => async (dispatch) => {
  const promise = () => new Promise((res, rej) => {
    try {
      const result = getLogFiles();

      if (result.status === 'success') {
        res(result.logs);
      } else {
        rej(result.error);
      }
    } catch (e) {
      rej(e);
    }
  });

  dispatch({
    type: 'FETCH_TIMELINE_LOGS',
  });

  promise()
  .then(res => dispatch({
    type: 'RESOLVE_TIMELINE_LOGS',
    payload: {
      logs: res,
    },
  }))
  .catch(err => dispatch({
    type: 'FAILED_TIMELINE_LOGS',
    payload: {
      error: err,
    },
  }));
};

const mapLog = (log) => ({
  content: log.content,
  date: log.date,
  added: log.added,
  name: log.name,
  tags: log.tags,
});

export const saveLogs = () => async (dispatch, getState) => {
  const { logs } = getState().timeline;

  const mapped = logs.map(log => mapLog(log));

  console.log('saving logs', mapped);

  const promise = () => new Promise((res, rej) => {
    try {
      const result = setLogFiles(mapped);

      if (result.status === 'success') {
        console.log('resolving saved logs');
        res();
      } else {
        rej(result.error);
      }
    } catch (e) {
      rej(e);
    }
  });

  dispatch({
    type: 'SAVE_TIMELINE_SAVE_LOGS',
  });

  promise()
  .then(() => setTimeout(() => dispatch({
    type: 'RESOLVE_TIMELINE_SAVE_LOGS',
  }), 400))
  .catch(err => dispatch({
    type: 'FAILED_TIMELINE_SAVE_LOGS',
    payload: {
      error: err,
    },
  }));
};

export const addLog = ({ onAdded, draft = {} }) => (dispatch) => {
  const log = {
    name: Date.now(),
    content: '',
    date: getCurrentDate(),
    ...draft,
  };

  if (typeof onAdded === 'function') {
    onAdded(log);
  }

  dispatch({
    type: 'TIMELINE_ADD_LOG',
    payload: {
      log,
    },
  });
};

export const deleteLog = (logName) => ({
  type: 'TIMELINE_DELETE_LOG',
  payload: {
    logName,
  },
});

export const changeLog = (draft) => ({
  type: 'TIMELINE_CHANGE_LOG',
  payload: {
    draft,
  },
});

export const saveDraft = (draft) => (dispatch) => {
  dispatch(changeLog(draft));
  dispatch(saveLogs());
};
