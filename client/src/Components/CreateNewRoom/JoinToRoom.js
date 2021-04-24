import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';
import { Lab } from '../CreateNewRoom/JoinToRoomStyles';

export const JoinToRoom = () => {
  const [roomId, setRoomId] = useState();
  console.log('roomID');
  const { push } = useHistory();
  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };
  console.log('room', roomId);
  return (
    <>
      <Form onSubmit={connectToRoom} autoComplete="off">
        <Lab>
          <Input
            focus
            placeholder="Dołącz..."
            value={roomId}
            onChange={e => {
              setRoomId(e.target.value);
            }}
          />
          <Button color="teal" content={'JOIN SESSION'}>
            DOŁĄCZ
          </Button>
        </Lab>
      </Form>
    </>
  );
};
