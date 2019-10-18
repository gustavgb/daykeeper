import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'features/timeline/components/button';
import Buttons from 'features/timeline/components/buttons';
import Timestamp from 'components/timestamp';
import Textarea from 'components/textarea';
import Field from 'components/field';

const Wrapper = styled.div`
  position: relative;
  padding: 10px 20px 10px;
  margin: 0 0 50px;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.appHoverColor};
  border-radius: 3px;

  &:first-child {
    border-color: transparent;
  }
`;

const Info = styled.div`
  color: ${props => props.theme.appHoverColor};
  margin-bottom: 5px;
`;

class Draft extends Component {
  render() {
    const {
      draft,
      onSave,
      onChangeContent,
      onChangeTags,
      onChangeDate,
    } = this.props;
    const {
      content,
      date,
      tags,
    } = draft;
    return (
      <Wrapper forceHover>
        <Buttons>
          <Button onClick={() => onSave(draft)}>Gem</Button>
        </Buttons>
        <Timestamp date={date} editable onEdit={onChangeDate} />
        <Textarea
          active
          value={content}
          onChange={onChangeContent}
          getFocus
          slim
        />
        <Info>Tags</Info>
        <Field
          onChange={evt => onChangeTags(evt.target.value)}
          placeholder={'F.eks.: "humør=glad, vågnede=0730"'}
          value={tags}
        />
      </Wrapper>
    );
  }
}

export default Draft;
