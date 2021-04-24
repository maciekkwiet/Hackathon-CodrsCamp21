import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSocket } from 'socketio-hooks';
import Carousel from 'react-elastic-carousel'
import './Contact.css';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import {
  Container,
  Navi,
  Icons,
  StyledButton,
  StyledButton1
} from '../Daily/DailyStyles';

const jokes = [
'Jaka jest ulubiona zemsta cukiernika? Słodka.',
'Co robi sprzątaczka na scenie? Wymiata.',
'Co mówi ksiądz na ślubie informatyka? Pobieranie zakończone.',
'Dlaczego beton nie ma pracy? Bo go wylali.',
'Dlaczego deszcz siedzi w więzieniu? Bo napadał.',
'Co mówi drwal, gdy za dużo wypije? Ale się narąbałem.',
'Jaka jest ulubiona dyscyplina sportu informatyka? Rzut dyskiem.',
'Jak piją wódkę konduktorzy? Po kolei.',
'Co robią Transformersi wychodząc z imprezy? Składają się na taksówkę.',
'Dlaczego wulkan dostał piątkę na lekcji? Bo był aktywny.',
'Co mówi informatyk, gdy dostanie pendriva na urodziny? Dzięki za pamięć.',
'Dlaczego ściany nie toczą ze sobą wojny? Bo między nimi jest pokój.',
'Dlaczego Jasiu tańczy z ciastkiem? Bo to jego ulubiony kawałek.',
'Dlaczego matematyka jest jak dobra impreza? Bo nikt nie ogarnia.'
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
  <div>
  <Carousel itemsToShow={1} className="styling-example" style={{marginTop:50, position:'absolute'}}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Carousel>
  </div>
    </Container>
  );
};
