import { Route } from './types';

export const Public: Route[] = [
  {
    name: "Login",
    route: "/",
    exact: true
  }
];

export const Private: Route[] = [
  {
    name: "Home",
    route: "/home",
    exact: true,
    allowedRoles: ["user"]
  }
];
