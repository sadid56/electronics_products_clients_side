import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayout";
import Home from "../Pages/Home/Home";
import BrandName from "../Pages/BrandName/BrandName";
import Login from "../authantication/Login";
import Registation from "../authantication/Registation";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registation',
                element: <Registation/>
            }
        ]
    }
])
export default Routers;