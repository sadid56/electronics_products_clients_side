import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return ( 
        <div className="flex justify-center h-[100vh] items-center">
            <div className="w-fit text-center">
                <h2 className="text-red-500 text-3xl">This page not available !</h2>
                 <button className="btn btn-info mt-5" onClick={()=> navigate('/')}>Go Home</button>
            </div>
        </div>
     );
}
 
export default ErrorPage;