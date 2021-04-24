import { Full, Wrapper, Box, Container, Title, Description } from './MenuStyles';
import { useHistory } from 'react-router-dom';

export const Menu = () => {
  let history = useHistory();

  return (
    <Full>
      <Wrapper>
        <Box onClick={() => history.push('/daily')}>
          <Container>
            <Title>DAILY</Title>
            <Description>Tutaj...</Description>
          </Container>
        </Box>
        <Box onClick={() => history.push('/retro')}>
          <Container>
            <Title>RETRO</Title>
            <Description>A tutaj...</Description>
          </Container>
        </Box>
        <Box onClick={() => history.push('/beer')}>
          <Container>
            <Title>PIWO</Title>
            <Description>Natomiast tutaj...</Description>
          </Container>
        </Box>
        <Box onClick={() => history.push('/todo')}>
          <Container>
            <Title>TODO</Title>
            <Description>Pizza...</Description>
          </Container>
        </Box>
      </Wrapper>
    </Full>
  );
};
