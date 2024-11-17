import BannerImg from "../assets/banner2.jpg"

const BannerSecond = () => {
    return (
        <div>
        <div className="hero bg-[#BFACE2] rounded-md px-7 py-16 my-10 ">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className=" rounded-lg h-[200px] md:h-[300px] shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold w-5/6">Learn words automatically and remember them forever</h1>
                    <p className="py-6 w-5/6 text-gray-800 text-lg">
                    Wordela’s Learn technology uses AI and scientifically proven learning algorithms to make mastering vocabulary automatic.The results are almost magical
                    </p>
                    <button className="btn bg-[#A020F0] text-white font-semibold text-lg">Let's Learn</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BannerSecond;