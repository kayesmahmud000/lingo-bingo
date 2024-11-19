import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from './Banner';
import BannerSecond from './BannerSecond';
import BannerThird from './BannerThird';

const Slider = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      
      
    >
      <SwiperSlide><Banner></Banner></SwiperSlide>
      <SwiperSlide><BannerSecond></BannerSecond></SwiperSlide>
      <SwiperSlide><BannerThird></BannerThird></SwiperSlide>
     
      
    </Swiper>
    );
};

export default Slider;