import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import SearchCars from './components/SearchCars';
import { motion } from 'framer-motion';
import AboutPage from './components/AboutPage';
import InfoPage from './components/InfoPage';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-10 bg-gray-50"
      >
        <Category />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-10 bg-white"
      >
        <SearchCars />
      </motion.div>

      <InfoPage/>

    <AboutPage/>

    <Footer/>

    </div>
  );
}

export default HomePage;