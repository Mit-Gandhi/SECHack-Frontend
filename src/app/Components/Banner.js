// import Image from 'next/image'
// import React from 'react'

// const Banner = ({ imgMob, imgDesk }) => {
//     return (

//         <div className='relative '>

//             {/* Desktop Image (hidden on mobile) */}
//             <Image className="w-full h-auto hidden md:block" src={imgDesk} alt="Desktop Banner" />
//             {/* <div className="absolute inset-0 bg-gradient-to-t from-[#E8EEF1] from-0%" /> */}

//             {/* Mobile Image (hidden on larger screens) */}
//             <Image className="w-full h-auto block md:hidden" src={imgMob} alt="Mobile Banner" />
//         </div>
//     )
// }

// export default Banner;


// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import React from "react";

// const Banner = ({ imgMob, imgDesk }) => {
//     return (
//         <div className="relative w-full overflow-hidden">
//             {/* Desktop Image with Parallax Effect */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 1.1 }} 
//                 animate={{ opacity: 1, scale: 1 }} 
//                 transition={{ duration: 1 }}
//                 className="hidden md:block w-full h-auto"
//             >
//                 <Image className="w-screen h-auto object-cover rounded-lg shadow-lg" src={imgDesk} alt="Desktop Banner" priority />

//             </motion.div>

//             {/* Mobile Image with Smooth Fade */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.2 }}
//                 className="block md:hidden w-full h-auto"
//             >
//                 <Image className="w-full h-auto rounded-lg shadow-md" src={imgMob} alt="Mobile Banner" priority />
//             </motion.div>

//             {/* Animated Overlay for Depth Effect */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.4 }}
//                 transition={{ duration: 1.5 }}
//                 className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
//             />
//         </div>
//     );
// };

// export default Banner;


// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import React from "react";

// const Banner = () => {
//     return (
//         <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
//             {/* Background Image */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1 }}
//                 className="absolute inset-0 w-full h-full"
//             >
//                 <Image 
//                     src="/banner-image.jpg"  // Change this to your desired image
//                     alt="Banner Background" 
//                     layout="fill" 
//                     objectFit="cover" 
//                     className="absolute inset-0 w-full h-full"
//                 />
//             </motion.div>

//             {/* Overlay for better readability */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.6 }}
//                 transition={{ duration: 1.5 }}
//                 className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"
//             />

//             {/* Text Content */}
//             <motion.div 
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="relative z-10 text-center text-white px-6 max-w-2xl"
//             >
//                 <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Neural Security</h1>
//                 <p className="text-lg text-gray-300 mb-6 drop-shadow-lg">
//                     Cutting-edge AI technology to revolutionize surveillance and security.
//                 </p>
//                 <motion.button 
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="px-8 py-3 rounded-md text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-white shadow-lg hover:shadow-purple-500/50 transition"
//                 >
//                     Learn More
//                 </motion.button>
//             </motion.div>
//         </div>
//     );
// };

// export default Banner;





// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import React from "react";

// const Banner = () => {
//     return (
//         <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
//             {/* Background Image */}
//             <motion.div 
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1 }}
//                 className="absolute inset-0 w-full h-full"
//             >
//                 <Image 
//                     src="/banner-image.jpg"  // Change this to your desired image
//                     alt="Banner Background" 
//                     layout="fill" 
//                     objectFit="cover" 
//                     className="absolute inset-0 w-full h-full"
//                 />
//             </motion.div>

//             {/* Overlay for better readability */}
//             <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.6 }}
//                 transition={{ duration: 1.5 }}
//                 className="absolute inset-0 bg-black/80"
//             />

//             {/* Text Content */}
//             <motion.div 
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="relative z-10 text-center text-white px-6 max-w-2xl"
//             >
//                 <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 drop-shadow-lg">
//                     AI-powered Criminal Identification
//                 </h1>
//                 <p className="text-lg text-gray-300 mb-6 drop-shadow-lg">
//                     No HD photo needed. No needless search. Just upload a sketch & Let AI Find the Face.
//                 </p>
//                 <motion.button 
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="px-8 py-3 rounded-md text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-white shadow-lg hover:shadow-purple-500/50 transition"
//                 >
//                     Learn More
//                 </motion.button>
//             </motion.div>
//         </div>
//     );
// };

// export default Banner;



"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Banner = ({imgbackgound , heading , sub1 , sub2}) => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
            >
                <Image 
                    src={imgbackgound}  // Updated background image
                    alt="Banner Background" 
                    layout="fill" 
                    objectFit="cover" 
                    className="absolute inset-0 w-full h-1xl"
                />
            </motion.div>

            {/* Overlay for better readability */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"
            />

            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center text-white px-10 max-w-4xl"
            >
                <h1 className="text-6xl pd-7 font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 drop-shadow-[4px_6px_2px_purple]">
               {heading}
                </h1>
                <p className="text-2xl text-white-300 mb-8 drop-shadow-[4px_6px_2px_purple]">
             {sub1}
                </p>
                <p className="text-1xl text-gray-400 mb-10 pd-5 drop-shadow-[4px_6px_2px_purple]">
                {sub2}
                </p>
            
            </motion.div>       
        </div>
    );
};

export default Banner;
