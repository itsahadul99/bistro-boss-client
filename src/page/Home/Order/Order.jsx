import SectionTitle from "../../../components/SectionTitle";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
const Order = () => {
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-10">
            <SectionTitle heading="online order" subHeading="From 11:00am to 10:00pm" />
            <div className="my-5 md:my-8">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5}  />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center">Salad</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Order;