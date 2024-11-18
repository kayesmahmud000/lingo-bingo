import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import WordCard from '../Components/WordCard';


const LessonNoPage = () => {
    const allLessons = useLoaderData()
    const { lesson } = useParams()
    const [lessonWord, setLessonWord] = useState([]);
   
    useEffect(() => {
        if (lesson) {
            const filterLessonWord = [...allLessons].filter(lessonWord => lessonWord.lesson_no == lesson);
            setLessonWord(filterLessonWord)
        }
    }, [allLessons, lesson])
    console.log
    

    return (
        <div className='my-10'>
            <div className='flex flex-col-reverse md:flex-row gap-10 items-center'>
                <Link to={'/startLearning'} className="text-2xl border  hover:bg-[#BFACE2]  border-[#BFACE2] p-1 rounded-full text-start flex items-center gap-2  font-bold"> <FaArrowLeftLong className='bg-[#BFACE2] p-1 rounded-full' /> Back to Lesson</Link>
                <h2 className="text-4xl  text-center  font-bold">Lesson-{lesson}</h2>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
                {
                    lessonWord.map(word =><WordCard word={word}></WordCard>)
                    
                }
                 
               
            </div>
        </div>
    );
};

export default LessonNoPage;