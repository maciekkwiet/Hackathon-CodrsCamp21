import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 10% 35% 10% 35% 10%;
  grid-template-rows: 20% auto 30%;
  background-image: url(${background});
`;




export const Header = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
  justify-self: center;
  padding: 40px;
`;

export const Left = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  justify-self: center;
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  height: auto;
  margin-top: 60px;
`;

export const Right = styled.div`
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
  justify-self: center;
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  margin-top: 60px;
`;

export const Tag = styled.div`
  justify-self: center;
  text-align: center;
  padding: 5px;
  font-weight: bold;
`;

export const Buttons = styled.div`
  justify-self: center;
  text-align: center;
  padding: 5px;
  font-weight: bold;
`;
