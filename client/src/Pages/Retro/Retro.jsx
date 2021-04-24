import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { MadSadGlad } from '../../Components/MadSadGlad/MadSadGlad';
import { Container, Navi, Icons, StyledButton, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

export const RetroPage = () => {
  const [show, setShow] = useState(false);
  const [peoples, setPeoples] = useState([{ name: '' }]);
  let history = useHistory();

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users[0].name);
    setPeoples(users);
  }, []);

  function handleReturn() {
    const roomId = localStorage.getItem('sessionId');
    history.push(`/room/${roomId}`);
  }

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users[0].name);
    setPeoples(users);
  }, []);

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
              <Name>{`${person.name}`}</Name>
            </Person>
          );
        })}
      </SideContainer>
      <MadSadGlad />
    </Container>
  );
};
