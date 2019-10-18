import { connect } from 'react-redux';
import {
  loadLogs,
  deleteLog,
  saveLogs,
  addLog,
} from 'features/timeline/actions';
import { init as initDraft } from 'features/draft/actions';
import dateformat from 'dateformat';
import Timeline from 'features/timeline/screens/timeline';
import { sortByDate } from 'features/timeline/selectors';

const mapStateToProps = (state) => ({
  logs: sortByDate(state),
  status: state.timeline.status,
  draftName: state.draft.name,
  lastUpdateTime: state.timeline.lastUpdateTime && dateformat(state.timeline.lastUpdateTime, 'HH:MM'),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(loadLogs()),
  onEdit: (log) => dispatch(initDraft(log)),
  onDelete: (logName) => {
    dispatch(deleteLog(logName));
    dispatch(saveLogs());
  },
  onAdd: () => {
    dispatch(addLog({ onAdded: (log) => dispatch(initDraft(log)) }));
    dispatch(saveLogs());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
