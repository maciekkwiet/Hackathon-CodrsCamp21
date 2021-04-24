import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { useSocket } from 'socketio-hooks';
import { Bordzik } from '../../Components/Bordzik/Bordzik';
import { Container, Navi, Icons, StyledButton,StyledButton1, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

export const DailyPage = () => {
  const [show, setShow] = useState(false);
  const [peoples, setPeoples] = useState([{ name: '' }]);
  let history = useHistory();
  const roomId = localStorage.getItem("sessionId");
  function handleReturn() {
    history.push(`/room/${roomId}`);
  }

  useSocket('USER_JOINED', users => {
    console.log('DAILY' + users);
  });

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'));
    setPeoples(users);
  }, []);

  return (
    <Container>
      <Navi>
        <Icons>
          <StyledButton onClick={handleReturn}>
            <FaAngleLeft size={'2rem'} />
          </StyledButton>
          <StyledButton1 onClick={() => setShow(!show)}>
            <FaUserFriends size={'2rem'} />
          </StyledButton1>
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
      <Bordzik></Bordzik>
    </Container>
  );
};
