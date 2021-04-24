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
      console.log('1');
      const currentRoom = await axios.post('/api/session');
      console.log('GGGG', currentRoom);
      setIsLoading(false);
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
