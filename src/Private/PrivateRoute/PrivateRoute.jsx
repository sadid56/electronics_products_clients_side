import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="flex items-center justify-center h-[80vh]"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
}
 
export default PrivateRout;