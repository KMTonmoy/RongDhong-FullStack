import React from 'react';

const BoxInfo = () => {
    return (
        <div className="rounded-xl bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white flex flex-col md:flex-row justify-between items-center p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Text Section */}
            <div className="text-center md:text-left mb-4 md:mb-0 md:pr-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                    Save your money up to <span className="text-yellow-400">53%</span> within the next <span className="text-yellow-400">14 Days</span>
                </h1>
                <p className="text-sm md:text-base text-gray-200">
                    Don't miss out on this amazing offer! Grab it before it's too late and start saving today.
                </p>
            </div>

            {/* Image Section */}
            <img
                src="https://i.ibb.co/FJK91rm/Group.png"
                alt="Save Money"
                className="w-36 md:w-44 lg:w-56"
            />
        </div>
    );
};

export default BoxInfo;
