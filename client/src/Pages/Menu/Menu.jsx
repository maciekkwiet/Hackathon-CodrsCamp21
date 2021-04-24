import { Full, Wrapper, Box,Box1,Container1,Box2,Container2,Box3,Container3,  Container, Title, Description } from './MenuStyles';
import { useHistory } from 'react-router-dom';
import { Image } from 'semantic-ui-react'
import dayli from '../../assets/dayli.jpg'

export const Menu = () => {
  let history = useHistory();

  return (
    <Full>
      <Wrapper>
        <Box1 onClick={() => history.push('/daily')}>
          <Container1>
            <Title>TABLICA</Title>
            {/* <Image src={dayli}rounded size='small'/> */}
            <Description>Tutaj...</Description>
          </Container1>
        </Box1>
        <Box3 onClick={() => history.push('/retro')}>
          <Container3>
            <Title>RETRO</Title>
            <Description>A tutaj...</Description>
          </Container3>
        </Box3>
        <Box2 onClick={() => history.push('/beer')}>
          <Container2>
            <Title>PIWO</Title>
            <Description>Natomiast tutaj...</Description>
          </Container2>
        </Box2>
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
