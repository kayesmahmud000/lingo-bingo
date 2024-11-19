import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const UpdateInfo = () => {
    const{updateProfileUser}=useContext(AuthContext);
const navigate=useNavigate()
    const handleUpdateInfoFrom=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        // console.log(name,photo)
        updateProfileUser({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/myProfile")
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode ,errorMessage)
               
              });

    }
    return (
        <div>
           <div className='lg:min-h-[730px]'>
            <div className='max-w-3xl  mx-auto my-10 p-5 py-10 flex flex-col rounded-lg justify-center items-center gap-6 bg-[#BFACE2]'>
                <h1 className='text-3xl font-bold text-center'> Update Your Information </h1>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 ">

                <form onSubmit={handleUpdateInfoFrom}  className="card-body">
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
                    <div className="form-control mt-6">
                    <button className='btn bg-[#A020F0] px-4 text-white rounded-full'> Update Information</button>
                    </div>
                </form>
              
              
            </div>
               

            </div>
            
        </div>
        </div>
    );
};

export default UpdateInfo;