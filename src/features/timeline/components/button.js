import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 10px;
  font-weight: bold;
  color: ${props => props.theme.appHoverColor};
  cursor: pointer;
  background-color: transparent;
  font-size: 12px;
  vertical-align: bottom;

  &:focus {
    outline: none;
  }
`;

export default Button;
