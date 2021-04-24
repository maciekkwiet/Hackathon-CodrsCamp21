import Callendar from '../../Components/Callendar/CustomTimeline';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaAngleLeft, FaUserFriends } from 'react-icons/fa';
import { Bordzik } from '../../Components/Bordzik/Bordzik';
import { Container, Navi, Icons, StyledButton, SideContainer, Title, Person, Name } from '../Daily/DailyStyles';

export const peoples = [
  {
    name: 'Anna',
    surname: 'Wanna',
  },
  {
    name: 'Andrzej',
    surname: 'Wanna',
  },
  {
    name: 'Marek',
    surname: 'Kubek',
  },
  {
    name: 'Janina',
    surname: 'Koc',
  },
  {
    name: 'Marcin',
    surname: 'Drzwi',
  },
];

export const BeerPage = () => {
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
      <Bordzik></Bordzik>
    <Callendar />  
    </Container>
    
  );
};
