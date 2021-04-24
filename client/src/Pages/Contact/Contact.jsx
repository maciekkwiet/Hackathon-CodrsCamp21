import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { Container, Navi, Icons, StyledButton, StyledButton1 } from '../Daily/DailyStyles';
import { AvatarCard } from '../../Components/AvatarCard/AvatarCard';

export const ContactPage = () => {
  const [show, setShow] = useState(false);
  const [peoples, setPeoples] = useState([{ name: '' }]);
  let history = useHistory();
  const roomId = localStorage.getItem('sessionId');
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
      <AvatarCard></AvatarCard>
    </Container>
  );
};
