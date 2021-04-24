import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { JoinToSessoin } from './JoinToSession/JoinToSession';
import { AddName } from './AddName/AddName';
import { DailyPage } from './Daily/Daily';
import { BeerPage } from '../Pages/Beer/Beer';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/daily">
          <DailyPage />
        </Route>
        <Route path="/room/:roomId/join">
          <AddName />
        </Route>
        <Route path="/room/:roomId">{/* <Home /> */}</Route>
        <Route path="/">
          <JoinToSessoin />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
