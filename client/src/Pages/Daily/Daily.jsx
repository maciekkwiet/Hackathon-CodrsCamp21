import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { Bordzik } from '../../Components/Bordzik/Bordzik';
import { Container, Navi, CallMe, Icons, StyledButton, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

export const DailyPage = () => {
  const [show, setShow] = useState(false);
  let history = useHistory();

  function handleReturn() {
    history.push('/menu');
  }

  return (
    <Container>
      <Navi>
        <Icons>
          <StyledButton onClick={handleReturn}>
            <FaAngleLeft size={'2rem'} />
          </StyledButton>
          <StyledButton onClick={() => setShow(!show)}>
            <FaUserFriends size={'2rem'} />
          </StyledButton>
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
