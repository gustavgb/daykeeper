import styled from 'styled-components';

const Status = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  font-size: 12px;
  color: ${props => props.error ? props.theme.errorColor : props.theme.appHoverColor};
`;

export default Status;
