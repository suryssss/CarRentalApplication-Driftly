import { UserButton, useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added useNavigate
import { Button } from './ui/button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  const { user, isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Navigation Hook

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="flex justify-between items-center shadow-sm p-5 mt-0 z-50 w-full px-4 md:px-10"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        src="/logo.png"
        width={40}
        height={10}
        alt="Logo"
      />

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <FaTimes size={24} className="text-gray-800" />
          ) : (
            <FaBars size={24} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <motion.ul className="hidden md:flex gap-16 mr-20">
          {['Home', 'Our Cars', 'Services', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <UserButton />
              <Button onClick={() => navigate('/profile')}>Submit Listing</Button>
            </>
          ) : (
            <Button onClick={() => navigate('/profile')}>Submit Listing</Button>
          )}
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={mobileMenuVariants}
          className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {['Home', 'Our Cars', 'Services', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Header;
