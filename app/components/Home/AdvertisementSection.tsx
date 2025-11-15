/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
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

  const advertisements: Advertisement[] = [
    {
      id: 1,
      title: "Grand Opening Sale!",
      description: "Enjoy up to 50% off on all products. Limited time offer for our valued customers.",
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
      title: "Free Home Delivery",
      description: "Get free delivery on orders above Rs. 1000. Fast and reliable service in Tanahun.",
      image: "/ads/free-delivery.jpg",
      link: "/services/delivery",
      ctaText: "Learn More",
      category: "service",
      duration: 6
    },
    {
      id: 3,
      title: "New Organic Products",
      description: "Discover our latest range of organic vegetables and locally sourced fresh products.",
      image: "/ads/new-products.jpg",
      link: "/products/new",
      ctaText: "Explore",
      category: "products",
      duration: 7,
      discount: "NEW"
    },
    {
      id: 4,
      title: "Loyalty Program",
      description: "Join our loyalty program and earn points on every purchase. Exclusive rewards await!",
      image: "/ads/loyalty-program.jpg",
      link: "/loyalty",
      ctaText: "Join Now",
      category: "program",
      duration: 8
    },
    {
      id: 5,
      title: "Festive Special Offers",
      description: "Special discounts and bundles for the upcoming festival season. Don't miss out!",
      image: "/ads/festive-offers.jpg",
      link: "/offers/festive",
      ctaText: "View Offers",
      category: "seasonal",
      featured: true,
      duration: 5,
      discount: "30% OFF"
    }
  ];

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? advertisements.length - 1 : prevIndex - 1
    );
  };

  const goToAd = (index: number) => {
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
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-yellow-50 border-y border-blue-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <FiStar className="text-yellow-600" size={16} />
              Special Promotions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Exclusive <span className="text-blue-600">Offers</span> & <span className="text-yellow-600">Deals</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don&#39;t miss these amazing opportunities from Lasata Department Store
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Advertisement Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section with Yellow Accent */}
                <div className="lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-400/10 z-10"></div>
                  <img
                    src={currentAd.image}
                    alt={currentAd.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  
                  {/* Discount Badge */}
                  {currentAd.discount && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                      {currentAd.discount}
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {currentAd.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                      <FiStar size={12} />
                      Featured
                    </div>
                  )}
                  
                  {/* Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                    {currentAdIndex + 1} / {advertisements.length}
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50">
                  <div>
                    {/* Category Tag */}
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200 capitalize">
                      {currentAd.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentAd.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {currentAd.description}
                    </p>

                    {/* Features List */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center gap-1">
                        <FiClock className="text-blue-600" size={14} />
                        <span>Limited Time</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiShoppingBag className="text-yellow-600" size={14} />
                        <span>All Products</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={currentAd.link}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-xl"
                    >
                      {currentAd.ctaText} 
                      <FiExternalLink size={18} />
                    </a>
                    <button
                      onClick={() => openAdModal(currentAd)}
                      className="border-2 border-yellow-500 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="border-t border-blue-200 bg-gradient-to-r from-blue-50 to-yellow-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  {/* Dot Indicators */}
                  <div className="flex gap-3">
                    {advertisements.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToAd(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                          index === currentAdIndex 
                            ? 'bg-yellow-500 shadow-lg scale-125' 
                            : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={prevAd}
                      className="p-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-blue-600"
                      aria-label="Previous advertisement"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="px-4 py-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-blue-600 font-semibold text-sm"
                    >
                      {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </button>
                    <button
                      onClick={nextAd}
                      className="p-3 rounded-xl bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md text-blue-600"
                      aria-label="Next advertisement"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Advertisement Grid */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                More <span className="text-blue-600">Exciting</span> Offers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advertisements.filter(ad => ad.id !== currentAd.id).slice(0, 3).map((ad) => (
                  <div
                    key={ad.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 cursor-pointer group hover:transform hover:-translate-y-1"
                    onClick={() => openAdModal(ad)}
                  >
                    <div className="relative">
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {ad.discount && (
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                          {ad.discount}
                        </div>
                      )}
                      {ad.featured && (
                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-5 bg-gradient-to-b from-white to-blue-50">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3 capitalize">
                        {ad.category}
                      </span>
                      <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                        {ad.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {ad.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold text-sm">
                          Learn More →
                        </span>
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-200">
                          <FiExternalLink size={14} className="text-yellow-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Modal */}
      {showAdModal && selectedAd && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-yellow-200">
            <div className="relative">
              <img
                src={selectedAd.image}
                alt={selectedAd.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeAdModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FiX size={20} />
              </button>
              
              {/* Modal Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {selectedAd.discount && (
                  <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                    {selectedAd.discount}
                  </div>
                )}
                {selectedAd.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                    <FiStar size={12} />
                    Featured
                  </div>
                )}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold capitalize border border-blue-200">
                  {selectedAd.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <FiClock size={14} />
                  Limited Time Offer
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedAd.title}
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {selectedAd.description}
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-xl mb-6 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                  <FiShoppingBag className="text-blue-600" />
                  Offer Details:
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Valid for limited time only
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Terms and conditions apply
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Available at Lasata Department Store
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Online orders also eligible
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedAd.link}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-center shadow-lg hover:shadow-xl flex-1"
                >
                  {selectedAd.ctaText} 
                  <FiExternalLink size={18} />
                </a>
                <button
                  onClick={closeAdModal}
                  className="border-2 border-yellow-500 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}