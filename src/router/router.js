import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import Login from "../components/auth/Login.jsx"
import Register from "../components/user/Register.jsx";
import Email from "../components/user/Email.jsx";
import Credential from "../components/user/Credential.jsx";
import ResetPassword from "../components/user/ResetPassword.jsx";
import FindEmail from "../components/user/FindEmail.jsx";
import ChangePassword from "../components/user/ChangePassword.jsx";
import Index from "../components/Index.jsx";

const router = new createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "index",
                Component: Index
            }, 
            {
                index: true,
                Component: Index
            }
        ]
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
                path:'change-password',
                Component: ChangePassword
            },
            {
                index: true,
                Component: FindEmail
            }
        ]
    }
]);

export default router