'use client';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch banners from the API
        const fetchBanners = async () => {
            try {
                const response = await fetch('http://localhost:8000/banners');
                if (!response.ok) {
                    throw new Error('Failed to fetch banners');
                }
                const data = await response.json();
                setBanners(data);
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchBanners();

        // Auto slide the banner every 5 seconds
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, 5000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [currentIndex, banners.length]);

    const goToNextSlide = () => {
        const newIndex = currentIndex === banners.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = currentIndex === 0 ? banners.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const variants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <div className="max-w-7xl mx-auto my-10 relative">
            {/* Fixed height container to avoid collapsing */}
            <div className="relative  overflow-hidden rounded-2xl h-[400px]">
                {banners.length > 0 ? (
                    <>
                        {/* Animated Banner Image */}
                        <AnimatePresence>
                            <motion.img
                                key={currentIndex}
                                src={banners[currentIndex]?.imageUrl}
                                alt={`Banner ${currentIndex + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 focus:outline-none"
                            onClick={goToPrevSlide}
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 focus:outline-none"
                            onClick={goToNextSlide}
                        >
                            <FaArrowRight size={20} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 flex justify-center w-full">
                            {banners.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-1 w-[2px] mx-1 rounded-full ${index === currentIndex
                                        ? 'bg-[#C74FCC]'
                                        : 'bg-gray-400'
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                ></button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500 py-20">
                        No banners available
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner;
