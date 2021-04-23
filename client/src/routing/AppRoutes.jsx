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
