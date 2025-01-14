import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LearningPage = () => {
    const lessons=useLoaderData();
    // console.log(lessons)
    return (
        <div className='my-10'>
           <section>
           <div className='my-10'>
                <h2 className="text-5xl text-center   font-bold">Journey to Fluent Turkish</h2>
                <p className=' font-semibold my-4 text-center'>"Step-by-Step Lessons to Build Your Vocabulary and Confidence"
                </p>

            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                lessons.map(lesson=> <div key={lesson.id} className="card p-5 hover:bg-gray-200 hover:text-black bg-[#A020F0] text-white ">
                     <Link to={`/lesson/${lesson.lesson_no}`} className="card-title text-2xl font-bold">{lesson.lesson}</Link>
                    
                </div>)
                }
               
            </div>
           </section>
           <section>
           <div className='my-16'>
                <h2 className="text-5xl text-center   font-bold">Tutorial</h2>
                <p className=' font-semibold my-4 text-center'>Learn Turkish Greetings with Animation
                </p>

            </div>
            <div className=' flex justify-center'>
            <iframe width="580" height="315"className="rounded-lg" src="https://www.youtube.com/embed/vGlEuv2bers?si=JCU4qhqwJ8Pva0Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
            <Link to={'/tutorials'} className="text-xl border w-fit mx-auto my-5  hover:bg-[#BFACE2]  border-[#BFACE2] px-4 py-2 rounded-full text-start flex items-center gap-2  bg-[#A020F0] text-white font-semibold"> View More</Link>
            </div>
           
           </section>

        </div>
    );
};

export default LearningPage;