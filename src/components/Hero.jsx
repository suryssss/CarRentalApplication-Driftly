import React from 'react';
import Search from './Search';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="flex flex-col items-center p-10 pt-20 pb-20   mb-20 gap-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-bold text-white"
        >
          Your Ultimate Solution For Car Rentals
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[60px] font-bold text-white text-center"
        >
          Find Your Dream Car
        </motion.h2>
        <Search />
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src="/tesla.png"
          className="mt-10"
          alt="Tesla Car"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg"
        >
          Explore Cars
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;