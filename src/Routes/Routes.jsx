import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRouter from "./PrivetRouter";
import BannersImage from "../Pages/Sheard/BannersImage/BannersImage";
import Operation from "../Pages/Sheard/Operation/Operation";
import Secret from "./Secret/Secret";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/bannersImg",
                element: <BannersImage />
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "secret",
                element: <PrivetRouter><Secret></Secret></PrivetRouter>
            },
            {
                path: "/operation",
                element: <Operation></Operation>
            }
        ]
    },
]);