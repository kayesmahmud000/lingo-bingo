import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";


const LessonNoPage = () => {
    const allLessons=useLoaderData()
    const {lesson}=useParams()
    const [lessonWord ,setLessonWord]=useState([]);
    

    useEffect(()=>{
        if(lesson){
            const filterLessonWord= [...allLessons].filter(lessonWord=>lessonWord.lesson_no ==lesson);
        setLessonWord(filterLessonWord)
        }
    },[allLessons , lesson])
    
    return (
        <div className='my-10'>
           <div className='flex gap-10 items-center'> 
            <Link to={'/startLearning'} className="text-2xl border  hover:bg-[#BFACE2]  border-[#BFACE2] p-1 rounded-full text-start flex items-center gap-2  font-bold"> <FaArrowLeftLong className='bg-[#BFACE2] p-1 rounded-full'/> Back to Lesson</Link>
           <h2 className="text-4xl  text-center  font-bold">Lesson-{lesson}</h2>
            </div> 
           
           <div className='grid grid-cols-4 gap-4 my-10'>
            {
                lessonWord.map(word=> <div className="card hover:bg-gray-100  bg-[#BFACE2] ">
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold"> Word: {word.word}</h2>
                      <p className='font-semibold'><span className='font-semibold text-xl'>Pronunciation</span> : {word.pronunciation}</p>
                      <p className='font-semibold'><span className='font-semibold text-xl'>Meaning</span> : {word.meaning}</p>
                      <p className='font-semibold'><span className='font-semibold text-xl'>Part_of_speech</span> :{word.part_of_speech}</p>
                      <p className='font-semibold'><span className='font-semibold text-xl'>Difficulty</span> : {word.difficulty}</p>
                      {/* <p className='font-semibold'><span className='font-semibold text-xl'>When to say</span>: {word.when_to_say}</p>
                      <p className='font-semibold'><span className='font-semibold text-xl'>Example</span>: {word.example}</p> */}
                      
                      <div className="card-actions justify-start">
                        <button className=" text-xl font-semibold border hover:bg-[#BFACE2] border-[#BFACE2] btn">When to say</button>
                      </div>
                    </div>
                  </div>)
            }
           </div>
        </div>
    );
};

export default LessonNoPage;