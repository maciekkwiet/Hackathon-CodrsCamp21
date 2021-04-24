import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

export const CreateNewRoom = () => {
  const history = useHistory();

  const [isException, setIsException] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getRoomNumber = async () => {
    setIsException(false);
    setIsLoading(true);
    try {
      const currentRoom = await axios.post('http://aio-pro-team.herokuapp.com/api/session');
      setIsLoading(false);
      localStorage.setItem('sessionId', currentRoom.data.id);
      history.push(`/room/${currentRoom.data.id}/join`, { isAdmin: true });
    } catch (e) {
      console.error(e);
      setIsException(true);
    }
  };

  return (
    <>
      <div>
        <Button color="orange" content={'START SESSION'} onClick={() => getRoomNumber()}>
          ROZPOCZNIJ SESJĘ
        </Button>
        {isException && <h6>Error</h6>}
        {isLoading && <h6>loading</h6>}
      </div>
    </>
  );
};
