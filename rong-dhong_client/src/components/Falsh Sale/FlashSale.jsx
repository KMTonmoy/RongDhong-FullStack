import React from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import Heading from '../Heading/Heading';

const FlashSale = () => {
    const products = [
        { id: 1, name: "Product 1", price: "200", image: "https://5.imimg.com/data5/SELLER/Default/2023/8/338605749/MI/RH/RZ/8062019/whatsapp-image-2023-08-28-at-11-09-16-am-500x500.jpeg" },
        { id: 2, name: "Product 2", price: "300", image: "https://teddybearbd.com/uploads/2024/09/1726299359.webp" },
        { id: 3, name: "Product 3", price: "250", image: "https://pride-limited.com/storage/app/public/pgallery/958_product_image_1_medium_27.jpg" },
    ];

    return (
        <div className="py-10">
            <div className="container  mx-auto px-6">
                {/* Heading for Flash Sale */}
                <Heading text="Flash Sale" />

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative group bg-white rounded-xl shadow-lg overflow-hidden w-full mx-auto">
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                            />

                            {/* Overlay Text on Hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-4">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
