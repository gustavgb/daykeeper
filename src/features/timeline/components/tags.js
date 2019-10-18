import React from 'react';
import styled from 'styled-components';
import { stringToColor, invertColor } from 'utils/hex';

const Wrapper = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const TagWrapper = styled.div`
  float: left;
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.color || 'black'};
  padding: 5px 10px;
  margin: 5px 5px 5px 0;
  border-radius: 5px;
`;

const TagKey = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const TagValue = styled.span`
  font-weight: normal;
`;

const Tags = ({ tags }) => {
  const formattedTags = tags.replace(/ /gi, '').split(',').map(tag => tag.split('='));
  return (
    <Wrapper>
      {formattedTags.map(tag => {
        const bgcolor = stringToColor(tag[0]);
        const color = invertColor(bgcolor, true);
        return (
          <TagWrapper backgroundColor={bgcolor} color={color} key={tag.join('')}>
            <TagKey>{tag[0]}:</TagKey>
            <TagValue>{tag[1]}</TagValue>
          </TagWrapper>
        );
      })}
    </Wrapper>
  );
};

export default Tags;
