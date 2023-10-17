import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {googleLogin, signIn} = useContext(AuthContext)
     const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res => {
            console.log(res.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
     }



    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(res => {
            console.log(res.user)
            alert('sign in success')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
  return (
    <div>
        <h3 className="text-4xl font-bold text-center">Login</h3>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
           <img src="https://i.ibb.co/mTycFpQ/undraw-Login-re-4vu2.png" className="max-w-md" alt="" />

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <p>Don't have an account? <Link to='/registation' className="text-blue-600">Register</Link></p>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn btn-outline font-semibold">Continue With Google <FaGoogle></FaGoogle> </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
