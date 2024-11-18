import AboutImg from '../assets/about1.jpg'

const About = () => {
    return (
        <div className="hero p-10 rounded-md bg-[#ECE6F6]">
            
            <div className="flex flex-col gap-10  lg:flex-row">
                <img
                    src={AboutImg}
                    className="lg:max-w-lg lg:h-[300px] rounded-lg shadow-2xl" />
                <div>
                    <h2 className="text-3xl w-4/6 font-bold">Welcome to Lingo Bingo: Your Gateway to Learning Turkish!</h2>
                    <p className="py-6 w-4/6">
                    At Lingo Bingo, we believe that learning a new language should be an enjoyable and interactive experience. Our mission is to help users expand their vocabulary and improve their communication skills in Turkish, one of the world's most fascinating languages. With our user-friendly platform, you can dive into the richness of Turkish culture and language with ease and confidence.
                    </p>
                    <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Let's Learn</button>
                </div>
            </div>
        </div>
    );
};

export default About;