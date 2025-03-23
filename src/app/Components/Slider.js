"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const slidesData = [
    { id: 1, title: "Inspector, CIU", description: "“Our team was struggling to identify a suspect. Within minutes of inputting a forensic sketch, we had a match that led to an arrest.”" },
    { id: 2, title: "Head of Security", description: "“We used to take weeks manually surveilling footage, now takes minutes. This is the breakthrough law enforcement needs.”" },
    { id: 3, title: "Forensic Analyst", description: "“Before this tool, a witness sketch was just a visual reference. Now, it’s an actual search tool that actively identifies criminals.”" },
    { id: 4, title: "Forensic Artist, NSD", description: "“Forensic sketching has always been an art, but now it’s a science. AI-powered recognition is making crime-solving smarter and faster.”" },
    { id: 5, title: "Cyber Intelligence Officer", description: "“Even with incomplete or rough sketches, the accuracy is shocking. This technology is a must-have for modern security agencies.”" },
    { id: 6, title: "Senior Detective", description: "“Finally, an AI that actually helps solve crimes instead of just predicting them. This tool is making a real difference.”" },
];

const Slider = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-navy-900 p-8  shadow-2xl"
            style={{
                background: "linear-gradient(to left, #000000,#000000,rgb(35, 13, 45))", // Black to Navy Blue Gradient
             }}
        >
            <h2 className="text-center text-4xl font-extrabold text-white mb-10">What Our Users Are Saying</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                speed={1200}
                className="rounded-lg"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id} className="max-w-md rounded-5xl">
                        <motion.div 
                            whileHover={{ scale: 1.03 }} 
                            className="p-5 bg-black backdrop-blur-lg border-2 border-transparent rounded-10xl text-center shadow-lg text-white transition-all"
                            style={{
                                borderImage: "linear-gradient(45deg,rgb(97, 4, 71), #6b4eff) 1",
                                borderImageSlice: 1
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-[#b3a4ff]">{slide.title}</h3>
                            <p className="text-lg text-gray-300">{slide.description}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

export default Slider;