import React, { useState } from 'react';

const WordCard = ({ word }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div>
            <div className="card hover:bg-gray-100  bg-[#BFACE2] ">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold"> Word: {word.word}</h2>
                    <p className='font-semibold'><span className='font-semibold text-xl'>Pronunciation</span> : {word.pronunciation}</p>
                    <p className='font-semibold'><span className='font-semibold text-xl'>Meaning</span> : {word.meaning}</p>
                    <p className='font-semibold'><span className='font-semibold text-xl'>Part_of_speech</span> :{word.part_of_speech}</p>
                    {/* <p className='font-semibold'><span className='font-semibold text-xl'>Difficulty</span> : {word.difficulty}</p>
                      <p className='font-semibold'><span className='font-semibold text-xl'>When to say</span>: {word.when_to_say}</p>
                      <p className='font-semibold'><span className='font-semibold text-xl'>Example</span>: {word.example}</p> */}

                    <div className="card-actions justify-start">
                        <button onClick={() => setIsModalOpen(true)} className=" text-xl font-semibold border hover:bg-[#BFACE2] border-[#BFACE2] btn">When to say</button>
                    </div>
                </div>
            </div>
            { isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white  space-y-3  justify-center items-start p-6 rounded-md shadow-md">

                            <h2 className="card-title text-2xl font-bold"> Word: {word.word}</h2>
                           
                            <p className='font-semibold text-lg'><span className='font-semibold text-xl'>Meaning</span> : {word.meaning}</p>
                            
                            <p className='font-semibold'><span className='font-semibold text-xl'>When to say</span>: {word.when_to_say}</p>
                            <p className='font-semibold'><span className='font-semibold text-xl'>Example</span>: {word.example}</p>
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-[#8332C5] text-white rounded-md">Close</button>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default WordCard;