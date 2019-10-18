import styled from 'styled-components';

const Close = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  padding: 10px;
  font-weight: bold;
  color: ${props => props.theme.appHoverColor};
  cursor: pointer;
  background-color: transparent;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export default Close;
