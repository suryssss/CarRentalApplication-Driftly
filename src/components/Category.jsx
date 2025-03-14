import React from 'react';
import Data from '@/Shared/Data';
import { motion } from 'framer-motion';

function Category() {
  return (
    <div className="px-4 md:px-10 py-16 bg-gray-50">
      <h2 className="font-bold text-3xl text-center mb-8">Browse By Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Data.Category.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.img
              src={category.icon}
              width={40}
              height={40}
              alt={category.name}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Category;