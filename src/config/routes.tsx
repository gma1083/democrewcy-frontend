export const Public = [
  {
    text: "Landing Page",
    name: "LandingPage",
    route: "/",
    exact: true
  }
];

export const Private = [
  {
    text: "Home",
    name: "Home",
    route: "/home",
    exact: true,
    allowedRoles: ["user"]
  },
  {
    text: "Tasks",
    name: "Tasks",
    route: "/tasks",
    exact: false,
    allowedRoles: ["user"]
  }
];
