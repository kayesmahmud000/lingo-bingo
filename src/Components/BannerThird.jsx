import BannerImg from '../assets/banner3.png'

const BannerThird = () => {
    return (
        <div>
            <div className="hero bg-[#BFACE2] rounded-md px-7 py-16 my-10 ">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className=" rounded-lg h-[200px] md:h-[300px] shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold w-4/6">A scientific and fun way to improve vocabulary</h1>
                    <p className="py-6 w-5/6 text-gray-800 text-lg">
                    Play games and compete in activities on your own or with participants from around the globe. With our advanced teaching algorithm and study tools, get ready for your vocabulary to expand!
                    </p>
                    <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Let's Learn</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BannerThird;