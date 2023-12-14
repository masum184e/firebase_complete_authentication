import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
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