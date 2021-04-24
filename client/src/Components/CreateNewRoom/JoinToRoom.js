import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';
import { Lab } from '../CreateNewRoom/JoinToRoomStyles';

export const JoinToRoom = () => {
  const [roomId, setRoomId] = useState();
  const { push } = useHistory();
  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };

  return (
    <>
      <Form onSubmit={connectToRoom} autoComplete="off">
        <Lab>
          <Input
            focus
            minLength={4}
            maxLength={4}
            placeholder="Dołącz..."
            value={roomId}
            onChange={e => {
              setRoomId(e.target.value);
              localStorage.setItem('sessionId', e.target.value);
            }}
            required={true}
          />
          <Button color="teal" content={'JOIN SESSION'}>
            DOŁĄCZ
          </Button>
        </Lab>
      </Form>
    </>
  );
};
