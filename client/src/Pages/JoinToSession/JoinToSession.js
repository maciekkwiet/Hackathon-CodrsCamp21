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
      <Header as="h2" color="#009C95">
        <Card.Header style={{ fontSize: '40px', color: '#696969', fontStyle: 'bolder' }}>AIO PRO TEAM</Card.Header>
      </Header>

      <Left>
        <Card style={{ height: 400 }}>
          <Image src={createRoom} />

          <Tag>
            <Card.Content style={{ marginTop: '30px', fontSize: '20px' }}>
              <Card.Header>STWÓRZ NOWĄ SESJĘ</Card.Header>
            </Card.Content>
          </Tag>

          <Buttons style={{ marginTop: '30px', width: 300 }}>
            <CreateNewRoom />
          </Buttons>
        </Card>
      </Left>
      <Right>
        <Card style={{ height: 400 }}>
          <Image src={joinToRoom} />
          <Tag>
            <Card.Content style={{ marginTop: '30px', marginBottom: '35px', fontSize: '20px' }}>
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
