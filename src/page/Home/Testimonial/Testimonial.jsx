import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-10">
            <SectionTitle heading="Testimonials" subHeading="What Our Clients Say" />
            <div className="text-center">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map(r => <SwiperSlide key={r._id}>
                            <div className="flex justify-center items-center mt-5 md:mt-10 lg:mt-16 mb-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={r.rating}
                                    readOnly
                                />
                            </div>
                            <FaQuoteLeft className="my-5 mx-auto" size={50} />
                            <p className="text-sm md:text-lg lg:text-xl text-[#444] w-full md:w-11/12 lg:w-10/12 mx-auto">{r.details}</p>
                            <h1 className="text-xl md:text-2xl font-bold text-[#CD9003] my-3">{r.name}</h1>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;