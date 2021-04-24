import styled from 'styled-components';

export const Full = styled.div`
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 10%;
`;

export const Wrapper = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  grid-auto-rows: repeat(stretch, minmax(50vh, 1fr));
  gap: 2rem;
  align-items: center;
  justify-content: stretch;
  align-items: stretch;
  margin: 0 auto;
`;

export const Box = styled.div`
  cursor: pointer;
  width: 100%;
  height: 30vh;
  padding: 1rem;
  background: #067bc2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

export const Container = styled.div`
  position: absolute;
  text-align: center;
  height: 2rem;
  transition: all 0.2s ease;
  border-radius: 5px;

  ${Box}:hover & {
    padding-top: 1rem;
    background: #f8f32b;
    height: 80%;
    width: 80%;
    transition: all 0.2s ease;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const Description = styled.p`
  height: 0;
  opacity: 0;
  visibility: hidden;

  ${Box}:hover & {
    height: 100%;
    opacity: 1;
    visibility: visible;
    transition: all 0.2s ease;
  }
`;
