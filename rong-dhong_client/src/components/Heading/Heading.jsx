import React from 'react';

const Heading = ({ text }) => {
    return (
        <div>
            <div className="text-left glex items-center   mb-6">
                <h2 className="text-3xl font-bold ">{text}</h2>
                <div className="w-28 h-1 rounded-3xl   bg-gradient-to-r from-purple-600 to-pink-600 "></div>
            </div>
        </div>
    );
};

export default Heading;