import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div>
              <div className='my-16'>
                <h2 className="text-5xl text-center   font-bold">Getting Started with Interactive Learning Activities</h2>
                <p className=' font-semibold my-4 text-center'>Learn Turkish Greetings with Animation
                </p>
                <Link to={'/startLearning'} className="text-2xl my-10 border w-fit hover:bg-[#BFACE2]  border-[#BFACE2] p-1 rounded-full text-start flex items-center gap-2  font-bold"> <FaArrowLeftLong className='bg-[#BFACE2] p-1 rounded-full' /> Learn Vocabularies</Link>
            </div>
            <div className='grid grid-cols-3 gap-7 my-10'>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube.com/embed/vGlEuv2bers?si=JCU4qhqwJ8Pva0Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/Oz3eqGJ0DnE?si=RQ3vHUwRE8TJdXf_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/Tzs8uwrYWJQ?si=x8bJLEeMtyW2w0WU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/kfBeoWLCosA?si=uQIVebw-pT4MR30t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/ZOsrnj5seZw?si=9-k3de29-zmb0WMV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/FRE7DidglW0?si=oyZtNNiJ8amJ2YwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/_ncZ7-VWd5c?si=nJyQXOgoSJDcgG8L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className=' flex justify-center'>
            <iframe width="560" height="315" className="rounded-lg" src="https://www.youtube-nocookie.com/embed/ytwfWa1KUyY?si=H626cYNbM0an0_sm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        </div>
    );
};

export default Tutorial;