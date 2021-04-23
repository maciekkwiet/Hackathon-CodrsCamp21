import { CreateNewRoom } from '../../Components/CreateNewRoom/CreateNewRoom';
import { JoinToRoom } from '../../Components/CreateNewRoom/JoinToRoom';
// import { Container } from 'semantic-ui-react'
import { Container, Header, Left, Right } from '../JoinToSession/JoinToSession.jsx';
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
        <h1>Virtual Platform</h1>
      </Header>
      <Left>
        <Card>
          <Image src={createRoom} />
          <Card.Content>
            <Card.Header>Utwórz pokój</Card.Header>
          </Card.Content>
        </Card>
      </Left>
      <Right>
        <Card>
          <Image src={joinToRoom} />
          <Card.Content>
            <Card.Header>Utwórz pokój</Card.Header>
          </Card.Content>
        </Card>
      </Right>
    </Container>
  );
};
