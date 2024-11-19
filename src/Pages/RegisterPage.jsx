import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const {setUser ,createNewUser ,loginWithGoogle,  updateProfileUser}=useContext(AuthContext);
    const [errorMessage, setErrorMessage]=useState("")
    const navigate=useNavigate()
    const handleRegisterFrom=(e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name =form.get("name")
        const photo =form.get("photo")
        const email =form.get("email")
        const password=form.get("password")
        setErrorMessage("")

        if(password.length<6){
            setErrorMessage('Password must be at least 6 character');
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/;

        if(!passwordRegex.test(password)){
            setErrorMessage("Must have an Uppercase letter and Must have an Lowercase letter")
            return
        }
        console.log({name, email, password, photo});
        
        createNewUser(email ,password)
        .then(result=>{
            const user =result.user
            setUser(user)
            updateProfileUser({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/")
                toast.success(`${user.displayName}, Welcome to Lingo Bingo`);;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode ,errorMessage)
               
              });
            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode ,errorMessage)
            setErrorMessage(errorMessage)
            toast.error("Register Filed");
          });
        
    
    }
    const handleGoogleLogin=()=>{
        loginWithGoogle()
        .then(result=>{
            const user=result.user;
            setUser(user)
           
            navigate("/")
            toast.success(`${user.displayName}, Welcome to Lingo Bingo`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode ,errorMessage)
          });
    }
    return (
        <div>
             <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center my-5'>Register Your Account</h2>
                <div className=' divider px-10'></div>
                <form onSubmit={handleRegisterFrom} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input type="text"
                         placeholder="name"
                         name="name"
                          className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Photo URL</span>
                        </label>
                        <input type="text" 
                        name="photo"
                        placeholder="photo url" 
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email"
                        name='email'
                         placeholder="email" 
                         className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password"
                        name='password'
                        placeholder="password" 
                        className="input input-bordered" required />
                        {
                            errorMessage&& <label className="label">
                            <span className="label-text text-red-500 text-sm">{errorMessage}</span>
                        </label>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold '>Already Have An Account ? <Link
                 className='text-[#39045A] underline' to={"/auth/login"}> Login</Link></p>
                <div class="divider px-10 ">OR</div>
               <div className='flex justify-center'>
               <button onClick={handleGoogleLogin} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-7'> <FcGoogle /> Continue With Google</button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;