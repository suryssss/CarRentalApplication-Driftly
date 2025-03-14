import React from 'react';
import { Separator } from '@radix-ui/react-select';
import { BsFuelPump } from 'react-icons/bs';
import { MdOutlineSpeed } from 'react-icons/md';
import { GiGearStick } from 'react-icons/gi';
import { motion } from 'framer-motion';

function CarItem({ car }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }} 
      transition={{ type: 'spring', stiffness: 300 }}
    >
        <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white pb-1'>New</h2>
      <img
        src={car?.image}
        alt={car?.name}
        width={300}
        height={250}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl text-gray-800 mb-2">{car?.name}</h2>
        <Separator className="bg-gray-200 h-px my-2" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col items-center text-center">
            <BsFuelPump className="text-xl text-gray-600 mb-2" />
            <p className="text-sm text-gray-600">{car.fuelType}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MdOutlineSpeed className="text-xl text-gray-600 mb-2" />
            <p className="text-sm text-gray-600">{car.miles} Miles</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <GiGearStick className="text-xl text-gray-600 mb-2" />
            <p className="text-sm text-gray-600">{car.gearType}</p>
          </div>
        </div>
        <Separator className="bg-gray-200 h-px my-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl text-gray-800">₹{car.price}</h2>
          <motion.button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }} 
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default CarItem;