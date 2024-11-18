import React, { useContext } from 'react';
import Logo from '../assets/logo_transparent.png'
import { Link, NavLink } from 'react-router-dom';
import userImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user,logOutUser}=useContext(AuthContext)
    
    return (
        <div className="navbar  container mx-auto py-5 ">
            <div className="navbar-start lg:w-[30%]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                        <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/startLearning"}>Start-learning</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/tutorials"}>Tutorials</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/aboutUs"}>About-us </NavLink>
                        {
                            user&& user?.email ?<NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/myProfile"}>My Profile </NavLink>:""
                        }
                    </ul>
                </div>
                <img className=' w-32 lg:w-60 ' src={Logo} alt="" />
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/startLearning"}>Start-learning</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/tutorials"}>Tutorials</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/aboutUs"}>About-us </NavLink>
                    {
                            user&& user?.email ?<NavLink className={({ isActive }) => isActive ? "text-[#A020F0] underline text-lg font-semibold" : "text-lg font-semibold"} to={"/myProfile"}>My Profile </NavLink>:""
                        }
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {user&& user?.email? <p className=' text-xl font-bold'>Welcome {user?.displayName}</p>:""}
               {
                user && user?.email ? <img className=' w-10 rounded-full'  src={user.photoURL} alt="" /> : <img className='rounded-full'  src={userImg} alt="" />
               }
                {
                    user&& user?.email? <button onClick={logOutUser} className="btn bg-[#A020F0] text-white font-semibold text-lg">Log Out </button> :<Link to={"/auth/login"} className="btn bg-[#A020F0] text-white font-semibold text-lg">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;