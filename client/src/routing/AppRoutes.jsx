import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import App from '../App';
import { Home } from '../Pages/Home/Home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/daily'} exact component={Home} />
        <Route path={'/retro '} exact component={Home} />
        <Route path={'/beer'} exact component={Home} />
        <Route path={'/todo'} exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
