import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


import slide2 from "../../../assets/plant/plant_2.jpg";
import slide3 from "../../../assets/plant/plant_3.jpg";
import slide4 from "../../../assets/plant/plant_4.jpg";
import slide5 from "../../../assets/plant/plant_5.jpg";
import slide6 from "../../../assets/plant/plant_6.jpg";
import slide7 from "../../../assets/plant/plant_7.jpg";
import slide8 from "../../../assets/plant/plant_8.jpg";
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';



function Category() {
  return (
    <section>
         <SectionTitle heading={"Online Order"}></SectionTitle>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
};

export default Category;