import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { JoinToSessoin } from './JoinToSession/JoinToSession';
import { Home } from './Home/Home';
import { DailyPage } from './Daily/Daily';
import { BeerPage } from '../Pages/Beer/Beer';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={JoinToSessoin} />
        <Route path={'/daily'} exact component={DailyPage} />
        <Route path={'/retro '} exact component={Home} />
        <Route path={'/beer'} exact component={BeerPage} />
        <Route path={'/todo'} exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
