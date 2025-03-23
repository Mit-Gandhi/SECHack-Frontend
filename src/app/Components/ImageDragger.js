"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImageDragger = () => {
    const defaultImage = "/DemoProfile.jpg";
    const [uploadedImage, setUploadedImage] = useState(null);
    const [generatedImage, setGeneratedImage] = useState(null);
    const [matchedInfo, setMatchedInfo] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isDetecting, setIsDetecting] = useState(false);
    const [showLiveFeed, setShowLiveFeed] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    // Function to fetch matched person's info
    const fetchMatchedInfo = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/get_matched_info/");
            if (!response.ok) {
                throw new Error("No matching person found");
            }
            const data = await response.json();
            setMatchedInfo(data);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Function to upload image and get generated colored image
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        resetState();
        setUploadedImage(URL.createObjectURL(file));
        setIsProcessing(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://127.0.0.1:8000/generate/", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error(`Failed: ${response.statusText}`);

            const blob = await response.blob();
            setGeneratedImage(URL.createObjectURL(blob));
        } catch (error) {
            setErrorMessage(error.message || "Something went wrong");
        } finally {
            setIsProcessing(false);
        }
    };

    // Function to start live detection - now opens the camera modal
    const handleLiveDetection = () => {
        setShowLiveFeed(true);
        setErrorMessage("");
        setIsDetecting(true);
    };

    // Function to stop live detection
    const stopLiveDetection = () => {
        setShowLiveFeed(false);
        setIsDetecting(false);
    };

    const resetState = () => {
        setUploadedImage(null);
        setGeneratedImage(null);
        setMatchedInfo(null);
        setErrorMessage("");
        setShowLiveFeed(false);
        setIsDetecting(false);
    };

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[1600px] mx-auto p-12 shadow-2xl"
            style={{ background: "linear-gradient(to left, #000000, #000000, #000000)" }}
        >
            <h2 className="text-4xl font-extrabold text-center text-[#b3a4ff] mb-8 drop-shadow-lg">
                AI-Powered Image Processing
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                {/* Upload Box */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-8 border border-[#b3a4ff] rounded-lg shadow-lg bg-black w-full md:w-1/2 transition-all"
                >
                    {!uploadedImage ? (
                        <>
                            <p className="text-lg text-gray-400 mb-4">Drag & Drop an Image</p>
                            <label className="px-6 py-3 bg-[#3b0076] text-white cursor-pointer hover:bg-[#6b4eff] hover:scale-110 rounded-md shadow-lg transition">
                                Select Image
                                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                            </label>
                        </>
                    ) : (
                        <img src={uploadedImage} alt="Uploaded Preview" className="w-full max-w-xs rounded-lg shadow-lg" />
                    )}
                </motion.div>

                {/* Processing & Generated Image Box */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center justify-center p-8 border border-[#b3a4ff] rounded-lg shadow-lg bg-black w-full md:w-1/2 transition-all"
                >
                    {generatedImage ? (
                        <>
                            <img src={generatedImage} alt="Generated Image" className="w-full max-w-xs rounded-lg shadow-lg" />
                            <div className="flex gap-4 mt-5">
                                <button
                                    onClick={fetchMatchedInfo}
                                    className="px-6 py-2 bg-[#3b0076] text-white hover:bg-[#6b4eff] hover:scale-110 rounded-md shadow-lg transition"
                                >
                                    View Info
                                </button>
                                <button
                                    onClick={handleLiveDetection}
                                    className="px-6 py-2 bg-[#6b4eff] text-white hover:bg-[#3b0076] hover:scale-110 rounded-md shadow-lg transition"
                                >
                                    Live Detection
                                </button>
                                <button
                                    onClick={resetState}
                                    className="bg-red-500 px-6 py-2 text-white hover:bg-red-700 hover:scale-110 rounded-md shadow-lg transition"
                                >
                                    Reset
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-lg text-gray-400">Waiting for Image Upload...</p>
                    )}
                </motion.div>
            </div>

            {/* Loading Animation */}
            {isProcessing && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="text-center mt-6 text-[#6b4eff] text-lg animate-pulse"
                >
                    Almost there...
                </motion.div>
            )}

            {/* Live Detection Loading */}
            {isDetecting && !showLiveFeed && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="text-center mt-6 text-[#6b4eff] text-lg animate-pulse"
                >
                    Running Live Detection...
                </motion.div>
            )}

            {/* Error Message */}
            {errorMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-6 text-red-500 font-bold"
                >
                    {errorMessage}
                </motion.div>
            )}

            {/* Live Feed Modal - From first code */}
            {showLiveFeed && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-900 p-6 rounded-lg shadow-xl w-4/5 max-w-3xl border border-[#b3a4ff]"
                    >
                        <h2 className="text-2xl font-bold text-[#b3a4ff] mb-4">Live Detection</h2>
                        <div className="flex justify-center">
                            <img 
                                src="http://127.0.0.1:8000/live_camera" 
                                alt="Live Camera Feed"
                                className="w-full h-auto rounded-lg shadow-md border border-gray-700"
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button 
                                onClick={stopLiveDetection} 
                                className="px-6 py-2 bg-red-600 text-white cursor-pointer hover:bg-red-700 hover:scale-105 rounded-md shadow-lg transition"
                            >
                                Close Camera
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Display Matched Person's Info */}
            {matchedInfo && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-6 bg-gray-900 text-white rounded-lg shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-[#b3a4ff] mb-4">Matched Person Details</h3>
                    <p><span className="font-bold">ID:</span> {matchedInfo.id}</p>
                    <p><span className="font-bold">Name:</span> {matchedInfo.name}</p>
                    <p><span className="font-bold">Age:</span> {matchedInfo.age}</p>
                    <p><span className="font-bold">Location:</span> {matchedInfo.location}</p>
                    <p><span className="font-bold">Marital Status:</span> {matchedInfo.marital_status}</p>
                    <p><span className="font-bold">Criminal History:</span> {matchedInfo.criminal_history}</p>
                    {/* <p><span className="font-bold">Similarity Score:</span> {matchedInfo.similarity}</p> */}
                </motion.div>
            )}
        </motion.div>
    );
};

export default ImageDragger;


