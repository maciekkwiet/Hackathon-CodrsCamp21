import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {JoinToSessoin} from './JoinToSession/JoinToSession'
import {AddName} from './AddName/AddName'


import { Home } from './Home/Home';

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/room/:roomId/join">
          <AddName />
        </Route>
        <Route path="/room/:roomId">
          <Home />
        </Route>
        <Route path="/">
          <JoinToSessoin />
        </Route>
      </Switch>
  </BrowserRouter>

 
  );
};

