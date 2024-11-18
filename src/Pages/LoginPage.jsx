
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';


const LoginPage = () => {

    const {setUser ,loginWithPassword,loginWithGoogle}=useContext(AuthContext);
    const location=useLocation()
    const [errorMessage, setErrorMessage]=useState("")
    const navigate =useNavigate()
    const handleLoginFrom=(e)=>{
        e.preventDefault();

        const form=new FormData(e.target);
        const email =form.get("email");
        const password=form.get("password")
        loginWithPassword(email,password)
        .then(result=>{
            const user= result.user;
            setUser(user);
            navigate(location?.state ? location?.state : "/")
            toast.success(`${user.displayName}, Welcome to Lingo Bingo`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode ,errorMessage)
            toast.error("Login failed");
            setErrorMessage(errorMessage)
          });

    }
    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            const user=result.user;
            setUser(user)
            navigate(location?.state ? location?.state : "/")
            toast.success(`${user.displayName}, Welcome to Lingo Bingo`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode ,errorMessage)
          });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center my-10'>Login Your Account</h2>
                <div className=' divider px-10'></div>
                <form onSubmit={handleLoginFrom} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email"
                        name='email'
                        placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password"
                        name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt  link link-hover">Forgot password?</a>
                        </label>
                       {
                        errorMessage&&  <label className="label">
                        <span className="label-text  text-red-500 text-sm">{errorMessage}</span>
                        </label>
                       }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold '>Don’t Have An Account ? <Link className='text-[#39045A] underline' to={"/auth/register"}> Register</Link></p>
                <div class="divider px-10 mb-4">OR</div>
               <div className='flex justify-center'>
               <button onClick={handleGoogleLogin} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-7'> <FcGoogle /> Continue With Google</button>
               </div>
            </div>
        </div>
    );
};

export default LoginPage;