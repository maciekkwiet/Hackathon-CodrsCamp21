import { useState, useEffect } from 'react';
import axios from 'axios';
import { useEmit, useSocket } from 'socketio-hooks';

import { StyledBoard } from '../Bordzik/BordzikStyles';

export const Bordzik = () => {
  const changeTable = useEmit('CHANGE_TABLE');
  let sessionId = localStorage.getItem('sessionId');
  const [data, setData] = useState({
    lanes: [
      {
        id: 'lane1',
        title: 'Do zrobienia',
        label: '0/0',
        cards: [],
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const { data } = await axios.get('http://aio-pro-team.herokuapp.com/api/taskTable/', {
        params: { roomId: sessionId },
      });
      console.log(data.data);
      setData(data.data);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios.post('http://aio-pro-team.herokuapp.com/api/taskTable/', {
        params: {
          roomId: sessionId,
          data: data,
        },
      });
    };
    fetchData();
  }, [data]);

  useSocket('CHANGED_TABLE', newData => {
    console.log('newData' + newData);
    console.log(newData);
    if (newData) setData(newData);
  });

  return <StyledBoard data={data} editable editLaneTitle draggable canAddLanes onDataChange={setData}></StyledBoard>;
};
