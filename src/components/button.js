import styled from 'styled-components';

const Button = styled.button`
  border-radius: 20px;
  background-color: ${props => props.theme.appPrimaryColor};
  color: ${props => props.theme.appSecondaryColor};
  padding: 5px 20px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default Button;
