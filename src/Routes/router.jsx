import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
