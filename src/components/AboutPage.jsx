import React from 'react';
import { motion } from 'framer-motion'; 
import { BsCheckCircle, BsPeople, BsClock } from 'react-icons/bs';

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <motion.div
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About DRIFTLY</h1>
          <p className="text-lg">
            Streamlining vehicle rental services with an effortless booking process that saves you time and hassle.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Mission</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          At DRIFTLY, we aim to revolutionize the vehicle rental industry by providing a seamless, user-friendly platform
          that connects customers with the perfect vehicle for their needs. Our mission is to make renting a vehicle as
          simple and efficient as possible.
        </p>
      </motion.div>
      <motion.div
        className="bg-white py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <BsCheckCircle className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Effortless Booking</h3>
              <p className="text-gray-600">
                With just a few clicks, find and book the perfect vehicle tailored to your needs.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <BsPeople className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                We prioritize your satisfaction, offering 24/7 support and a hassle-free experience.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <BsClock className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Time-Saving</h3>
              <p className="text-gray-600">
                Our platform is designed to save you time, making vehicle rental quick and efficient.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="ceo.jpeg"
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">John</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="mem1.jpg"
                alt="Team Member"
                className="w-full h-full object-c over"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Smith</h3>
            <p className="text-gray-600">COO</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="mem2.jpg"
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Mike</h3>
            <p className="text-gray-600">CTO</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers and experience the convenience of DRIFTLY today.
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Vehicles
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;