import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import { Pricing } from "../pages/pricing";
import { Login } from "../pages/login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/pricing",
        element: <Pricing/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    ]);
    