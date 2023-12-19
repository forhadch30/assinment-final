import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import img1 from '../../../assets/tom-claes-CfdzNybONzc-unsplash.jpg'
import img2 from '../../../assets/tbel-abuseridze-eBW1nlFdZFw-unsplash.jpg'
import img3 from '../../../assets/national-cancer-institute-DK--4VWK1tw-unsplash.jpg'
import img4 from '../../../assets/national-cancer-institute-GcrSgHDrniY-unsplash.jpg'
import img5 from '../../../assets/joel-muniz-3k3l2brxmwQ-unsplash.jpg'
import img6 from '../../../assets/johny-georgiadis-3ewkNkfJj2k-unsplash.jpg'
import img7 from '../../../assets/national-cancer-institute-cw2Zn2ZQ9YQ-unsplash.jpg'
import SectionTital from "../../../Components/SectionTital/SectionTital";
const Details = () => {
    return (
        <div>
            <SectionTital
            heading={"hospital service"}
            subHeading={"Popular Diagnostic Centre Ltd"}
            >
            </SectionTital>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Details;