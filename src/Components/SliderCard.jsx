// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const SliderCard = () => {
    return (
        <div className='my-20'>

            <h1 className="text-5xl mb-4 text-center text-indigo-700">
                Explore More
            </h1>
            <p className="text-lg text-center text-indigo-700">

                Explore our range of artistic services
            </p>

            <div className='max-w-[960px] mx-auto p-24 '>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/6vBWdzx/art-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/Cv2dGTx/art-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/yshD738/portrait-7-min.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/TqPNNm0/sketch-1-min.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/f9y3gZF/protrait-10-min.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/DMGDS31/portrait-5-min.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='bg-indigo-50'>
                        <img className=' mx-auto h-[480px]' src="https://i.ibb.co/pZvQVX0/water-color-2-min.webp" />
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default SliderCard;