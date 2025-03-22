// "use client";
// import React, { useState } from "react";
// import icon from "../Assets/logo.svg";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// const Navbar = () => {
//     const [isClick, setIsClick] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname(); // Get current route

//     const toggleNavbar = () => {
//         setIsClick(!isClick);
//     };

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Surveillance", href: "/survellance" } 
//     ];

//     return (
//         <>
//             <div className="bg-[#1e3d58] px-2 py-1 flex justify-between items-center sticky top-0 z-50">
//                 <div className="Logo flex items-center cursor-pointer" onClick={() => router.push("/")}>
//                     <Image src={icon} alt="Logo" className="w-[50px] h-[50px]" />
//                     <div className="text-[#E8EEF1] text-[24px]">Neural Security</div>
//                 </div>
//                 <div className="hidden md:flex text-[18px] gap-2 text-[#E8EEF1]">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.href}
//                             href={link.href}
//                             className={`inline-block py-1 px-3 rounded-sm hover:text-[#43B0F1] relative ${pathname === link.href ? "text-[#43B0F1] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#43B0F1]" : ""
//                                 }`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
//                 <div className="md:hidden block text-[#E8EEF1]">
//                     <button onClick={toggleNavbar}>{isClick ? "Close" : "Open"}</button>
//                 </div>
//             </div>

//             {isClick && (
//                 <div className="block bg-[#1e3d58] p-2 text-[#E8EEF1]">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.href}
//                             href={link.href}
//                             className={`block p-2 hover:text-[#43B0F1] relative ${pathname === link.href ? "text-[#43B0F1] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#43B0F1]" : ""
//                                 }`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;






// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname();

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Surveillance", href: "/survellance" },
//     ];

//     return (
//         <motion.nav 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-[#1E3D58] px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-90"
//         >
//             {/* Logo Section */}
//             <motion.div 
//                 whileHover={{ scale: 1.1 }} 
//                 onClick={() => router.push("/")} 
//                 className="flex items-center cursor-pointer space-x-3"
//             > 
//                 <Image src="/logo.svg" alt="Logo" width={50} height={50} />
//                 <span className="text-[#E8EEF1] text-2xl font-semibold tracking-wide">Neural Security</span>
//             </motion.div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6 text-lg font-medium text-[#E8EEF1]">
//                 {navLinks.map((link) => (
//                     <motion.div
//                         key={link.href}
//                         whileHover={{ scale: 1.1 }}
//                     >
//                         <Link
//                             href={link.href}
//                             className={`relative py-2 px-4 transition duration-300 hover:text-[#43B0F1] ${
//                                 pathname === link.href ? "text-[#43B0F1] border-b-2 border-[#43B0F1]" : ""
//                             }`}
//                         >
//                             {link.name}
//                         </Link>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Mobile Menu Toggle */}
//             <motion.div className="md:hidden text-[#E8EEF1]" whileHover={{ scale: 1.2 }}>
//                 <button onClick={() => setIsOpen(!isOpen)}>
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </motion.div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <motion.div 
//                     initial={{ x: "-100%" }}
//                     animate={{ x: "0%" }}
//                     exit={{ x: "-100%" }}
//                     transition={{ duration: 0.3 }}
//                     className="md:hidden fixed inset-0 bg-[#1E3D58] bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-[#E8EEF1] text-2xl font-semibold"
//                 >
//                     {navLinks.map((link) => (
//                         <motion.div key={link.href} whileHover={{ scale: 1.1 }}>
//                             <Link
//                                 href={link.href}
//                                 className="py-2 px-6 hover:text-[#43B0F1] transition duration-300"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 {link.name}
//                             </Link>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             )}
//         </motion.nav>
//     );
// };

// export default Navbar;


// "use client";
// import React, { useState } from "react";
// import icon from "../Assets/logo.svg";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname();

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Surveillance", href: "/survellance" }
//     ];

//     return (
//         <motion.nav 
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="bg-[#1E3D58] px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-xl backdrop-blur-md bg-opacity-90 border-b border-gray-700"
//         >
//             {/* Logo Section */}
//             <div className="flex items-center cursor-pointer space-x-3" onClick={() => router.push("/")}> 
//                 <Image src={icon} alt="Logo" className="w-[60px] h-[60px]" />
//                 <motion.span 
//                     initial={{ opacity: 0 }} 
//                     animate={{ opacity: 1 }} 
//                     transition={{ delay: 0.3 }}
//                     className="text-[#E8EEF1] text-3xl font-semibold tracking-wide hover:text-[#43B0F1] transition-all duration-300"
//                 >
//                     Neural Security
//                 </motion.span>
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-8 text-lg font-medium text-[#E8EEF1]">
//                 {navLinks.map((link) => (
//                     <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         key={link.href}
//                     >
//                         <Link
//                             href={link.href}
//                             className={`relative py-2 px-4 transition duration-300 hover:text-[#43B0F1] ${pathname === link.href ? "text-[#43B0F1] border-b-2 border-[#43B0F1]" : ""}`}
//                         >
//                             {link.name}
//                         </Link>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden text-[#E8EEF1]">
//                 <motion.button 
//                     whileTap={{ scale: 0.8 }}
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="focus:outline-none"
//                 >
//                     {isOpen ? <X size={32} /> : <Menu size={32} />}
//                 </motion.button>
//             </div>

//             {/* Mobile Menu */}
//             <motion.div 
//                 initial={{ x: "100%" }}
//                 animate={{ x: isOpen ? "0%" : "100%" }}
//                 transition={{ type: "spring", stiffness: 120 }}
//                 className="fixed top-0 right-0 w-3/4 h-full bg-[#1E3D58] bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-[#E8EEF1] text-2xl font-semibold shadow-lg"
//             >
//                 {navLinks.map((link) => (
//                     <motion.div whileHover={{ scale: 1.1 }} key={link.href}>
//                         <Link
//                             href={link.href}
//                             className="py-3 px-6 hover:text-[#43B0F1] transition duration-300"
//                             onClick={() => setIsOpen(false)}
//                         >
//                             {link.name}
//                         </Link>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </motion.nav>
//     );
// };

// export default Navbar;



// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname();

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Surveillance", href: "/survellance" },
//     ];

//     return (
//         <motion.nav 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="px-10 py-4 flex justify-center items-center gap-x-10 fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-transparent"
//         >
//             {/* Logo Section */}
//             <motion.div 
//                 whileHover={{ scale: 1.1 }} 
//                 onClick={() => router.push("/")} 
//                 className="flex items-center cursor-pointer space-x-4"
//             > 
//                 <Image src="/logo.svg" alt="Logo" width={50} height={50} />
//                 <span className="text-[#E8EEF1] text-2xl font-semibold tracking-wide">Neural Security</span>
//             </motion.div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-10 text-lg font-medium text-[#E8EEF1]">
//                 {navLinks.map((link) => (
//                     <motion.div
//                         key={link.href}
//                         whileHover={{ scale: 1.1 }}
//                     >
//                         <Link
//                             href={link.href}
//                             className={`relative py-2 px-6 transition duration-300 hover:text-[#43B0F1] ${
//                                 pathname === link.href ? "text-[#43B0F1] border-b-2 border-[#43B0F1]" : ""
//                             }`}
//                         >
//                             {link.name}
//                         </Link>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Mobile Menu Toggle */}
//             <motion.div className="md:hidden text-[#E8EEF1]" whileHover={{ scale: 1.2 }}>
//                 <button onClick={() => setIsOpen(!isOpen)}>
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </motion.div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <motion.div 
//                     initial={{ x: "-100%" }}
//                     animate={{ x: "0%" }}
//                     exit={{ x: "-100%" }}
//                     transition={{ duration: 0.3 }}
//                     className="md:hidden fixed inset-0 bg-[#1E3D58] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-[#E8EEF1] text-2xl font-semibold"
//                 >
//                     {navLinks.map((link) => (
//                         <motion.div key={link.href} whileHover={{ scale: 1.1 }} className="py-4 px-8">
//                             <Link
//                                 href={link.href}
//                                 className="py-2 px-8 hover:text-[#43B0F1] transition duration-300"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 {link.name}
//                             </Link>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             )}
//         </motion.nav>
//     );
// };

// export default Navbar;





"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Surveillance", href: "/survellance" },
    ];

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-10 py-4 flex justify-center items-center gap-x-10 fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-navy black/80 to-black/80 "
        >
            {/* Logo Section */}
            <motion.div 
                whileHover={{ scale: 1.1 }} 
                onClick={() => router.push("/")} 
                className="flex items-center cursor-pointer space-x-4"
            > 
                <Image src={logo} alt="Logo" width={40} height={0} />
                <span className="text-white text-3xl font-bold tracking-wide">Neural Security</span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 text-lg font-medium text-white">
                {navLinks.map((link) => (
                    <motion.div key={link.href} whileHover={{ scale: 1.1 }}>
                        <Link
                            href={link.href}
                            className={`relative py-2 px-6 transition duration-300 hover:text-purple-400 ${
                                pathname === link.href ? "text-purple-500 border-b-2 border-purple-500" : ""
                            }`}
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.div className="md:hidden text-white" whileHover={{ scale: 1.2 }}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </motion.div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-6 text-white text-2xl font-semibold shadow-lg"
                >
                    {navLinks.map((link) => (
                        <motion.div key={link.href} whileHover={{ scale: 1.1 }}>
                            <Link
                                href={link.href}
                                className="py-2 px-8 hover:text-purple-400 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;