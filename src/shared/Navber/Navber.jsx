import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userPng from '../../assets/user.png'
import toast from "react-hot-toast";
import './navber.css'

const Navber = () => {
    const {user, logOut, toggleIsDark} = useContext(AuthContext);
    

    
    const handleLogOut =()=>{
        logOut()
        .then(() => {
            toast.success('Log Out success')
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }

  const navLinks = (
    <>
      
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
     
    </>
  );
  return (
    <div id="nav" className="navbar sticky top-0 z-20" style={{backdropFilter:"blur(10px)"}}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:text-black">
            {navLinks}
          </ul>
        </div>
        <img src="https://i.ibb.co/db5dSr3/4592564313260032-removebg-preview.png" className="w-20 md:w-24" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>


      <div className="navbar-end space-x-2">
      {/* <button onClick={toggleIsDark}>Light</button> */}
      <input onClick={toggleIsDark} type="checkbox" className="toggle" />

      {
        user ? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL ? user?.photoURL : userPng}/>
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
         <li className="text-2xl font-semibold text-center">{user?.displayName && user?.displayName  }</li>
          <li><button onClick={handleLogOut} className="btn mt-5">Log Out</button></li>
        </ul>
      </div> 
      :
      <Link to='/login'><button className="btn normal-case border-none text-white text-xl bg-gradient-to-r from-purple-500 to-pink-500">Login</button></Link>
      }

  </div>
      </div>
    
  );
};

export default Navber;
