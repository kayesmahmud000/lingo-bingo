import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SuccessCard = () => {
    return (
        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-5 rounded-md lg:gap-14  bg-[#ECE6F6] py-10 justify-between px-8'>
            <div className="card bg-[#39045A]  text-white " 
                data-aos="fade-up"
                data-aos-easing="linear"  data-aos-duration="1000">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Happy User!</h2>
                    <div className='flex justify-center'>
                        <CountUp end={10}
                            duration={4}

                            className='text-4xl flex justify-center font-bold' /><span className='text-4xl font-bold'>K+</span>
                    </div>
                </div>
            </div>
            <div className="card bg-[#39045A] text-white "  data-aos="fade-down"
                data-aos-easing="linear"  data-aos-duration="1000">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl"> Lesson</h2>
                    <div className='flex justify-center'>
                        <CountUp end={10}
                            duration={4}
                            className='text-4xl  flex justify-center font-bold' /> <span className='text-4xl font-bold'>+</span>
                    </div>
                </div>
            </div>
            <div className="card bg-[#39045A] text-white "  data-aos="fade-up"
                data-aos-easing="linear"  data-aos-duration="1000">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Vocabulary </h2>
                    <div className='flex justify-center'>
                        <CountUp end={200}
                            duration={5}
                            className='text-4xl flex justify-center font-bold' /><span className='text-4xl font-bold'>+</span>
                    </div>
                </div>
            </div>
            <div className="card bg-[#39045A] text-white " data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Tutorial</h2>
                    <div className='flex justify-center'>
                        <CountUp end={9}
                            duration={4}
                            className='text-4xl flex  font-bold' /><span className='text-4xl  font-bold'>+</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SuccessCard;