module.exports.public = [
  {
    text: "Landing Page",
    name: "LandingPage",
    route: "/",
    exact: true,
  }
];

module.exports.private = [
  {
    text: "Home",
    name: "Home",
    route: "/home",
    exact: false,
    allowedRoles: ['user']
  }
];
