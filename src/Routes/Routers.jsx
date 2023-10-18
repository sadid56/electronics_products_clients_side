import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../authantication/Login";
import Registation from "../authantication/Registation";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Private/AddProduct/AddProduct";
import ProductPage from "../Private/ProductPage/ProductPage";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage/>,
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
            },
            {
                path: '/addProduct',
                element: <AddProduct/>
            },
            {
                path: '/productPage/:id',
                element: <ProductPage/>,
                loader: ({params})=>fetch(`data.json/${params.id}`)

            }
        ]
    }
])
export default Routers;