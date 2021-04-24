import { CreateNewRoom } from '../../Components/CreateNewRoom/CreateNewRoom';
import { JoinToRoom } from '../../Components/CreateNewRoom/JoinToRoom';
// import { Container } from 'semantic-ui-react'
import { Container, Header, Left, Right, Tag, Buttons } from '../JoinToSession/JoinToSession.jsx';
import { Card, Icon, Image } from 'semantic-ui-react';
import createRoom from '../../assets/createRoom.jpg';
import joinToRoom from '../../assets/joinToRoom.jpg';

const extra = (
  <a>
    <Icon name="circle" color="green" />
    Room is Active
  </a>
);

export const JoinToSessoin = () => {
  return (
    <Container>
      <Header>
        <h1>AIO PRO TEAM</h1>
      </Header>
      <Left>
        <Card>
          <Image src={createRoom} />
          <Tag>
            <Card.Content>
              <Card.Header>STWÓRZ NOWĄ SESJĘ</Card.Header>
            </Card.Content>
          </Tag>
          <Buttons>
            <CreateNewRoom />
          </Buttons>
        </Card>
      </Left>
      <Right>
        <Card>
          <Image src={joinToRoom} />
          <Tag>
            <Card.Content>
              <Card.Header>PODAJ NUMER SESJI</Card.Header>
            </Card.Content>
          </Tag>
          <Buttons>
            <JoinToRoom />
          </Buttons>
        </Card>
      </Right>
    </Container>
  );
};
