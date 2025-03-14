import React from 'react';
import CarItem from './CarItem';
import FakeData from '@/Shared/FakeData';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

function SearchCars() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        className="font-bold text-3xl text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Most Searched Cars
      </motion.h2>
      <Carousel opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CarItem car={car} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex bg-white/80 hover:bg-white/90 transition-colors duration-300 hover:scale-110" />
        <CarouselNext className="hidden sm:flex bg-white/80 hover:bg-white/90 transition-colors duration-300 hover:scale-110" />
      </Carousel>
    </div>
  );
}

export default SearchCars;