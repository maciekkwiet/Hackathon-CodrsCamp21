import { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledBoard } from '../Bordzik/BordzikStyles';

export const Bordzik = () => {
  const [data, setData] = useState({
    lanes: [
      {
        id: '',
        title: '',
        label: '',
        cards: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      let sessionId = localStorage.getItem('sessionId');
      const { data } = await axios.get('http://localhost:4000/api/taskTable/', { params: { roomId: sessionId } });
      setData(data.data);
    };
    fetchData();
  }, []);

  return <StyledBoard data={data} editable editLaneTitle draggable canAddLanes onDataChange={setData}></StyledBoard>;
};
