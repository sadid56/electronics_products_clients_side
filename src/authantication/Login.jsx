import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const {googleLogin, signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
     const handleGoogleLogin = ()=>{
        googleLogin()
        .then(() => {
            toast.success('Google login success')
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
            toast.error(error.message);
        })
     }



    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
        .then(() => {
            toast.success('Login success')
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
  return (
    <div>
        <h3 className="text-4xl font-bold text-center">Login</h3>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
           <img src="https://i.ibb.co/mTycFpQ/undraw-Login-re-4vu2.png" className="md:max-w-md" alt="" />

          </div>
          <div className="card p-4 flex-shrink-0 w-full max-w-sm border rounded-md bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn normal-case border-none text-white text-xl bg-gradient-to-r from-purple-500 to-pink-500">Login</button>
              </div>
              <p>Don't have an account? <Link to='/registation' className="text-blue-600">Register</Link></p>
            </form>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn btn-outline font-semibold">Continue With Google <FaGoogle></FaGoogle> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
