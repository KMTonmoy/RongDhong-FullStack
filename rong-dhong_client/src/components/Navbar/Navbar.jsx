'use client';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";  // New icon for login

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-3xl font-extrabold cursor-pointer tracking-widest text-white"
        >
          রংঢংফ্যাশান
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["Home", "Shop", "Services", "About", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-yellow-400 transition-all duration-200"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Right Side: Login and Cart */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.button
            className="bg-white rounded-xl text-purple-500 hover:bg-purple-200 hover:text-white px-6 py-3  first-line: shadow-lg transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            Login
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer relative"
          >
            <IoCartOutline size={32} />
            <div className="absolute bottom-5 left-5 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
              {cartCount}
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-white text-purple-500 hover:bg-gray-200 p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {["Home", "Shop", "Services", "About", "Contact"].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-3 hover:bg-purple-200 cursor-pointer transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.div>
              ))}
              <motion.div
                className="p-3 hover:bg-purple-200 cursor-pointer transition-all duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Login
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
