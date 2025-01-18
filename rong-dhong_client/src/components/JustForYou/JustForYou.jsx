'use client';

import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Heading from '../Heading/Heading';
import { motion } from 'framer-motion';

const JustForYou = () => {
    const [products, setProducts] = useState([]);
    const [visibleProductsCount, setVisibleProductsCount] = useState(16);
    const router = useRouter();

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then((response) => response.json())
            .then((data) => {
                const shuffledProducts = shuffleArray(data);
                const maxProducts = shuffledProducts.slice(0, 32); 
                setProducts(maxProducts);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const handleLoadMore = () => {
        setVisibleProductsCount((prevCount) => Math.min(prevCount + 6, products.length));
    };

    const handleShowLess = () => {
        setVisibleProductsCount(16);
    };

    const getAnimationVariant = (index) => ({
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
            },
        },
    });

    return (
        <div className="py-10">
            <div className="container mx-auto px-6">
                <Heading text="Just For You" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.slice(0, visibleProductsCount).map((product, index) => (
                        <motion.div
                            key={product.id}
                            onClick={() => router.push(`/justforyou/${product.id}`)}
                            className="cursor-pointer relative group bg-white rounded-xl shadow-lg overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={getAnimationVariant(index)}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                                <p className="text-gray-600 mt-1">{product.description}</p>
                                <p className="text-purple-600 font-bold mt-2">${product.price}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-400 flex items-center">
                                        {[...Array(product.rating)].map((_, index) => (
                                            <FaStar key={index} />
                                        ))}
                                    </span>
                                    <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    {products.length > visibleProductsCount ? (
                        <button
                            onClick={handleLoadMore}
                            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
                        >
                            Load More
                        </button>
                    ) : (
                        products.length > 16 && (
                            <button
                                onClick={handleShowLess}
                                className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300"
                            >
                                Show Less
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default JustForYou;
