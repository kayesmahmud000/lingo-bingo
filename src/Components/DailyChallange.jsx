import TestImg from '../assets/test.jpg'

const DailyChallange = () => {
    return (
        <div className='bg-[#ECE6F6] flex flex-col gap-5 p-10 rounded-md max-w-4xl mx-auto'>
            <div className=" lg:flex bg-white rounded-md p-5  shadow-xl" data-aos="fade-up"
                data-aos-easing="linear"
            >
               
                <div className="card-body">
                    <h2 className="card-title">
                        Word of the Day
                    </h2>
                    <p>Learn a new Turkish word every day, complete with pronunciation, meaning, and example sentences.</p>
                    <div className="card-actions justify-start">
                        <div className=" badge  py-4 bg-[#39045A] text-white">Learn Today's Word</div>

                    </div>
                    
                </div>
                <figure>
                    <img
                        className="h-[200px] rounded-md w-full object-cover"
                        src={TestImg}
                        alt="test" />
                </figure>
            </div>
            <div className=" lg:flex bg-white rounded-md p-5  shadow-xl" data-aos="fade-up"
                data-aos-easing="linear"
            >
                <figure>
                    <img
                        className="h-[200px] rounded-md w-full object-cover"
                        src={TestImg}
                        alt="test" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Grammar Exercise
                    </h2>
                    <p>Practice your Turkish grammar with daily exercises and quizzes tailored to your skill level.</p>
                    <div className="card-actions justify-start">
                        <div className=" badge py-4 bg-[#39045A] text-white">Start Exercise</div>

                    </div>
                </div>
            </div>
            <div className=" lg:flex bg-white rounded-md p-5  shadow-xl" data-aos="fade-up"
                data-aos-easing="linear"
            >
               
                <div className="card-body">
                    <h2 className="card-title">
                    Listening Challenge
                    </h2>
                    <p>Improve your listening skills with daily audio clips and comprehension questions.</p>
                    <div className="card-actions justify-start">
                        <div className=" badge  py-4 bg-[#39045A] text-white">Start Listening</div>

                    </div>
                </div>
                <figure>
                    <img
                        className="h-[200px] rounded-md w-full object-cover"
                        src={TestImg}
                        alt="test" />
                </figure>
            </div>
        </div>
    );
};

export default DailyChallange;