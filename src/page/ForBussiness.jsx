import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
function Home() {
    const slides = [
        { image: 'https://www.ayatrio.com/images/Business/laps.jpg', label: 'Office' },
        { image: 'https://www.ayatrio.com/images/Business/shower.jpg', label: 'Welcome and socialize' },
        { image: 'https://www.ayatrio.com/images/Business/bed.jpg', label: 'Hospitality' },
        { image: 'https://www.ayatrio.com/images/Business/tables.jpg', label: 'Hospitality' },
        { image: 'https://www.ayatrio.com/images/Business/company.jpg', label: 'Restaurants and Cafes' },
        { image: 'https://www.ayatrio.com/images/Business/tables.jpg', label: 'Residential Construction' },
    ];

    const services = [
        {
            title: "Shop online with click and collect at store",
            icon: "https://www.ayatrio.com/icons/click%20and%20collect.svg",
            alt: "Shop online with click and collect",
        },
        {
            title: "Furnishing & Measuring service",
            icon: "https://www.ayatrio.com/icons/maserment.svg",
            alt: "Furnishing and Measuring service",
        },
        {
            title: "Financing Service",
            icon: "https://www.ayatrio.com/icons/payment.svg",
            alt: "Financing service",
        },
        {
            title: "Buyback & Resell",
            icon: "https://www.ayatrio.com/icons/buy%20back.svg",
            alt: "Buyback and Resell",
        },
        {
            title: "Warranty Service",
            icon: "https://www.ayatrio.com/icons/warranty%20registration.svg",
            alt: "Warranty service",
        },
        {
            title: "Installation Service",
            icon: "https://www.ayatrio.com/icons/instalation.svg",
            alt: "Installation service",
        },
        {
            title: "Gift Registry",
            icon: "https://www.ayatrio.com/icons/gift.svg",
            alt: "Gift registry",
        },
        {
            title: "Ayatrio Family Card",
            icon: "https://www.ayatrio.com/icons/ayatrio%20famaly%20care+.svg",
            alt: "Ayatrio Family Card",
        },
    ];

    return (
        <>
            <div className='lg:flex'>
                <div className='w-full px-10 mt-10 lg:py-16 lg:px-20 lg:w-1/2'>
                    <h3 className='text-xl'>Professional, reliable, and time-efficient</h3>
                    <h1 className='text-4xl font-bold'>Ayatrio for business</h1>
                    <div className=' mt-10'>
                        <h3 className='text-xl font-bold'>
                            Professional customized design <br />
                            Creating a dream business space
                        </h3>
                        <p className=''>
                            Office / Residential-construction Retail / Education
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 mt-10'>
                        <a className='hover:underline text-blue-500' href="#">Business Appointments and Consultation</a>
                        <a className='hover:underline text-blue-500' href="#">Become an Ayatrio Business Member ›</a>
                    </div>
                </div>
                <div className='lg:w-1/2 px-5 lg:px-20 mt-10'>
                    <img className='w-full' src="https://www.ayatrio.com/images/Business/prakash.jpg" alt="" />
                </div>
            </div>

            {/* section 2 */}
            <h1 className='lg:px-20 px-5 py-10 text-3xl'>Recently Recommended</h1>
            <div className='w-full lg:flex lg:px-20 gap-6 px-4'>
                <div className='lg:w-1/4 lg:mt-16 mt-5 w-full'>
                    <img className='w-full' src="https://www.ayatrio.com/images/Business/bag.jpg" alt="" />
                    <h2 className='text-2xl'>Become an Ayatrio Business Member</h2>
                    <p className='text-[17px]'>
                        We're dedicated to helping SMEs thrive. Register to enjoy 11 exclusive benefits and receive membership gifts available for a limited time!
                    </p>
                    <a className='text-blue-500' href="#">learn more...</a>
                </div>

                <div className='lg:w-1/4 lg:mt-16 mt-5 w-full'>
                    <img className='w-full' src="https://www.ayatrio.com/images/Business/person.jpg" alt="" />
                    <h2 className='text-2xl'>Join Ayatrio engineering channel service provider</h2>
                    <p className='text-[17px]'>
                        Let more business partners enjoy Ayatrio's corporate business products and services, and jointly develop a market full of opportunities for win-win cooperation!
                    </p>
                    <a className='text-blue-500' href="#">learn more...</a>
                </div>

                <div className='lg:w-1/4 mt-16'>
                    <img className='w-full' src="https://www.ayatrio.com/images/Business/irons.jpg" alt="" />
                    <h2 className='text-2xl'>Ayatrio Blue Box for a Beautiful Life</h2>
                    <p className='text-[17px]'>
                        The new Ayatrio for Business gift box, sending you heartfelt wishes for a beautiful life!
                    </p>
                    <a className='text-blue-500' href="#">learn more...</a>
                </div>
                <div className='lg:w-1/4 mt-16'>
                    <img className='w-full' src="https://www.ayatrio.com/images/Business/room.gif" alt="" />
                    <h2 className='text-2xl'>3D rendering example</h2>
                    <p className='text-[17px]'>
                        15㎡ Apartment: Fully Utilizing a Small Space
                    </p>
                    <a className='text-blue-500' href="#">learn more...</a>
                </div>

                {/* section 3 */}
            </div>
            {/* section 3 */}
            <h1 className='lg:px-20 px-5 lg:py-10 mt-10 text-3xl'>Help you run your business smoothly</h1>
            <div className='lg:flex gap-4 justify-center items-center w-full'>
                <div className='lg:w-1/2 lg:px-20 lg:py-10 px-5 py-5'>
                    <img src="https://www.ayatrio.com/images/Business/furniture.jpg" alt="" />
                </div>
                <div className='lg:w-1/2 lg:px-20 lg:py-10 px-5 py-5'>
                    <h1 className='text-xl font-bold'>Commercial Spaces for MSMEs</h1>
                    <p className=' text-[20px]'>
                        Since Ayatrio started its corporate design and procurement services in 2010, we have served more than 100,000 SME customers. We offer professional market-leading designs and convenient procurement services. From large furniture to fine decorative touches, find products and customized solutions for every industry at Ayatrio. We support spot deliveries and fast installation to help you seize business opportunities.
                    </p>
                    <h3 className='text-[20px] font-bold underline'>Become an Ayatrio Business member and enjoy exclusive benefits</h3>

                    <button className=' text-white font-bold text-xl bg-black py-2 px-5 mt-10 rounded-lg'>Know More...</button>
                </div>
            </div>

            {/* section 4 */}
            <div className='lg:flex gap-4 justify-center items-center'>
                <div className='lg:w-1/2 lg:px-20 lg: px-5 py-5 lg:py-10'>
                    <p className=' text-[20px]'>
                        Engineering Projects
                        Ayatrio is committed to promoting large-scale collaborative engineering projects. We focus on delivering high-quality kitchen interior decoration for houses, government and commercial apartments, co-working office spaces, and large-scale corporate gift purchases, etc.

                        With our comprehensive range of products and one-stop services, Ayatrio provides developers with more convenient, flexible, and diversified shopping experiences.
                    </p>
                    <h3 className='text-[20px] font-bold underline'>Become an Ayatrio Business member and enjoy exclusive benefits</h3>

                    <button className=' text-white font-bold text-xl bg-black py-2 px-5 mt-10 rounded-lg'>Know More...</button>
                </div>
                <div className='lg:w-1/2 lg:px-20 lg:py-10 px-5 py-5 '>
                    <img src="https://www.ayatrio.com/images/Business/project.jpg" alt="" />
                </div>
            </div>

            <div className=' px-5 lg:px-32 mb-10 mt-10'>
                <h1 className='text-2xl font-bold'>We offer professional and convenient one-stop purchasing at Ayatrio.</h1>
                <p className='text-xl text-gray-500'>Here, you'll find all the products and customized solutions you're looking for, regardless of which industry you're in, from large furniture to fine decorative touches.</p>
            </div>
            <div className='md:px-20'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <a href="#" className="block text-center">
                            <img
                                src={slide.image}
                                alt={slide.label}
                                className="mx-10 mb-2 w-96 object-cover h-[380px]"
                            />
                            <p className="text-sm font-medium text-black relative mb-10">
                                {slide.label}
                            </p>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <div className="md:px-20">
                <Swiper
                    navigation
                    loop={true}
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white flex flex-col md:flex-row h-auto min-h-[260px] mt-2 mb-[20px] shadow-lg rounded-lg">
                                <div className="flex gap-5 flex-col p-[30px]">
                                    <div className="pb-[9px] h-[56px]">
                                        <img
                                            src={service.icon}
                                            alt={service.alt}
                                            className=" w-[50px] h-[50px]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-[21px] lg:text-[25px] tracking-[0.007em] text-[#333333] font-semibold line-clamp-3">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Home
