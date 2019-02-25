import Dashboard from "views/Dashboard/Dashboard.jsx";
import createAccountPage from "views/createAccountPage/createAccountPage.jsx";
import votePage from "views/votePage/votePage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard
  },
  {
    path: "/createAccountPage",
    name: "Create Account Page",
    icon: "nc-icon nc-simple-add",
    component: createAccountPage
  },
  {
    path: "/votePage",
    name: "Vote Page",
    icon: "nc-icon nc-check-2",
    component: votePage
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
