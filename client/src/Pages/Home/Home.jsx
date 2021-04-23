import { Container, Wrapper, Square } from '../Home/HomeStyles';

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Square>
          <p>Tablica</p>
        </Square>
        <Square>
          <p>Retro</p>
        </Square>
        <Square>
          <p>Piwo</p>
        </Square>
        <Square>
          <p>Todo</p>
        </Square>
      </Wrapper>
    </Container>
  );
};
