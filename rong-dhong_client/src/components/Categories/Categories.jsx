'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Heading from '../Heading/Heading';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:8000/categorysList')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    const getAnimationVariant = (index) => ({
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
            },
        },
    });

    return (
        <div className="py-10">
            <div className="container mx-auto px-6">
                <Heading text="Categories" />
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="cursor-pointer relative group bg-white rounded-xl shadow-lg overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={getAnimationVariant(index)}
                            onClick={() => router.push(`/${category.name.toLowerCase()}`)}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-36 object-cover group-hover:scale-105 transition-all duration-300"
                            />
                            <div className="p-2 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-sm font-semibold text-white">{category.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
