'use client'
import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';

const FlashSale = () => {
    const [products, setProducts] = useState([]);
    const [visibleProductsCount, setVisibleProductsCount] = useState(3);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then((response) => response.json())
            .then((data) => {
                const flashSaleProducts = data.filter(product => product.priority === 'flash');
                setProducts(flashSaleProducts);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleProductsCount(prevCount => prevCount + 6);
    };

    const handleShowLess = () => {
        setVisibleProductsCount(3);
    };

    return (
        <div className="py-10">
            <div className="container mx-auto px-6">
                {/* Heading for Flash Sale */}
                <Heading text="Flash Sale" />

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.slice(0, visibleProductsCount).map((product) => (
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

                {/* Load More / Show Less Button */}
                <div className="flex justify-center mt-6">
                    {visibleProductsCount < products.length ? (
                        <button
                            onClick={handleLoadMore}
                            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                        >
                            Load More
                        </button>
                    ) : (
                        <button
                            onClick={handleShowLess}
                            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
