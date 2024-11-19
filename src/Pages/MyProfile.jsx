import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
    const {user}=useContext(AuthContext);
    console.log(user)
    return (
        <div className='lg:min-h-[730px]'>
            <div className='max-w-3xl  mx-auto my-10 p-5 py-10 flex flex-col rounded-lg justify-center items-center gap-6 bg-[#BFACE2]'>
                <h1 className='text-3xl font-bold text-center'> {user.displayName}, Welcome to Lingo Bingo..!  </h1>
                <div> <img className='rounded-full w-24 mt-5' src={user.photoURL} alt="" /></div>
                <div>
                <h2 className='text-xl font-bold text-center'>Name: {user.displayName}  </h2>
                <p className='text-xl font-semibold text-center'>Email: {user.email}  </p>
                </div>
                <div><button className='btn bg-[#A020F0] px-4 text-white rounded-full'> Update Profile</button></div>

            </div>
            
        </div>
    );
};

export default MyProfile;