import styled from 'styled-components';

const Field = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 10px 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${props => props.theme.appHoverColor};
  transition: border-color 0.2s linear;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.appHoverColor};
  }
`;

export default Field;
