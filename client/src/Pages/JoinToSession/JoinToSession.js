import {CreateNewRoom} from '../../Components/CreateNewRoom/CreateNewRoom'
import {JoinToRoom} from '../../Components/CreateNewRoom/JoinToRoom'
import { Container } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import createRoom from '../../assets/createRoom.jpg'
import joinToRoom from '../../assets/joinToRoom.jpg'

const extra = (
  <a>
    <Icon name='circle' color='green'/>
    Room is Active
  </a>
)



export const JoinToSessoin =()=>{


  return(
    <Container><h6>Virtual Platform</h6>
    <Card
    width={50}
    image={createRoom}
    header='Dołącz jako uczestnik'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
      <Card
    image={joinToRoom}
    header='Dołącz jako uczestnik'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
    </Container>
   )
}

{/* <CreateNewRoom/>
<JoinToRoom/> */}