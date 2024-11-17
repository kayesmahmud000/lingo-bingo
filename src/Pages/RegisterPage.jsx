import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
             <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center my-5'>Register Your Account</h2>
                <div className=' divider px-10'></div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold '>Already Have An Account ? <Link
                 className='text-[#39045A] underline' to={"/auth/login"}> Login</Link></p>
                <div class="divider px-10 ">OR</div>
               <div className='flex justify-center'>
               <button className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-7'> <FcGoogle /> Continue With Google</button>
               </div>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;