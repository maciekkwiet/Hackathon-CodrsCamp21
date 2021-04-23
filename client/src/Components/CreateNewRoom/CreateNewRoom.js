import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const CreateNewRoom = () => {
  const history = useHistory();


  const [isException, setIsException] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getRoomNumber = async () => {
    setIsException(false);
    setIsLoading(true);
    try {
      const currentRoom = await axios.post('/api/session');
      setIsLoading(false);
      history.push(`/room/${currentRoom.data.room.id}/join`, { isAdmin: true });
    } catch (e) {
      console.error(e);
      setIsException(true);
    }
  };

  return (
    <>
      <div >
        <button content={'START SESSION'} onClick={getRoomNumber}>START SESSION</button>
        {isException && <h6>Error</h6>}
        {isLoading && <h6>loading</h6>}
      </div>
    </>
  );
};
