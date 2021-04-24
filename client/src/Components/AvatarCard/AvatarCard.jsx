import { Card, Icon, Image } from 'semantic-ui-react';
import { Wrapper } from './AvatarCardStyles';

export const AvatarCard = () => (
  <Wrapper>
    <Card style={{ margin: '5px' }}>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Klara</Card.Header>
        <Card.Meta>
          <span className="date">klara@noodle.com</span>
        </Card.Meta>
        <Card.Description>Klara is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>

    <Card style={{ margin: 0 }}>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Maciej</Card.Header>
        <Card.Meta>
          <span className="date">maciej@noodle.com</span>
        </Card.Meta>
        <Card.Description>Maciej is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>

    <Card style={{ margin: 0 }}>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Mariusz</Card.Header>
        <Card.Meta>
          <span className="date">mariusz@noodle.com</span>
        </Card.Meta>
        <Card.Description>Mariusz is a Noodle Senior Software Engineer.</Card.Description>
      </Card.Content>
    </Card>

    <Card style={{ margin: 0 }}>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
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
