import {
  Full,
  Wrapper,
  Box,
  Box1,
  Container1,
  Box2,
  Container2,
  Box3,
  Container3,
  Container,
  Title,
} from './MenuStyles';
import { useHistory } from 'react-router-dom';

export const Menu = () => {
  let history = useHistory();

  return (
    <Full>
      <Wrapper>
        <Box1 onClick={() => history.push('/board')}>
          <Container1>
            <Title>TABLICA</Title>
          </Container1>
        </Box1>
        <Box3 onClick={() => history.push('/retro')}>
          <Container3>
            <Title>RETRO</Title>
          </Container3>
        </Box3>
        <Box2 onClick={() => history.push('/beer')}>
          <Container2>
            <Title>PIWO</Title>
          </Container2>
        </Box2>
        <Box onClick={() => history.push('/contact')}>
          <Container>
            <Title>Kontakty i suchary</Title>
          </Container>
        </Box>
      </Wrapper>
    </Full>
  );
};
