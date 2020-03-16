import React from "./node_modules/react";
import { Route } from "./node_modules/react-router-dom";

interface PublicRouteProps {
  component: React.ComponentType<any>;
  exact: boolean;
  path: string;
  key: string;
};

const PublicRoute: React.FunctionComponent<PublicRouteProps> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

export default PublicRoute;
