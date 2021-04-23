import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {JoinToSessoin} from './JoinToSession/JoinToSession'
import {AddName} from './AddName/AddName'
import {LoginForm} from './LoginForm/Loginform'



import { DailyPage } from './Daily/Daily';
import { BeerPage } from '../Pages/Beer/Beer';

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/room/:roomId/join">
          <AddName />
        </Route>
        <Route path="/room/:roomId">
          <LoginForm/>
        </Route>
        <Route path="/">
          <JoinToSessoin />
        </Route>
      </Switch>
  </BrowserRouter>

 
  );
};
