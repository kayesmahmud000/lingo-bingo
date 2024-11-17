
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center my-10'>Login Your Account</h2>
                <div className=' divider px-10'></div>
                <form className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt  link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold '>Don’t Have An Account ? <Link className='text-[#39045A] underline' to={"/auth/register"}> Register</Link></p>
                <div class="divider px-10 mb-4">OR</div>
               <div className='flex justify-center'>
               <button className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-7'> <FcGoogle /> Continue With Google</button>
               </div>
            </div>
        </div>
    );
};

export default LoginPage;