import TestImg from '../assets/test.jpg'
import quizImg from '../assets/Quizjpg.jpg'
import flashImg from '../assets/flasCard.png'
import LesseningImg from '../assets/lessaning.jpg'

const InteractiveLearn = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-4 gap-5'>
            <div className=" bg-[#BFACE2] rounded-md p-5  shadow-xl" data-aos="fade-up"
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
                    Listening Comprehension
                    </h2>
                    <p>Listen to native Turkish speakers and answer questions to improve your listening skills.</p>
                    <div className="card-actions justify-start">
                        <div className=" badge badge-outline bg-[#39045A] text-white">Play Now</div>
                        
                    </div>
                </div>
            </div>
            <div className="bg-[#BFACE2] rounded-md p-5  shadow-xl" data-aos="fade-up"
                data-aos-easing="linear"
               >
                <figure>
                    <img
                        className="h-[200px] rounded-md w-full object-cover"
                        src={quizImg}
                        alt="quiz" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Flashcards
                    </h2>
                    <p>Use digital flashcards to review and memorize Turkish vocabulary effectively.</p>
                    <div className="card-actions justify-start">
                        <div className=" badge badge-outline bg-[#39045A] text-white">Play Now</div>
                        
                    </div>
                </div>
            </div>
            <div className="bg-[#BFACE2] rounded-md p-5   shadow-xl" data-aos="fade-up"
                data-aos-easing="linear"
                >
                <figure>
                    <img
                        className="h-[200px] rounded-md w-full object-cover"
                        src={flashImg}
                        alt="flash" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Grammar Quizzes
                    </h2>
                    <p>Take quizzes to test your understanding of Turkish grammar rules and sentence structures.</p>
                    
                    <div className="card-actions justify-start">
                        <div className=" badge badge-outline bg-[#39045A]  text-white">Play Now</div>
                        
                    </div>
                </div>
            </div>
            <div className=" bg-[#BFACE2] rounded-md p-5  shadow-xl" data-aos="fade-up"
                data-aos-easing="linear"
                >
                <figure>
                    <img
                        className="h-[200px] rounded-md w-full object-cover"
                        src={LesseningImg}
                        alt="lessening" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Vocabulary Matching Game 
                    </h2>
                    <p>Match Turkish words with their English meanings to test and improve your vocabulary retention.</p>
                    
                    <div className="card-actions justify-start">
                        <div className=" badge badge-outline bg-[#39045A] text-white">Play Now</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveLearn;