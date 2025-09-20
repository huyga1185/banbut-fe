import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import Login from "../components/auth/Login.jsx"

const router = new createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/auth/login",
                Component:Login
            }
        ]
    }
]);

export default router