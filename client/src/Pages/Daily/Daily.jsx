import { Bordzik } from '../../Components/Bordzik/Bordzik';
import { Container, Navi, CallMe, Icons, StyledLink, StyledButton } from '../Daily/DailyStyles';

export const DailyPage = () => {
  return (
    <Container>
      <Navi>
        <CallMe></CallMe>
        <Icons>
          <StyledLink to={'/'}>
            <StyledButton>Back</StyledButton>
          </StyledLink>
          <StyledButton>List</StyledButton>
        </Icons>
      </Navi>
      <Bordzik></Bordzik>
    </Container>
  );
};
