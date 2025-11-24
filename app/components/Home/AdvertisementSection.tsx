/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiExternalLink, FiStar, FiClock, FiShoppingBag } from "react-icons/fi";

// Type definitions
interface Advertisement {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  ctaText: string;
  category: string;
  featured?: boolean;
  duration?: number; // in seconds for auto-rotation
  discount?: string;
}

export default function AdvertisementSection() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showAdModal, setShowAdModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState<Advertisement | null>(null);
  const [direction, setDirection] = useState(0); // 0: next, 1: previous

  const advertisements: Advertisement[] = [
    {
      id: 1,
      title: "Ads",
      description: "Advertisement.",
      image: "/ads/grand-opening-sale.jpg",
      link: "/offers/grand-opening",
      ctaText: "Shop Now",
      category: "sale",
      featured: true,
      duration: 5,
      discount: "50% OFF"
    },
    {
      id: 2,
      title: "Ads",
      description: "Advertisement.",
      image: "/ads/free-delivery.jpg",
      link: "/services/delivery",
      ctaText: "Learn More",
      category: "service",
      duration: 6
    },
    {
      id: 3,
      title: "Ads",
      description: "Advertisement.",
      image: "/ads/new-products.jpg",
      link: "/products/new",
      ctaText: "Explore",
      category: "products",
      duration: 7,
      discount: "NEW"
    },
    {
      id: 4,
      title: "Ads",
      description: "Advertisement.",
      image: "/ads/loyalty-program.jpg",
      link: "/loyalty",
      ctaText: "Join Now",
      category: "program",
      duration: 8
    },
  ];

  // Animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextAd = () => {
    setDirection(1);
    setCurrentAdIndex((prevIndex) => 
      prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAd = () => {
    setDirection(-1);
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? advertisements.length - 1 : prevIndex - 1
    );
  };

  const goToAd = (index: number) => {
    setDirection(index > currentAdIndex ? 1 : -1);
    setCurrentAdIndex(index);
  };

  const openAdModal = (ad: Advertisement) => {
    setSelectedAd(ad);
    setShowAdModal(true);
    setIsAutoPlaying(false);
  };

  const closeAdModal = () => {
    setShowAdModal(false);
    setSelectedAd(null);
    setIsAutoPlaying(true);
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const currentAd = advertisements[currentAdIndex];
    const interval = setInterval(() => {
      nextAd();
    }, (currentAd?.duration || 5) * 1000);

    return () => clearInterval(interval);
  }, [currentAdIndex, isAutoPlaying]);

  const currentAd = advertisements[currentAdIndex];

  return (
    <>
      {/* Main Advertisement Banner */}
      <motion.section 
        className="py-12 bg-gradient-to-br from-blue-50 via-white to-yellow-50 border-y border-blue-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <FiStar className="text-yellow-600" size={16} />
              Special Promotions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Place  <span className="text-blue-600">Your</span>  <span className="text-yellow-600">Advertisement</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Main Advertisement Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section with Yellow Accent */}
                <div className="lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-400/10 z-10"></div>
                  
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                      key={currentAdIndex}
                      src={currentAd.image}
                      alt={currentAd.title}
                      className="w-full h-64 lg:h-80 object-cover"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                    />
                  </AnimatePresence>
                  
                  {/* Discount Badge */}
                  {currentAd.discount && (
                    <motion.div 
                      className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      {currentAd.discount}
                    </motion.div>
                  )}
                  
                  {/* Featured Badge */}
                  {currentAd.featured && (
                    <motion.div 
                      className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <FiStar size={12} />
                      Featured
                    </motion.div>
                  )}
                  
                  {/* Counter */}
                  <motion.div 
                    className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentAdIndex + 1} / {advertisements.length}
                  </motion.div>
                </div>

                {/* Content Section */}
                <motion.div 
                  className="lg:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    {/* Category Tag */}
                    <motion.span 
                      className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200 capitalize"
                      whileHover={{ scale: 1.05 }}
                    >
                      {currentAd.category}
                    </motion.span>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentAd.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-700 text-lg leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentAd.description}
                    </motion.p>

                    {/* Features List */}
                    <motion.div 
                      className="flex items-center gap-4 text-sm text-gray-600 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-1">
                        <FiClock className="text-blue-600" size={14} />
                        <span>Limited Time</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiShoppingBag className="text-yellow-600" size={14} />
                        <span>All Products</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.a
                      href={currentAd.link}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentAd.ctaText} 
                      <FiExternalLink size={18} />
                    </motion.a>
                    <motion.button
                      onClick={() => openAdModal(currentAd)}
                      className="border-2 border-yellow-500 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <motion.div 
                className="border-t border-blue-200 bg-gradient-to-r from-blue-50 to-yellow-50 px-6 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  {/* Dot Indicators */}
                  <div className="flex gap-3">
                    {advertisements.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToAd(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentAdIndex 
                            ? 'bg-yellow-500 shadow-lg' 
                            : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                        animate={{ 
                          scale: index === currentAdIndex ? 1.3 : 1
                        }}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={prevAd}
                      className="p-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-blue-600"
                      aria-label="Previous advertisement"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="px-4 py-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-blue-600 font-semibold text-sm"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </motion.button>
                    <motion.button
                      onClick={nextAd}
                      className="p-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-blue-600"
                      aria-label="Next advertisement"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiChevronRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Advertisement Modal */}
      <AnimatePresence>
        {showAdModal && selectedAd && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-yellow-200"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative">
                <motion.img
                  src={selectedAd.image}
                  alt={selectedAd.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.button
                  onClick={closeAdModal}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={20} />
                </motion.button>
                
                {/* Modal Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {selectedAd.discount && (
                    <motion.div 
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      {selectedAd.discount}
                    </motion.div>
                  )}
                  {selectedAd.featured && (
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <FiStar size={12} />
                      Featured
                    </motion.div>
                  )}
                </div>
              </div>

              <motion.div 
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.span 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold capitalize border border-blue-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {selectedAd.category}
                  </motion.span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FiClock size={14} />
                    Limited Time Offer
                  </span>
                </div>

                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedAd.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedAd.description}
                </motion.p>

                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-xl mb-6 border border-blue-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                    <FiShoppingBag className="text-blue-600" />
                    Offer Details:
                  </h4>
                  <div className="text-gray-700 space-y-2">
                    {["Valid for limited time only", "Terms and conditions apply", "Available at Lasata Department Store", "Online orders also eligible"].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.a
                    href={selectedAd.link}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-xl flex-1"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedAd.ctaText} 
                    <FiExternalLink size={18} />
                  </motion.a>
                  <motion.button
                    onClick={closeAdModal}
                    className="border-2 border-yellow-500 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}