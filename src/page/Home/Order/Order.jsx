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
                        <img src={slide1} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">Pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">Salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} />
                        <h1 className="text-xl md:text-2xl font-bold font-cinzel -mt-12 text-center text-white">Salad</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="hero lg:min-h-[500px] my-5 md:my-10 lg:my-16" style={{ backgroundImage: 'url(https://i.ibb.co/Wg6jxWx/chef-service.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center font-inter bg-white m-10">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-xl md:text-2xl">Bistro Boss</h1>
                        <p className="mb-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis consequuntur sint aut nesciunt voluptatibus modi, doloribus placeat enim ex. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, minus!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;