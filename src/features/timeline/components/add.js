import styled from 'styled-components';

const Add = styled.button`
  padding: 0 20px;
  margin: 60px 0 50px;
  color: ${props => props.theme.appHoverColor};
  border: none;
  background: transparent;
  cursor: pointer;

  transition: color 0.2s linear;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${props => props.theme.appPrimaryColor};
  }
`;

export default Add;
