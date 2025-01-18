'use client'
import React from 'react';
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8 mt-12"
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-xl font-bold"
                    >
                        রংঢং ফ্যাশান 
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-lg font-semibold"
                    >
                        <p>Phone: +8801731-158705</p>
                    </motion.div>
                </div>

                <div className="flex justify-center space-x-6 mt-6">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-lg hover:text-yellow-300"
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-lg hover:text-yellow-300"
                    >
                        Services
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-lg hover:text-yellow-300"
                    >
                        About
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-lg hover:text-yellow-300"
                    >
                        Contact
                    </motion.a>
                </div>

                <div className="flex justify-center space-x-6 mt-6">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-lg hover:text-yellow-300"
                    >
                        Privacy Policy
                    </motion.a>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="text-lg hover:text-yellow-300"
                    >
                        Terms of Service
                    </motion.a>
                </div>

                <div className="text-center mt-8 text-sm">
                    <p>&copy; {currentYear} রংঢং. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
