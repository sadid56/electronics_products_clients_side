import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Registation = () => {
    const {googleLogin, createUser, profileUpdate} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(() => {
            toast.success('Google continue success !')
            navigate('/')
        })
        .catch(error =>{
            toast.error(error.message);
        })
     }

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // console.log(name, photo,email, password);

        //! validation
        if(password.length < 6){
          return toast.error('password at lest 6 character')
        }
        // const regexCapital = /^[A-Z]+$/
        // if(regexCapital.test(password)){
        //   return alert('Please provide me a capital letter !')
        // }
        const regex = /(?=.*[A-Z])(?=.*[a-z])/
        if(!regex.test(password)){
          return toast.error('Please provide me a special character!')
        }


        //! create user
        createUser(email, password)
        .then( () => {
            profileUpdate(name, photo)
            .then()
            .catch(error => {
                toast.error(error.message);
            })
            toast.success('create user success')
            navigate('/')
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return ( 
        <div>
        <h3 className="text-4xl font-bold text-center">Register</h3>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
           <img src="https://i.ibb.co/ZH8H8gw/undraw-Access-account-re-8spm.png" className="md:max-w-md" alt="" />

          </div>
          <div className="card p-5 flex-shrink-0 w-full max-w-sm border rounded-md bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Your photo"
                  className="input input-bordered"
                  required
                  name="photo"
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
                <button type="submit" className="btn normal-case border-none text-white text-xl bg-gradient-to-r from-purple-500 to-pink-500">Registation </button>
              </div>
              <p>Already have an account? <Link to='/login' className="text-blue-600">login</Link></p>
            </form>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn btn-outline font-semibold">Continue With Google <FaGoogle></FaGoogle> </button>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Registation;