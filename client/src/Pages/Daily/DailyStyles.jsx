import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

//Styles for mini Navbar
export const Navi = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
  background: pink;
`;

export const CallMe = styled.div`
  display: none;
  width: 90%;
  background: red;
`;

//Styles for round icons
export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  width: 10%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 50%;
  background: yellow;
`;
