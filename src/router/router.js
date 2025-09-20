import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import Login from "../components/auth/Login.jsx"
import Register from "../components/user/Register.jsx";
import Email from "../components/user/Email.jsx";
import Credential from "../components/user/Credential.jsx";
import ResetPassword from "../components/user/ResetPassword.jsx";
import FindEmail from "../components/user/FindEmail.jsx";

const router = new createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: []
    },
    {
        path: "/auth/login",
        Component:Login
    },
    {
        path: "/user/register",
        Component: Register,
        children: [
            {
                path: "email",
                Component: Email
            },
            {
                path: 'credential',
                Component: Credential
            },
            { 
                index: true, 
                Component: Email 
            }
        ]
    },
    {
        path: 'user/reset-password',
        Component: ResetPassword,
        children: [
            {
                path:'find-email',
                Component: FindEmail
            },
            {
                index: true,
                Component: FindEmail
            }
        ]
    }
]);

export default router