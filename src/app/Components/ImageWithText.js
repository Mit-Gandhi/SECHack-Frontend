// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";

// const ImageWithText = ({ image, buttonName, buttonPath, heading, subHeading, description }) => {
//     const route = useRouter();
    
//     const Navigate = () => {
//         route.push(buttonPath);
//     };

//     return (
//         <div>
//             <div className="content block md:flex items-center justify-center">
//                 <div className={`ContentBlock ${image ? "w-[100%] md:w-[60%]" : "w-[100%] md:w-[80%]"} p-5 text-center`}>
//                     <div className="heading text-[32px] font-extrabold mb-5 text-[#057DCD]">{heading}</div>
//                     <div className="subheading text-[20px] font-bold mb-5 text-[#1E3D58]">{subHeading}</div>
//                     <div className="description text-[#1E3D58] mb-5">{description}</div>
//                     {buttonName && buttonPath && (
//                         <button
//                             className="px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black"
//                             onClick={Navigate}
//                         >
//                             {buttonName}
//                         </button>
//                     )}
//                 </div>
//                 {image && (
//                     <div className="ImageBlock w-[100%] md:w-[40%] p-2 md:p-5">
//                         <Image className="rounded-md" src={image} alt="Image with text" />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ImageWithText;




"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const ImageWithText = ({ image, buttonName, buttonPath, heading, subHeading, description }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(buttonPath);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 bg-gradient-to-r from-[#1e3d58] to-[#3b6978] rounded-2xl shadow-2xl overflow-hidden"
        >
            {/* Text Content */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full md:w-1/2 p-6 text-white"
            >
                <h2 className="text-4xl font-extrabold mb-4">{heading}</h2>
                <h3 className="text-2xl font-semibold mb-3 text-[#64B5F6]">{subHeading}</h3>
                <p className="text-lg text-gray-300 mb-6">{description}</p>
                {buttonName && buttonPath && (
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-[#64B5F6] text-white rounded-md hover:bg-[#0ea5e9] transition shadow-lg"
                        onClick={handleNavigation}
                    >
                        {buttonName}
                    </motion.button>
                )}
            </motion.div>

            {/* Image Content */}
            {image && (
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-full md:w-1/2 p-4 flex justify-center"
                >
                    <Image className="rounded-lg shadow-lg" src={image} alt="Illustration" width={500} height={350} />
                </motion.div>
            )}
        </motion.div>
    );
};

export default ImageWithText;