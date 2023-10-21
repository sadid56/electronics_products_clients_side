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
import MyCart from "../Private/My Cart/MyCart";
import PrivateRout from "../Private/PrivateRoute/PrivateRoute";
import CustomarRivew from "../Pages/CustomarRivew/CustomarRiew";

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
                element: <PrivateRout><AddProduct/></PrivateRout>
            },
            {
                path: '/productPage/:id',
                element: <ProductPage/>,
                loader: ()=>fetch('/data.json')

            },
            {
                path: '/productDetails/:id',
                element: <PrivateRout><ProductDetails></ProductDetails></PrivateRout>,
                loader: ({params})=>fetch(`https://assignment10-server-side-6pflikpeg-sadids-projects.vercel.app/products/${params.id}`)

            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRout><UpdateProduct></UpdateProduct></PrivateRout>,
                loader: ({params})=>fetch(`https://assignment10-server-side-6pflikpeg-sadids-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRout><MyCart></MyCart></PrivateRout>,
                loader: ()=> fetch('https://assignment10-server-side-6pflikpeg-sadids-projects.vercel.app/myCart')
            },
            {
                path: 'customarRivew',
                element: <CustomarRivew></CustomarRivew>,
                
            }
            
        ]
    }
])
export default Routers;