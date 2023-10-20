import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";

const MainLayOut = () => {
    const {isDark} = useContext(AuthContext)
//    console.log('toggle', toggleIsDark);
    return ( 
        <div className={isDark ? '' : 'bg-black text-white'} style={{padding:'0px 10px'}}>
            <Navber></Navber>
            <div className="max-w-6xl mx-auto">
            <Outlet/>
            </div>
            <Footer/>
            <Toaster></Toaster>
        </div>
     );
}
 
export default MainLayOut;