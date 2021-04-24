import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';
import Carousel from 'react-elastic-carousel';
import './Contact.css';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import {
  Container,
  Navi,
  Icons,
  StyledButton,
  StyledButton1,
  SideContainer,
  Title,
  Person,
  Name,
} from '../Daily/DailyStyles';
import { AvatarCard } from '../../Components/AvatarCard/AvatarCard';

const jokes = [
  { pytanie: 'Jaka jest ulubiona zemsta cukiernika?', odpowiedz: ' Słodka' },
  { pytanie: 'Co robi sprzątaczka na scenie?', odpowiedz: ' Wymiata' },
  { pytanie: 'Co mówi ksiądz na ślubie informatyka?', odpowiedz: ' Pobieranie zakończone.' },
  { pytanie: 'Dlaczego beton nie ma pracy?', odpowiedz: ' Bo napadał.' },
  { pytanie: 'Dlaczego deszcz siedzi w więzieniu?', odpowiedz: ' Słodka' },
  { pytanie: 'Co mówi drwal, gdy za dużo wypije?', odpowiedz: ' Ale się narąbałem.' },
  { pytanie: 'Jaka jest ulubiona dyscyplina sportu informatyka?', odpowiedz: ' Rzut dyskiem' },
  { pytanie: 'Jak piją wódkę konduktorzy?', odpowiedz: ' Składają się na taksówkę.' },
  { pytanie: 'Co robią Transformersi wychodząc z imprezy?', odpowiedz: ' Słodka' },
];

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
      <AvatarCard></AvatarCard>
      <div>
        <div styles={{ marigin: 50 }}>
          {' '}
          <Carousel itemsToShow={1} className="styling-example" style={{ marginTop: 50, position: 'absolute' }}>
            {jokes.map(item => (
              <div>
                <h3>{item.pytanie}</h3> <h4>{item.odpowiedz}</h4>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};
