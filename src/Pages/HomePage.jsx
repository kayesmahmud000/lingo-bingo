import React from 'react';
import Slider from '../Components/Slider';
import About from '../Components/About';
import SuccessCard from '../Components/SuccessCard';

const HomePage = () => {
    return (
        <div>
            <section>
            <Slider></Slider>
            </section>
            <section className='my-10'>
            <h1 className="text-5xl text-center my-10 font-bold">About</h1>
                <About></About>
            </section>
            <section className='my-10   py-5'>
            <div className='my-10'>
            <h1 className="text-5xl text-center   font-bold">Success Metrics </h1>
            <p className=' font-semibold my-4 text-center'>Quantifying Our Journey to Language Mastery</p>
            </div>
            <SuccessCard></SuccessCard>
            </section>
        </div>
    );
};

export default HomePage;