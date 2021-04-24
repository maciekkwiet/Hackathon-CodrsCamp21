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
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:4000/api/taskTable/', { params: { roomId: sessionId } });
      setData(data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
    const setDataAPI = async () => {
      changeTable({ roomId: sessionId, data }, ({ room, token }) => {});
    };
    setDataAPI();
  }, [data]);

  useSocket('CHANGED_TABLE', newData => {
    console.log('newData' + newData);
    if (newData) setData(newData);
  });

  return <StyledBoard data={data} editable editLaneTitle draggable canAddLanes onDataChange={setData}></StyledBoard>;
};
