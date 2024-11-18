import React from 'react';
import Slider from '../Components/Slider';
import About from '../Components/About';
import SuccessCard from '../Components/SuccessCard';
import InteractiveLearn from '../Components/InteractiveLearn';
import DailyChallange from '../Components/DailyChallange';

const HomePage = () => {
    return (
        <div>
            <section>
            <Slider></Slider>
            </section>
            <section className='my-10'data-aos="fade-up"
                data-aos-easing="linear">
            <h1 className="text-5xl text-center my-10 font-bold">About</h1>
                <About></About>
            </section>
            <section className='my-10   py-5' data-aos="fade-up"
                data-aos-easing="linear">
            <div className='my-10'>
            <h1 className="text-5xl text-center   font-bold">Success Metrics </h1>
            <p className=' font-semibold my-4 text-center'>Quantifying Our Journey to Language Mastery</p>
            </div>
            <SuccessCard></SuccessCard>
            </section>
            <section className='my-10' data-aos="fade-up"
                data-aos-easing="linear">
            <div className='my-10'>
            <h2 className="text-5xl text-center   font-bold">Interactive Learning Activities</h2>
            <p className=' font-semibold my-4 text-center'>Boost your Turkish language skills with fun and engaging activities designed to make learning enjoyable.</p>
            </div>
                <InteractiveLearn></InteractiveLearn>
            </section>
            <section className='my-10 ' data-aos="fade-up"
                data-aos-easing="linear">
            <div className='my-10'>
            <h2  className="text-5xl text-center   font-bold">Daily Practice Challenges</h2>
            <p className=' font-semibold my-4 text-center'>Stay motivated with daily challenges designed to enhance your Turkish language skills across various areas.</p>
            </div>
                <DailyChallange></DailyChallange>
            </section>
        </div>
    );
};

export default HomePage;