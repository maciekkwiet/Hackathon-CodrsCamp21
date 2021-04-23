import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {JoinToSessoin} from './JoinToSession/JoinToSession'


import { Home } from './Home/Home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={JoinToSessoin} />
        <Route path={'/daily'} exact component={Home} />
        <Route path={'/retro '} exact component={Home} />
        <Route path={'/beer'} exact component={Home} />
        <Route path={'/todo'} exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
