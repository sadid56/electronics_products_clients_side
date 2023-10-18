import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../authantication/Login";
import Registation from "../authantication/Registation";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Private/AddProduct/AddProduct";
import ProductPage from "../Private/ProductPage/ProductPage";
import BrandSlider from "../shared/BrandSlider/BrandSlider";

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
                loader: ()=>fetch('/data.json')

            },
            // {
            //     path: '/brandSlider/:id',
            //     element: <BrandSlider/>,
            //    loader: ()=>fetch('data.json')

            // }
        ]
    }
])
export default Routers;