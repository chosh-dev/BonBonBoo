import ItemPage from "./views/ItemPage.js";
import TestPage from "./views/TestPage.js";
import LandingPage from "./views/LandingPage.js";

const router = async () => {
  const $root = document.querySelector("#app");
  const routes = [
    { path: "/", view: LandingPage },
    { path: "/test", view: TestPage },
    { path: "/item", view: ItemPage },
    { path: "/home", view: LandingPage },

  ];

  const potentialMathces = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMathces.find(
    (potentialMathces) => potentialMathces.isMatch
  );

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  new match.route.view($root)
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
