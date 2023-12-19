import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../../assets/annie-spratt-FSFfEQkd1sc-unsplash (1).jpg'
import slider2 from '../../../assets/austin-distel-wawEfYdpkag-unsplash.jpg'
import slider3 from '../../../assets/dan-gold-clBJIFl1p0E-unsplash.jpg'
import slider4 from '../../../assets/nastuh-abootalebi-JdcJn85xD2k-unsplash.jpg'
import slider5 from '../../../assets/annie-spratt-FSFfEQkd1sc-unsplash (1).jpg'
import slider6 from '../../../assets/marcelo-leal-6pcGTJDuf6M-unsplash.jpg'
import slider7 from '../../../assets/nastuh-abootalebi-ZtC4_rPCRXA-unsplash.jpg'
import slider8 from '../../../assets/annie-spratt-FSFfEQkd1sc-unsplash (1).jpg'
import slider9 from '../../../assets/luann-hunt-X20g2GQsVdA-unsplash.jpg'
import SectionTital from '../../../Components/SectionTital/SectionTital';
const Category = () => {
    return (
        <section>
            <SectionTital
                subHeading={"From 005.am to 005.am"}
                heading={'Hospital Open The Any Time'}
            ></SectionTital>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500 h-[160px]' src={slider2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider7} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider8} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='border-2 border-sky-500' src={slider9} alt="" />
                    </SwiperSlide>
                </Swiper>
        </section>
    );
};

export default Category;