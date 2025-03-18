import React, { useState } from 'react';
import Header from '@/components/Header';
import carDetails from '../../Shared/carDetails.json';
import InputField from './InputField';
import DropDownField from './DropDownField';
import TextArea from './TextArea';
import { Separator } from "@radix-ui/react-separator";
import features from '../../Shared/features.json';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function AddListing() {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form Submitted", formData);
      setIsSubmitting(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="px-4 md:px-20 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            {/* Replace FiCar with a text-based icon or SVG */}
            <span role="img" aria-label="car" className="text-blue-600 text-4xl">🚗</span>
            Add New Listing
            <span role="img" aria-label="plus" className="text-blue-600 text-4xl">➕</span>
          </h2>
          <p className="text-gray-600 text-lg">Fill in the details to showcase your vehicle</p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 md:p-12 shadow-2xl rounded-3xl mx-auto max-w-5xl border border-gray-100"
        >
          {/* Car Details Section */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-1 w-8 bg-blue-600 rounded-full" />
              <h2 className="text-2xl font-semibold text-gray-800">Vehicle Information</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {carDetails.carDetails.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-blue-50 rounded-xl transform scale-95 group-hover:scale-100 transition duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative p-5 bg-white rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-lg border border-gray-200">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-1 mb-3">
                      {item?.label}
                      {item.required && <span className="text-red-500">*</span>}
                    </label>
                    {item.fieldType === "text" || item.fieldType === "number" ? (
                      <InputField {...item} handleInputChange={handleInputChange} />
                    ) : item.fieldType === "dropdown" ? (
                      <DropDownField {...item} handleInputChange={handleInputChange} />
                    ) : item.fieldType === "textarea" ? (
                      <TextArea item={item} handleInputChange={handleInputChange} />
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Separator */}
          <Separator className="my-12 bg-gradient-to-r from-transparent via-blue-200 to-transparent h-[1px]" />

          {/* Features Section */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-1 w-8 bg-blue-600 rounded-full" />
              <h2 className="text-2xl font-semibold text-gray-800">Vehicle Features</h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {features.features.map((item, index) => (
                <motion.label
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    formData[item.name] 
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-50 hover:bg-blue-50 border-2 border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Checkbox 
                    checked={formData[item.name] || false}
                    onCheckedChange={(checked) => handleInputChange(item.name, checked)}
                    className="w-6 h-6 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <AnimatePresence>
                    {formData[item.name] && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="ml-auto"
                      >
                        {/* Replace FiCheckCircle with a text-based icon or SVG */}
                        <span role="img" aria-label="check" className="text-blue-600 text-xl">✔️</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.label>
              ))}
            </motion.div>
          </section>

          {/* Submit Button */}
          <motion.div 
            className="mt-12 flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="relative px-8 py-6 text-lg font-semibold bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <AnimatePresence mode='wait'>
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </motion.div>
                ) : (
                  <motion.div
                    key="submit"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    {/* Replace FiCar with a text-based icon or SVG */}
                    <span role="img" aria-label="car" className="text-xl">🚗</span>
                    Publish Listing
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}

export default AddListing;