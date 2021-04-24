import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import meeting from '../../assets/meeting.jpg';

import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useEmit, useSocket } from 'socketio-hooks';

export const AddName = () => {
  const defaultName = window.localStorage.getItem('DEFAULT_NAME') ?? '';
  const [isObserver, setObserver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { roomId } = useParams();
  const { state } = useLocation();
  const history = useHistory();
  const joinRoom = useEmit('USER_JOIN');
  const [nameUser, setNameUser] = useState('');

  const onSubmitHandler = () => {
    window.localStorage.setItem('DEFAULT_NAME', nameUser);

    joinRoom({ name: nameUser, roomId, isAdmin: false }, ({ room, token }) => {
      setIsLoading(false);
    });
    setIsLoading(true);
  };

  useSocket('USER_JOINED', users => {
    console.log('addName' + users);
    localStorage.setItem('users', JSON.stringify(users));
    history.push(`/room/${roomId}`);
  });

  return (
    <div>
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ width: 450 }}>
          <Header as="h2" color="teal">
            Podaj imię i dołącz do swojego zespołu
          </Header>
          <Form size="large" onSubmit={() => onSubmitHandler()}>
            <Segment
              stacked
              style={{
                width: 450,
                height: 450,
                display: 'flex',
                flexDirection: 'column',
                alignItem: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={meeting} size="medium" rounded style={{ marginBottom: 40, marginLeft: 50 }} />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Imię"
                onChange={e => {
                  setNameUser(e.target.value);
                }}
              />
              <Button color="teal" type="submit" fluid size="large">
                Dołączam
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};
