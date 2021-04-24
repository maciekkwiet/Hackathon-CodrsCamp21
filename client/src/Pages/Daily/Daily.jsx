import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { Bordzik } from '../../Components/Bordzik/Bordzik';
import { Container, Navi, CallMe, Icons, StyledButton, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

export const DailyPage = () => {
  const [show, setShow] = useState(false);
  let history = useHistory();

  function handleReturn() {
    history.push('/');
  }

  return (
    <Container>
      <Navi>
        <CallMe show={show}></CallMe>
        <Icons>
          <StyledButton onClick={handleReturn}>
            <i>{FaAngleLeft}</i>Back
          </StyledButton>
          <StyledButton onClick={() => setShow(!show)}>Lista osob na daily</StyledButton>
        </Icons>
      </Navi>
      <SideContainer show={show}>
        <Title>Online mates:</Title>
        <Person>
          <Name>Robert Maklowicz</Name>
        </Person>
        <Person>
          <Name>Robert Maklowicz</Name>
        </Person>
        <Person>
          <Name>Robert Maklowicz</Name>
        </Person>
        <Person>
          <Name>Robert Maklowicz</Name>
        </Person>
        <Person>
          <Name>Robert Maklowicz</Name>
        </Person>
        <Person>
          <Name>Robert Maklowicz</Name>
        </Person>
      </SideContainer>
      <Bordzik></Bordzik>
    </Container>
  );
};
