import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',

                }}
                speed={600}
                parallax={true}


                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={true}

                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper max-h-[700px]"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"

                    data-swiper-parallax="-23%"
                ></div>

                <SwiperSlide >
                    <img className='h-screen w-screen' src="https://i.ibb.co/5cs83h0/banner-1-min.jpg" alt="" />

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        className='absolute top-0 left-0 md:left-[200px] md:top-80 lg:left-80 lg:top-72 z-50 w-96 xl:left-[700px] xl:w-[500px]'>

                        <p className='bg-[#aab1e5b9] text-indigo-5 p-10 xl:p-20 xl:text-lg'>
                            Welcome to ArtFull, your destination for captivating landscape paintings! Dive into our collection featuring stunning mountain views and serene forest landscapes. Let your walls tell a story with our handcrafted canvases. Order now and bring the beauty of nature into your home.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-screen w-screen' src="https://i.ibb.co/6DxZvFJ/banner-6-min.jpg" alt="" />

                    <div
                        data-aos="fade-right"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        className='absolute top-0 left-0 md:left-[200px] md:top-80 lg:left-80 lg:top-72 z-50 w-96  xl:left-[700px]  xl:w-[500px]'>

                        <p className='bg-[#aab1e5b9] text-indigo-5 p-10 xl:p-20 xl:text-lg'>
                            Welcome to ArtFull, your destination for captivating landscape paintings! Dive into our collection featuring stunning mountain views and serene forest landscapes. Let your walls tell a story with our handcrafted canvases. Order now and bring the beauty of nature into your home.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-screen w-screen' src="https://i.ibb.co/6vqTk9c/landscape-1-min.webp" alt="" />

                    <div
                        data-aos="fade-down"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        className='absolute top-0 left-0 md:left-[200px] md:top-80 lg:left-80 lg:top-72 z-50 w-96 xl:left-[700px]  xl:w-[500px]'>

                        <p className='bg-[#aab1e5b9] text-indigo-5 p-10 xl:p-20 xl:text-lg'>
                            Welcome to ArtFull, your destination for captivating landscape paintings! Dive into our collection featuring stunning mountain views and serene forest landscapes. Let your walls tell a story with our handcrafted canvases. Order now and bring the beauty of nature into your home.
                        </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <img className='h-screen w-screen' src="https://i.ibb.co/Kh2svGn/banner-2-min.jpg" alt="" />

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        className='absolute top-0 left-0 md:left-[200px] md:top-80 lg:left-80 lg:top-72 z-50 w-96 xl:left-[700px]  xl:w-[500px]'>

                        <p className='bg-[#aab1e5b9] text-indigo-5 p-10 xl:p-20 xl:text-lg'>
                            Welcome to ArtFull, your destination for captivating landscape paintings! Dive into our collection featuring stunning mountain views and serene forest landscapes. Let your walls tell a story with our handcrafted canvases. Order now and bring the beauty of nature into your home.
                        </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <img className='h-screen w-screen' src="https://i.ibb.co/7KVWyCc/banner-5-min.jpg" alt="" />

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        className='absolute top-0 left-0 md:left-[200px] md:top-80 lg:left-80 lg:top-72 z-50 w-96 xl:left-[700px]  xl:w-[500px]'>

                        <p className='bg-[#aab1e5b9] text-indigo-5 p-10 xl:p-20 xl:text-lg'>
                            Welcome to ArtFull, your destination for captivating landscape paintings! Dive into our collection featuring stunning mountain views and serene forest landscapes. Let your walls tell a story with our handcrafted canvases. Order now and bring the beauty of nature into your home.
                        </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <img className='h-screen w-screen' src="https://i.ibb.co/Vm9Fz5X/slider-7-min.jpg" alt="" />

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="3000"
                        className='absolute top-0 left-0 md:left-[200px] md:top-80 lg:left-80 lg:top-72 z-50 w-96 xl:left-[700px]  xl:w-[500px]'>

                        <p className='bg-[#aab1e5b9] text-indigo-5 p-10 xl:p-20 xl:text-lg'>
                            Welcome to ArtFull, your destination for captivating landscape paintings! Dive into our collection featuring stunning mountain views and serene forest landscapes. Let your walls tell a story with our handcrafted canvases. Order now and bring the beauty of nature into your home.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;