import { connect } from 'react-redux';
import Draft from 'features/draft/screen';

import { setContent, setTags, setDate, clear } from 'features/draft/actions';
import { saveDraft } from 'features/timeline/actions';

const mapStateToProps = (state) => ({
  draft: state.draft,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeContent: (content) => dispatch(setContent(content)),
  onChangeTags: (tags) => dispatch(setTags(tags)),
  onChangeDate: (date) => dispatch(setDate(date)),
  onSave: (draft) => {
    dispatch(saveDraft(draft));
    dispatch(clear());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
