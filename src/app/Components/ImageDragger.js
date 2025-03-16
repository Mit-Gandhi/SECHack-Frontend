"use client";
import React, { useState, useRef } from "react";

const ImageDragger = () => {
    const defaultImage = "/DemoProfile.jpg";
    const [uploadedImage, setUploadedImage] = useState(null);
    const [generatedImage, setGeneratedImage] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showLiveFeed, setShowLiveFeed] = useState(false);
    const videoRef = useRef(null);
    let mediaStream = useRef(null);

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

    const handleViewInformation = async () => {
        if (!generatedImage) return;

        setIsFetchingInfo(true);
        setErrorMessage("");
        setPersonInfo(null);

        try {
            const response = await fetch("http://127.0.0.1:8000/get_matched_info/");
            if (!response.ok) throw new Error(`Failed: ${response.statusText}`);

            const data = await response.json();

            if (data && data.name) {
                setPersonInfo(data);
                setIsPopupOpen(true);
            } else {
                setPersonInfo({ name: "Not Found", location: "Unknown" });
                setIsPopupOpen(true);
            }
        } catch (error) {
            setErrorMessage(error.message || "Error fetching details.");
        } finally {
            setIsFetchingInfo(false);
        }
    };

    const handleLiveDetection = () => {
        setShowLiveFeed(true);
        setErrorMessage("");
    };

    const stopLiveDetection = () => {
        setShowLiveFeed(false);
    };

    const resetState = () => {
        setUploadedImage(null);
        setGeneratedImage(null);
        setPersonInfo(null);
        setErrorMessage("");
        setIsPopupOpen(false);
        setShowLiveFeed(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center items-center p-5 border rounded-lg shadow-md bg-gray-100">
                    <img src={uploadedImage || defaultImage} alt="Uploaded Preview" className="w-full h-auto rounded-lg" />
                </div>
                {!generatedImage ? (
                    <div className="border-2 border-dashed p-6 rounded-lg shadow-md bg-gray-50 flex flex-col items-center text-center cursor-pointer justify-center">
                        <p className="block mb-3">Drag & Drop an Image Here</p>
                        <label className="px-5 py-2 block bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black">
                            Select Image
                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                        </label>
                    </div>
                ) : (
                    <div className="relative flex flex-col items-center p-5 border rounded-lg shadow-md bg-gray-100">
                        <img src={generatedImage} alt="Generated Preview" className="w-full h-auto rounded-lg" />
                        <div className="flex gap-4 mt-4">
                            <button 
                                onClick={handleViewInformation} 
                                className="px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black"
                                disabled={isFetchingInfo}
                            >
                                {isFetchingInfo ? "Fetching..." : "View Info"}
                            </button>
                            <button 
                                onClick={handleLiveDetection} 
                                className="px-5 py-2 bg-[#057DCD] text-[#E8EEF1] cursor-pointer hover:bg-[#1E3D58] hover:scale-105 rounded-sm shadow-md shadow-black"
                            >
                                Live Detection
                            </button>
                            <button 
                                onClick={resetState} 
                                className="bg-red-500 px-5 py-2 text-[#E8EEF1] cursor-pointer hover:bg-[#1E3D58] hover:scale-105 rounded-sm shadow-md shadow-black"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {isProcessing && (
                <div className="text-center mt-4 text-blue-500 animate-pulse" aria-live="polite">
                    Processing Image, Please Wait...
                </div>
            )}

            {errorMessage && (
                <div className="text-center mt-4 text-red-600 font-bold" aria-live="polite">
                    {errorMessage}
                </div>
            )}

            {showLiveFeed && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-2xl">
                        <h2 className="text-xl font-bold text-blue-500 mb-4">Live Detection</h2>
                        <div className="flex justify-center">
                            <img 
                                src="http://127.0.0.1:8000/live_camera" 
                                alt="Live Camera Feed"
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button 
                                onClick={stopLiveDetection} 
                                className="px-5 py-2 bg-red-500 text-white cursor-pointer hover:bg-red-600 rounded-sm shadow-md"
                            >
                                Close Camera
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isPopupOpen && personInfo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
                        <h2 className="text-xl font-bold text-blue-500 mb-4">Image Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex justify-center">
                                <img src={generatedImage} alt="Generated" className="rounded-lg shadow-md w-full max-w-xs" />
                            </div>
                            <div className="text-gray-800 space-y-3">
                                <p><strong>Name:</strong> {personInfo.name}</p>
                                <p><strong>Location:</strong> {personInfo.location}</p> 
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button onClick={() => setIsPopupOpen(false)} className="px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageDragger;


 
// "use client";
// import React, { useState, useEffect } from "react";

// const ImageDragger = () => {
//     const defaultImage = "/DemoProfile.jpg";
//     const [uploadedImage, setUploadedImage] = useState(null);
//     const [generatedImage, setGeneratedImage] = useState(null);
//     const [personInfo, setPersonInfo] = useState(null);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [isFetchingInfo, setIsFetchingInfo] = useState(false);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [showLiveFeed, setShowLiveFeed] = useState(false);
//     const [alertMessage, setAlertMessage] = useState(null);

//     useEffect(() => {
//         // Poll the backend every 5 seconds to check for alerts
//         const interval = setInterval(checkForAlerts, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const checkForAlerts = async () => {
//         try {
//             const response = await fetch("http://127.0.0.1:8000/get_alert/");
//             if (response.ok) {
//                 const data = await response.json();
//                 if (data.alert) {
//                     setAlertMessage(data.alert);
//                     setTimeout(() => setAlertMessage(null), 5000); // Hide alert after 5 seconds
//                 }
//             }
//         } catch (error) {
//             console.error("Error fetching alert:", error);
//         }
//     };

//     const handleFileChange = async (event) => {
//         const file = event.target.files[0];
//         if (!file) return;

//         resetState();
//         setUploadedImage(URL.createObjectURL(file));
//         setIsProcessing(true);

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await fetch("http://127.0.0.1:8000/generate/", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!response.ok) throw new Error(`Failed: ${response.statusText}`);

//             const blob = await response.blob();
//             setGeneratedImage(URL.createObjectURL(blob));
//         } catch (error) {
//             setErrorMessage(error.message || "Something went wrong");
//         } finally {
//             setIsProcessing(false);
//         }
//     };

//     const handleViewInformation = async () => {
//         if (!generatedImage) return;

//         setIsFetchingInfo(true);
//         setErrorMessage("");
//         setPersonInfo(null);

//         try {
//             const response = await fetch("http://127.0.0.1:8000/get_matched_info/");
//             if (!response.ok) throw new Error(`Failed: ${response.statusText}`);

//             const data = await response.json();

//             if (data && data.name) {
//                 setPersonInfo(data);
//                 setIsPopupOpen(true);
//             } else {
//                 setPersonInfo({ name: "Not Found", location: "Unknown" });
//                 setIsPopupOpen(true);
//             }
//         } catch (error) {
//             setErrorMessage(error.message || "Error fetching details.");
//         } finally {
//             setIsFetchingInfo(false);
//         }
//     };

//     const handleLiveDetection = () => {
//         setShowLiveFeed(true);
//         setErrorMessage("");
//     };

//     const stopLiveDetection = () => {
//         setShowLiveFeed(false);
//     };

//     const resetState = () => {
//         setUploadedImage(null);
//         setGeneratedImage(null);
//         setPersonInfo(null);
//         setErrorMessage("");
//         setIsPopupOpen(false);
//         setShowLiveFeed(false);
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="flex justify-center items-center p-5 border rounded-lg shadow-md bg-gray-100">
//                     <img src={uploadedImage || defaultImage} alt="Uploaded Preview" className="w-full h-auto rounded-lg" />
//                 </div>
//                 {!generatedImage ? (
//                     <div className="border-2 border-dashed p-6 rounded-lg shadow-md bg-gray-50 flex flex-col items-center text-center cursor-pointer justify-center">
//                         <p className="block mb-3">Drag & Drop an Image Here</p>
//                         <label className="px-5 py-2 block bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black">
//                             Select Image
//                             <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
//                         </label>
//                     </div>
//                 ) : (
//                     <div className="relative flex flex-col items-center p-5 border rounded-lg shadow-md bg-gray-100">
//                         <img src={generatedImage} alt="Generated Preview" className="w-full h-auto rounded-lg" />
//                         <div className="flex gap-4 mt-4">
//                             <button 
//                                 onClick={handleViewInformation} 
//                                 className="px-5 py-2 bg-[#1E3D58] text-[#E8EEF1] cursor-pointer hover:bg-[#057DCD] hover:scale-105 rounded-sm shadow-md shadow-black"
//                                 disabled={isFetchingInfo}
//                             >
//                                 {isFetchingInfo ? "Fetching..." : "View Info"}
//                             </button>
//                             <button 
//                                 onClick={handleLiveDetection} 
//                                 className="px-5 py-2 bg-[#057DCD] text-[#E8EEF1] cursor-pointer hover:bg-[#1E3D58] hover:scale-105 rounded-sm shadow-md shadow-black"
//                             >
//                                 Live Detection
//                             </button>
//                             <button 
//                                 onClick={resetState} 
//                                 className="bg-red-500 px-5 py-2 text-[#E8EEF1] cursor-pointer hover:bg-[#1E3D58] hover:scale-105 rounded-sm shadow-md shadow-black"
//                             >
//                                 Back
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {isProcessing && (
//                 <div className="text-center mt-4 text-blue-500 animate-pulse" aria-live="polite">
//                     Processing Image, Please Wait...
//                 </div>
//             )}

//             {errorMessage && (
//                 <div className="text-center mt-4 text-red-600 font-bold" aria-live="polite">
//                     {errorMessage}
//                 </div>
//             )}

//             {showLiveFeed && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-2xl">
//                         <h2 className="text-xl font-bold text-blue-500 mb-4">Live Detection</h2>
//                         <div className="flex justify-center">
//                             <img 
//                                 src="http://127.0.0.1:8000/live_camera" 
//                                 alt="Live Camera Feed"
//                                 className="w-full h-auto rounded-lg shadow-md"
//                             />
//                         </div>
//                         <div className="mt-6 flex justify-end">
//                             <button 
//                                 onClick={stopLiveDetection} 
//                                 className="px-5 py-2 bg-red-500 text-white cursor-pointer hover:bg-red-600 rounded-sm shadow-md"
//                             >
//                                 Close Camera
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {alertMessage && (
//                 <div className="fixed top-5 right-5 bg-red-500 text-white p-4 rounded-lg shadow-md">
//                     <strong>{alertMessage}</strong>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ImageDragger;
