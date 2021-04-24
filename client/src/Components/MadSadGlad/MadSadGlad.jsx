import { useState } from 'react';
import { Card } from '../../Components/Card/Card';
import { Main } from './MadSadGladStyles';
import './styles.css';

export const MadSadGlad = () => {
  const [state, setState] = useState({
    categories: {
      wentWell: [],
      toImprove: [],
      actionItems: [],
    },
    addClass: false,
    userInput: '',
    id: 0,
    Cards: [],
    likes: 0,
    dislikes: 0,
  });

  const userInput = (e, idx) => {
    let newCards = [...state.Cards];
    newCards[idx].input = e.target.value;
    setState({
      Cards: newCards,
    });
  };

  const validateInput = e => {
    if (e.target.value === '') {
      window.alert('input required');
    }
  };
  const Delete = id => {
    setState({
      Cards: state.Cards.filter(card => card.id !== id),
    });
  };

  const CreateCard = (type, input) =>
    setState({
      Cards: [
        ...state.Cards,
        {
          id: state.id,
          type: type,
          input: input,
          likes: 0,
          dislikes: 0,
        },
      ],
      id: state.id + 1,
    });

  const MoveLeft = (id, idx) => {
    let newCards = [...state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === 'Went Well') {
        card.type = 'Action Items';
      } else if (card.id === id && card.type === 'To Improve') {
        card.type = 'Went Well';
      } else if (card.id === id && card.type === 'Action Items') {
        card.type = 'To Improve';
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    setState({
      Cards: newCards,
    });
  };

  const MoveRight = (id, idx) => {
    let newCards = [...state.Cards];
    for (let card of newCards) {
      if (card.id === id && card.type === 'Went Well') {
        card.type = 'To Improve';
      } else if (card.id === id && card.type === 'To Improve') {
        card.type = 'Action Items';
      } else if (card.id === id && card.type === 'Action Items') {
        card.type = 'Went Well';
      }
    }
    newCards.push(newCards[idx]);
    newCards.splice(idx, 1);
    setState({
      Cards: newCards,
    });
  };

  const handleLikes = idx => {
    let newCards = [...state.Cards];
    newCards[idx].likes++;
    setState({
      Cards: newCards,
    });
  };

  const handleDislikes = idx => {
    let newCards = [...state.Cards];
    newCards[idx].dislikes++;
    setState({
      Cards: newCards,
    });
  };

  const toggle = () => {
    if (state.addClass === 2) {
      setState({ addClass: 0 });
    } else {
      setState({ addClass: state.addClass + 1 });
    }
  };

  // toggle() {
  //   setState({ addClass: !state.addClass });
  // }

  return (
    <Main>
      <h2>Retro Board</h2> <br />
      <div className="btn-cntr">
        <button onClick={toggle} className="ChangeLayout">
          <i className="fas fa-bars" />
        </button>
      </div>
      <br />
      <div className="text-center">
        <div className={state.addClass === 1 ? 'col' : state.addClass === 2 ? 'col' : 'row'}>
          <div className={state.addClass === 1 ? 'row' : 'col'}>
            <div className={(state.addClass === 1 ? ' Rotate-1' : '').toString()}>
              <h4>Went Well</h4>
              <button type="button" className="addButton" onClick={() => CreateCard('Went Well', '')}>
                +
              </button>
            </div>
            {state.Cards.map((card, idx) => {
              if (card.type === 'Went Well') {
                return (
                  <Card
                    key={'Went Well' + idx}
                    idx={idx}
                    cardId={card.id}
                    value={card.input}
                    userInput={userInput}
                    validateInput={validateInput}
                    MoveLeft={MoveLeft}
                    Delete={Delete}
                    MoveRight={MoveRight}
                    likesCount={card.likes}
                    dislikesCount={card.dislikes}
                    handleLikes={handleLikes}
                    handleDislikes={handleDislikes}
                    addClass={state.addClass}
                    color={'wentWell'}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className={state.addClass === 1 ? 'row' : 'col'}>
            <div className={(state.addClass === 1 ? ' Rotate-1' : '').toString()}>
              <h4>To Improve</h4>
              <button type="button" className="addButton" onClick={() => CreateCard('To Improve', '')}>
                +
              </button>
            </div>
            {state.Cards.map((card, idx) => {
              if (card.type === 'To Improve') {
                return (
                  <Card
                    key={'To Improve' + idx}
                    idx={idx}
                    cardId={card.id}
                    value={card.input}
                    userInput={userInput}
                    validateInput={validateInput}
                    MoveLeft={MoveLeft}
                    Delete={Delete}
                    MoveRight={MoveRight}
                    likesCount={card.likes}
                    dislikesCount={card.dislikes}
                    handleLikes={handleLikes}
                    handleDislikes={handleDislikes}
                    addClass={state.addClass}
                    color={'toImprove'}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className={state.addClass === 1 ? 'row' : 'col'}>
            <div className={(state.addClass === 1 ? ' Rotate-1' : '').toString()}>
              <h4>Action Items</h4>
              <button type="button" className="addButton" onClick={() => CreateCard('Action Items', '')}>
                +
              </button>
            </div>
            {state.Cards.map((card, idx) => {
              if (card.type === 'Action Items') {
                return (
                  <Card
                    key={'Action Items' + idx}
                    idx={idx}
                    cardId={card.id}
                    value={card.input}
                    userInput={userInput}
                    validateInput={validateInput}
                    MoveLeft={MoveLeft}
                    Delete={Delete}
                    MoveRight={MoveRight}
                    likesCount={card.likes}
                    dislikesCount={card.dislikes}
                    handleLikes={handleLikes}
                    handleDislikes={handleDislikes}
                    addClass={state.addClass}
                    color={'actionItems'}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};
