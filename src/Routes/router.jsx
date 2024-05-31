import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
    }, {
        path: "/login",
        element: <Login />,
        errorElement: <NotFound />
    }, {
        path: "/registration",
        element: <Registration />,
        errorElement: <NotFound />
    }
])

export default router;