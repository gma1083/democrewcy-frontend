import React from "react";
import { Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, PageHeader } from "antd";
import { User } from '../../../config/types';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  exact: boolean;
  path: string;
  key: string;
  user: User
  allowedRoles: string[]
};


const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({
  component: Component,
  user,
  allowedRoles,
  ...rest
}) => {

  const userHasAllowedRole = () => true;

  return (
    <Route
      {...rest}
      render={props =>
        ! user ? (
          <Redirect to="/login" />
        ) : ! allowedRoles || userHasAllowedRole() ? (
          <Component {...props} />
        ) : (
          <Layout>
            <PageHeader title="Access Forbidden" />
          </Layout>
        )
      }
    />
  );
};

export default PrivateRoute;
