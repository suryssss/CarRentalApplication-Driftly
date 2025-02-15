import React from 'react';
import { motion } from 'framer-motion';

function InfoPage() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 pb-16 pt-5">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Discover the Future of Luxury Cars
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                Experience unparalleled performance, cutting-edge technology, and timeless design
                with our latest collection of luxury vehicles. Whether you're looking for speed,
                comfort, or style, we have the perfect car for you.
              </p>
              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Explore Models
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border-2 border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1xw:0.8465011286681715xh;center,top&resize=1200:*"
              className="rounded-xl shadow-2xl"
              alt="Mercedes Benz"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InfoPage;