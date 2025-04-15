import Reviews from "./pages/Reviews/Reviews";
import NoPage from "./pages/NoPage/NoPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const routes = [
  {
    path: "/",
    label: "Dashboard",
    icon: "home",
    Element: <Dashboard />,
  },
  {
    path: "/Reviews",
    label: "Reviews",
    icon: "quote-down-square",
    Element: <Reviews />,
  },
  {
    path: "/Keywords",
    label: "Keywords",
    icon: "keyword",
    Element: <NoPage />,
  },
  {
    path: "/Web-crawler",
    label: "Web crawler",
    icon: "web",
    Element: <NoPage />,
  },
  {
    path: "/Notifications",
    label: "Notifications",
    icon: "notification",
    Element: <NoPage />,
  },
  {
    path: "/Settings",
    label: "Settings",
    icon: "setting",
    Element: <NoPage />,
  },
  {
    path: "/User-management",
    label: "User management",
    icon: "user",
    Element: <NoPage />,
  },
];

export default routes;
