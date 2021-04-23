import Board from 'react-trello';

import { Container } from './DailyStyles';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Kolumna 1',
      label: '2/2',
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
      title: 'Kolumna 2',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane3',
      title: 'Kolumna 3',
      label: '0/0',
      cards: [],
    },
  ],
};

export const DailyPage = () => {
  return (
    <Container>
      <Board data={data}></Board>
    </Container>
  );
};
