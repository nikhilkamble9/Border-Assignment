import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide style={{ width: "100rem" }}>
        <img
          className="imageslider"
          src="https://storiesflistgv2.blob.core.windows.net/stories/2020/10/BBDNewsUpdate_FKS_v1.jpg"
          alt="img1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="imageslider"
          src="https://assets.mspimages.in/wp-content/uploads/2019/09/Flipkart-Big-Billion-Day-Banner-01.jpg"
          alt="img1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="imageslider"
          src="https://images.moneycontrol.com/static-mcnews/2020/10/flipkart-big-billion-days-sale.jpg"
          alt="img1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="imageslider"
          src="https://www.dealsshutter.com/blog/wp-content/uploads/2017/09/flipkart-big-billion-days-sale-1.jpg"
          alt="img1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
