import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export const Square = styled.div`
  width: 100%;
  height: 100px;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
