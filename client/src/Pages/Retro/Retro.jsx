import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { Container, Navi, Icons, StyledButton, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

import { peoples } from '../Daily/Daily';

export const RetroPage = () => {
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
        <Title>Na spotkaniu:</Title>
        {peoples.map(person => {
          return (
            <Person>
              <Name>{`${person.name} ${person.surname}`}</Name>
            </Person>
          );
        })}
      </SideContainer>
    </Container>
  );
};
