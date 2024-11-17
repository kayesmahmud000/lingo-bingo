
import BannerImg from '../assets/banner1.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#BFACE2] rounded-md px-7 py-16 my-10 ">
                <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                    <img
                        src={BannerImg}
                        className=" rounded-lg h-[200px] md:h-[300px] shadow-2xl" />
                    <div>
                        <h1 className="text-5xl w-5/6 font-bold">Who else wants word power for success?</h1>
                        <p className="py-6 text-gray-800 w-5/6 text-lg">
                        Whether you realize it or not, every time you speak, people use your language to instantly “tip them off” about how educated, competent, and successful you are. Therefore, it’s not surprising that study after study has shown that a powerful vocabulary is directly linked to success, status, and income. 
                        </p>
                        <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Let's Learn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;