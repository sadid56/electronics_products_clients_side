import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";

const MainLayOut = () => {
    return ( 
        <div>
            <Navber></Navber>
            <div className="max-w-6xl mx-auto">
            <Outlet/>
            </div>
            <Footer/>
        </div>
     );
}
 
export default MainLayOut;