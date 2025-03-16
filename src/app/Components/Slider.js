"use client"
import React from 'react'
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data for slides
const slidesData = [
    {
        id: 1, title: "Inspector, CIU", description: "“Our team was struggling to identify a suspect. Within minutes of inputting a forensic sketch, we had a match that led to an arrest.”"
    },
    { id: 2, title: "Head of Security", description: "“We used to take weeks manually surveillancing footage, now takes minutes. This is the breakthrough law enforcement needs.”" },
    { id: 3, title: "Forensic Analyst", description: "“Before this tool, a witness sketch was just a visual reference. Now, it’s an actual search tool that actively identifies criminals.”" },
    { id: 4, title: "Forensic Artist, NSD", description: "“Forensic sketching has always been an art, but now it’s a science. AI-powered recognition is making crime-solving smarter and faster.”" },
    { id: 5, title: "Cyber Intelligence Officer", description: "“Even with incomplete or rough sketches, the accuracy is shocking. This technology is a must-have for modern security agencies.”" },
    { id: 6, title: "Senior Detective", description: "“Finally, an AI that actually helps solve crimes instead of just predicting them. This tool is making a real difference.”" },
];

const Slider = () => {
    return (
        <div className='bg-[#7895ae8f] p-5 md:p-10'>
            <div className="header">
                <div className="heading text-[28px] text-center mb-5 md:mb-10 font-extrabold text-[#1E3D58] md:text-[32px]">What Our Users Are Saying</div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },  // Mobile: 1 slide
                    640: { slidesPerView: 2 },  // Tablet: 2 slides
                    1024: { slidesPerView: 3 }, // Small laptop: 3 slides
                    1280: { slidesPerView: 4 }  // Desktop: 4 slides
                }}
                speed={3000}
                freeMode={true}
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id} >
                        <div className='p-5 bg-[#E8EEF1] rounded-md text-center shadow-md min-h-[140px] hover:scale-105 cursor-pointer'>
                            <h3 className="text-lg font-bold mb-3 text-[#1E3D58]">{slide.title}</h3>
                            <p className="text-sm text-gray-700">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;