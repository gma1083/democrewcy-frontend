import React from 'react';
import { Switch } from "react-router-dom";
import * as Pages from './pages';
import { Private, Public } from "./config/routes";
import { PublicRoute } from './components/common';

const App = () => {
  const PublicPages = Public.map((route: any) => {
    const CurrentComponent = (Pages as any)[route.name] || (
      <div>Welcome 2 democrewcy</div>
    );
    return (
      <PublicRoute
        exact={route.exact}
        path={route.route}
        component={(props : any) => <CurrentComponent {...props} />}
        key={`navroute-${route.route}`}
      />
    );
  });

  const PrivatePages = Private.map(route => {
    const CurrentComponent = (Pages as any)[route.name] || Pages.LandingPage;
    // TODO: Switch to PrivateRoute when we add user state and security
    return (
      <PublicRoute
        exact={route.exact}
        path={route.route}
        component={(props: any) => <CurrentComponent {...props} />}
        key={`navroute-${route.route}`}
      />
    );
  });

  const App = (
    <Switch>
      {PublicPages}
      {PrivatePages}
    </Switch>
  );

  return App;
}

export default App;
