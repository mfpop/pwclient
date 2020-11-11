//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutPublic from "../layouts/LayoutPublic";
import LayoutDashboard from "../layouts/LayoutDashboard";

//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

// Public Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// MPD Pages - General

//MPD Pages - Engineering
import EngHome from "../pages/engineering/EngHome";
import EngProcess from "../pages/engineering/EngProcess";
import VisualAids from "../pages/engineering/VisualAids";
import GenHome from "../pages/general/GenHome";

//MPD Pages - HR

//MPD Pages - Maintenance

//MPD Pages - Materials

//MPD Pages - Production

//MPD Pages - Quality

//MPD Pages - SH

//Error pages
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/eng",
    component: LayoutDashboard,
    exact: false,
    routes: [
      {
        path: "/eng",
        component: EngHome,
        exact: true,
      },
      {
        path: "/eng/process",
        component: EngProcess,
        exact: true,
      },
      {
        path: "/eng/layout",
        component: Contact,
        exact: true,
      },
      {
        path: "/eng/balancing",
        component: Contact,
        exact: true,
      },
      {
        path: "/eng/flowchart",
        component: Contact,
        exact: true,
      },
      {
        path: "/eng/mat-policy",
        component: Contact,
        exact: true,
      },
      {
        path: "/eng/visual-aids",
        component: VisualAids,
        exact: true,
      },
      {
        path: "/eng/materials-mro",
        component: Contact,
        exact: true,
      },
      {
        path: "/eng/skills-sheet",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/gen",
    component: LayoutDashboard,
    exact: false,
    routes: [
      {
        path: "/gen",
        component: GenHome,
        exact: true,
      },
      {
        path: "/gen/training",
        component: Home,
        exact: true,
      },
      {
        path: "/gen/holidays",
        component: Contact,
        exact: true,
      },
      {
        path: "/gen/policy",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutPublic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contacts",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
