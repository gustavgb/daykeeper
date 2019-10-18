import React, { Component } from 'react';
import Markdown from 'components/markdown';
import styled, { css } from 'styled-components';
import Button from 'features/timeline/components/button';
import Close from 'features/timeline/components/close';
import Buttons from 'features/timeline/components/buttons';
import Timestamp from 'components/timestamp';
import Tags from 'features/timeline/components/tags';

const Wrapper = styled.div`
  position: relative;
  padding: 10px 20px 10px;
  margin: 0 0 50px;

  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  transition: border-color 0.2s linear;

  &:first-child {
    border-color: transparent;
  }

  &:hover {
    border-color: ${props => props.theme.appHoverColor};
    border-radius: 3px;
  }

  ${props => !props.disableActions && css`
    &:hover > ${Buttons} {
      opacity: 1;
      pointer-events: all;
    }
  `}

  & > ${Buttons} {
    opacity: 0;
    pointer-events: none;

    transition: opacity 0.2s linear;
  }
`;

const Info = styled.div`
  color: ${props => props.theme.appHoverColor};
  margin-bottom: 5px;
`;

class Log extends Component {
  shouldComponentUpdate(next) {
    if (
      next.log.content !== this.props.log.content ||
      next.log.tags !== this.props.log.tags ||
      next.log.date !== this.props.log.date ||
      next.disableActions !== this.props.disableActions
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      log,
      onEdit,
      onDelete,
      disableActions,
    } = this.props;
    const {
      content,
      tags,
      date,
    } = log;
    return (
      <Wrapper disableActions={disableActions}>
        <Buttons>
          <Button onClick={onEdit}>Rediger</Button>
          <Close
            onClick={() => {
              // eslint-disable-next-line
              if (window.confirm('Vil du slette denne note?')) {
                onDelete();
              }
            }}
          >&times;</Close>
        </Buttons>
        <Timestamp date={date} />
        {content && content.length > 0 && (
          <Markdown source={content} />
        )}
        {tags && tags.length > 0 && content && content.length > 0 && (
          <Info>Tags</Info>
        )}
        {tags && tags.length > 0 && (
          <Tags tags={tags} />
        )}
      </Wrapper>
    );
  }
}

export default Log;
