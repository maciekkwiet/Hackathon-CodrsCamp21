import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: stretch;
`;

//,,Mini navbar" on top
export const Navi = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 50px;
  background: #067bc2;
`;

//Online people
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50px;
  right: 0;
  height: 100%;
  width: 30%;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 5;
  background: #f8f32b;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 25px 0;
  font-size: 2rem;
  text-align: center;
  width: 100%;
  border-bottom: 5px solid #000;
  border-bottom: 5px solid #000;
`;

export const Person = styled.div`
  text-align: center;
  width: 70%;
  padding: 7px;
  font-size: 1.25rem;
  border-bottom: 2px solid #000;
`;

export const Name = styled.p`
  color: #000;
`;

//Styles for round icons
export const Icons = styled.div`
  display: flex;
  justify-content: stretch;
  align-content: center;
  align-items: center;
  width: 30%;
`;

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 5px solid #ffffff;
  background: #067bc2;

  &:hover,
  &:focus {
    background: #f8f32b;
    border-bottom: 5px solid #000000;
  }
`;
