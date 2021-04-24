import { Card, Image } from 'semantic-ui-react';
import { Wrapper } from './AvatarCardStyles';

export const AvatarCard = () => (
  <Wrapper styles={{margin:50}}>
    <Card style={{ margin: '5px' }}>
      <Image src="https://avatarfiles.alphacoders.com/152/thumb-152919.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Sebastian</Card.Header>
        <Card.Meta>
          <span className="date">sebastian@noodle.com</span>
        </Card.Meta>
        <Card.Description>Sebastian is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>

    <Card style={{ margin: 50 }}>
      <Image src="https://gwent.one/image/rewards/s01-avatar_03.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Maciej</Card.Header>
        <Card.Meta>
          <span className="date">maciej@noodle.com</span>
        </Card.Meta>
        <Card.Description>Maciej is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>

    <Card style={{ margin: 0 }}>
      <Image src="https://gwent.one/image/rewards/s01-avatar_03.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Mariusz</Card.Header>
        <Card.Meta>
          <span className="date">mariusz@noodle.com</span>
        </Card.Meta>
        <Card.Description>Mariusz is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>

    <Card style={{ margin: 0 }}>
      <Image src="https://gwent.one/image/rewards/s01-avatar_03.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Kamil</Card.Header>
        <Card.Meta>
          <span className="date">kamil@noodle.com</span>
        </Card.Meta>
        <Card.Description>Kamil is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>
  </Wrapper>
);
