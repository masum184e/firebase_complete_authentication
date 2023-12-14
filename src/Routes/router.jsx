import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path: "/",
    }, {
        path: "/login",
        element: <Login />
    }, {
        path: "/registration",
        element: <Registration />
    }
])

export default router;