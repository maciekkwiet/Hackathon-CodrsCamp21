import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

//,,Mini navbar" on top
export const Navi = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  background: red;
`;

//Link to meeting
export const CallMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
  background: yellow;
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
  width: 35%;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 5;
  background: yellow;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 25px 0;
  font-size: 1.5rem;
`;

export const Person = styled.div`
  text-align: center;
  width: 70%;
  padding: 7px;
  font-size: 1.25rem;
  border-bottom: 1px solid #1a1b25;
`;

export const Name = styled.p`
  color: black;
`;

//Styles for round icons
export const Icons = styled.div`
  display: flex;
  justify-content: stretch;
  align-content: center;
  align-items: center;
  width: 35%;
`;

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: red;

  &:hover {
    background: yellow;
  }
`;
