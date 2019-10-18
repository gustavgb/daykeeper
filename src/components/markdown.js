import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownStyled = styled.div`
  & > div {
    * {
      color: ${props => props.theme.appPrimaryColor};
    }
    
    h1 {
      margin: 5px 0 10px;
      font-size: 30px;
    }

    h2 {
      margin: 5px 0 10px;
      font-size: 26px;
    }

    h3 {
      margin: 5px 0 5px;
      font-size: 22px;
    }

    h4 {
      margin: 5px 0 5px;
      font-size: 18px;
    }

    h5 {
      margin: 5px 0 5px;
      font-size: 16px;
    }

    p {
      margin: 5px 0 15px;
      font-size: 16px;
    }
  }
`;

const Markdown = ({ source = '' }) => (
  <MarkdownStyled>
    <ReactMarkdown
      source={source}
    />
  </MarkdownStyled>
);

export default Markdown;
