import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { JoinToSessoin } from './JoinToSession/JoinToSession';
import { AddName } from './AddName/AddName';
import { DailyPage } from './Daily/Daily';
import { Menu } from './Menu/Menu';
import { RetroPage } from './Retro/Retro';
import { BeerPage } from './Beer/Beer';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/board">
          <DailyPage />
        </Route>
        <Route path="/beer">
          <BeerPage />
        </Route>
        <Route path="/retro">
          <RetroPage />
        </Route>
        <Route path="/room/:roomId/join">
          <AddName />
        </Route>
        <Route path="/room/:roomId">
          <Menu />
        </Route>
        <Route path="/">
          <JoinToSessoin />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
