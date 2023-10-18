import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../authantication/Login";
import Registation from "../authantication/Registation";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Private/AddProduct/AddProduct";
import ProductPage from "../Private/ProductPage/ProductPage";
import BrandSlider from "../shared/BrandSlider/BrandSlider";
import ProductDetails from "../Private/ProductPage/ProductDetails";
import UpdateProduct from "../Private/UpdateProduct/UpdateProduct";

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
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
            // {
            //     path: '/brandSlider/:id',
            //     element: <BrandSlider/>,
            //    loader: ()=>fetch('data.json')

            // }
        ]
    }
])
export default Routers;