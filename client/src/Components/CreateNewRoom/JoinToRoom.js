import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';


export const JoinToRoom = () => {
  const [roomId, setRoomId] = useState()

  const { push } = useHistory();
  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };
console.log('room',roomId)
  return (
    <>
      <form onSubmit={connectToRoom} autoComplete="off">
       <input value={roomId} onChange={(e)=>{setRoomId(e.target.value)}}/>
            <button content={'JOIN SESSION'} height={2.8} >JoinRoom</button>
      </form>
    </>
  );
};


