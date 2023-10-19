import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <p>Loading...</p>
    }
    if(user){
        return children;
    }


    return <Navigate to='/login'></Navigate>
}
 
export default PrivateRout;