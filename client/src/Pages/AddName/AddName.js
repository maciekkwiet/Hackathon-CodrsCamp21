import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

export const AddName = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ width: 550, height:450 }}>
      <Header as='h2' color='teal' textAlign='center'>
       Podaj swoje imię i dołącz do zabawy
      </Header>
      <Form size='large'>
        <Segment stacked style={{ width: 550, height:250, display:'flex', flexDirection:'column', alignItem: 'center', justifyContent: 'center'}}>
        <Image src='/images/wireframe/square-image.png' size='medium' rounded />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Imię' />
          <Button color='teal' fluid size='large'>
           Dołączam
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)