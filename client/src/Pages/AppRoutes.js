<<<<<<< HEAD:client/src/Pages/AppRoutes.js
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
=======
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { Home } from '../Pages/Home/Home';
import { DailyPage } from '../Pages/Daily/Daily';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/daily'} exact component={DailyPage} />
        <Route path={'/retro '} exact component={Home} />
        <Route path={'/beer'} exact component={Home} />
        <Route path={'/todo'} exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
>>>>>>> 311eb7b49669093be216b1eab56ac8da6dc0b9a9:client/src/routing/AppRoutes.jsx
