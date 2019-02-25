import Dashboard from "views/Dashboard/Dashboard.jsx";
import createAccountPage from "views/createAccountPage/createAccountPage.jsx";
import votePage from "views/votePage/votePage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard
  },
  {
    path: "/createAccountPage",
    name: "Create Account Page",
    icon: "nc-icon nc-diamond",
    component: createAccountPage
  },
  {
    path: "/votePage",
    name: "Vote Page",
    icon: "nc-icon nc-tile-56",
    component: votePage
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
