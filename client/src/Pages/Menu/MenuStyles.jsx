import styled from 'styled-components';

import dayli from '../../assets/dayli.jpg';
import background from '../../assets/background.png';
import beer from '../../assets/beer.jpg';
import retro from '../../assets/retro.jpg';

export const Full = styled.div`
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 10%;
  background-image: url(${background});
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
  border-style: solid;
  border-color: #ef3681;
  cursor: pointer;
  width: 100%;
  height: 30vh;
  padding: 1rem;
  background: #f8f32b;
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
    padding-top: 2rem;
    background: #f8f32b;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: #ffffff;

  ${Box}:hover & {
    color: #000;
    transition: all 0.2s ease;
  }
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

export const Box1 = styled.div`
  border-style: solid;
  border-color: #ef3681;
  cursor: pointer;
  width: 100%;
  height: 30vh;
  padding: 1rem;
  background: #f8f32b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

export const Container1 = styled.div`
  position: absolute;
  text-align: center;
  height: 2rem;
  transition: all 0.2s ease;
  border-radius: 5px;

  ${Box1}:hover & {
    padding-top: 2rem;
    background-image: url(${dayli});
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }
`;

export const Box2 = styled.div`
  border-style: solid;
  border-color: #f744d0;
  cursor: pointer;
  width: 100%;
  height: 30vh;
  padding: 1rem;
  background: #00a9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

export const Container2 = styled.div`
  position: absolute;
  text-align: center;
  height: 2rem;
  transition: all 0.2s ease;
  border-radius: 5px;

  ${Box2}:hover & {
    padding-top: 2rem;
    background-image: url(${beer});
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }
`;

export const Box3 = styled.div`
  border-style: solid;
  border-color: #f744d0;
  cursor: pointer;
  width: 100%;
  height: 30vh;
  padding: 1rem;
  background: #00a9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`;

export const Container3 = styled.div`
  position: absolute;
  text-align: center;
  height: 2rem;
  transition: all 0.2s ease;
  border-radius: 5px;

  ${Box3}:hover & {
    padding-top: 2rem;
    background-image: url(${retro});
    height: 100%;
    width: 100%;
    transition: all 0.2s ease;
  }
`;
