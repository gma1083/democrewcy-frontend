export const Public = [
  {
    text: "Landing Page",
    name: "LandingPage",
    route: "/",
    exact: true,
  }
];

export const Private = [
  {
    text: "ViewGroup",
    name: "ViewGroup",
    route: "/group",
    exact: true,
    allowedRoles: ['user']
  },
  {
    text: "Home",
    name: "Home",
    route: "/home",
    exact: true,
    allowedRoles: ['user']
  }
];