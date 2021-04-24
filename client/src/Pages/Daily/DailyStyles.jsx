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

  background: #00a9ff;
  padding: 5px;
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
  background: #e0f2f1;
  transition: all 0.7s ease;
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
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: #ffff;
  margin: 10px;

  &:hover,
  &:focus {
    background: #e0f2f1;
  }
`;

export const StyledButton1 = styled.button`
  padding: 0;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: #a9e704;
  margin: 10;

  &:hover,
  &:focus {
    background: #a9e704;
  }
`;
