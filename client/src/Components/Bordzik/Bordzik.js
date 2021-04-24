import { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledBoard } from '../Bordzik/BordzikStyles';

export const Bordzik = () => {
  const [data, setData] = useState({
    lanes: [
      {
        id: 'lane1',
        title: 'Do zrobienia',
        label: '2/5',
        cards: [
          { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false },
          {
            id: 'Card2',
            title: 'Pay Rent',
            description: 'Transfer via NEFT',
            label: '5 mins',
            metadata: { sha: 'be312a1' },
          },
        ],
      },
      {
        id: 'lane 2',
        title: 'W trakcie',
        label: '0/5',
        cards: [],
      },
      {
        id: 'lane3',
        title: 'Zrobione',
        label: '0/5',
        cards: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      let sessionId = localStorage.getItem('sessionId');
      const result = await axios.get('http://localhost:4000/api/taskTable/', { params: { roomId: sessionId } });
      console.log(result.data.data);
      setData(result.data.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return <StyledBoard data={data} editable editLaneTitle draggable canAddLanes onDataChange={setData}></StyledBoard>;
};
