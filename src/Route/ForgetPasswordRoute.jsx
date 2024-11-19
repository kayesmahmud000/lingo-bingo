
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const ForgetPasswordRoute = () => {
  const { resetPassword } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate= useNavigate()


  const handleResetForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Reset password email sent, check your Gmail.");
        navigate("/auth/login");
        setTimeout(() => {
           window.open('https://mail.google.com')
          }, 2000);
          
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.error("Reset password failed.");
        setErrorMessage(errorMessage);
      });
  }

  return (
    <div className='bg-gray-200'>
      <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <h2 className='text-3xl font-bold text-center my-10'>Reset Your Password</h2>
          <form onSubmit={handleResetForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            {errorMessage && (
              <label className="label">
                <span className="label-text text-sm text-red-400">{errorMessage}</span>
              </label>
            )}
            <div className="form-control mt-6">
              <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordRoute;
