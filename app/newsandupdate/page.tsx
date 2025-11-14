/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiShoppingBag, FiTruck, FiStar, FiUsers, FiClock, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const features = [
    {
      icon: FiShoppingBag,
      title: "Wide Product Selection",
      description: "Everything from groceries to household essentials in one place"
    },
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep"
    },
    {
      icon: FiStar,
      title: "Quality Guaranteed",
      description: "Fresh products with quality you can trust"
    },
    {
      icon: FiUsers,
      title: "Community Focused",
      description: "Serving our local community for over 25 years"
    }
  ];

  const categories = [
    {
      name: "Groceries",
      image: "/categories/groceries.jpg",
      items: "500+ items"
    },
    {
      name: "Household Essentials",
      image: "/categories/household.jpg",
      items: "300+ items"
    },
    {
      name: "Personal Care",
      image: "/categories/personal-care.jpg",
      items: "200+ items"
    },
    {
      name: "Snacks & Drinks",
      image: "/categories/snacks.jpg",
      items: "150+ items"
    }
  ];

  const testimonials = [
    {
      name: "Ram Bahadur",
      role: "Regular Customer",
      comment: "Lasata has been my family's trusted store for years. The quality and service never disappoint!",
      rating: 5
    },
    {
      name: "Sita Sharma",
      role: "Local Resident",
      comment: "From their physical store to Sajilo Snacks online, Lasata makes shopping so convenient.",
      rating: 5
    },
    {
      name: "Hari Prasad",
      role: "Business Owner",
      comment: "The freshness of their products and the friendly staff keep me coming back every week.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="/hero-fallback.jpg" alt="Lasata Store" className="w-full h-full object-cover" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Video Controls */}
        <div className="absolute bottom-6 right-6 flex gap-3 z-20">
          <button
            onClick={toggleVideoPlayback}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
          >
            {isVideoPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
          >
            {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <FiStar className="text-yellow-300" />
            <span>Trusted Since 2000 • Now Online</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mt-2">
              Lasata
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Your Local Shopping Destination for 
            <span className="block">Comfort, Quality, and Happiness</span>
          </p>

          <p className="text-lg sm:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
            From our family to yours - 25 years of trusted service, now available both in-store and online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://sajilosnacks.kyte.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              Shop Online Now
              <FiArrowRight />
            </a>
            <a
              href="/about"
              className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border border-white border-opacity-30"
            >
              Learn Our Story
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lasata?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of traditional values and modern convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <Icon className="text-blue-600 group-hover:text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <img
                src="/store-interior.jpg"
                alt="Lasata Store Interior"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Trust & Comfort
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over 25 years, Lasata has been more than just a store - it's been a trusted part of our community. 
                From our humble beginnings as a small grocery shop to today's modern department store, our commitment 
                to quality and service remains unchanged.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The word <span className="font-semibold text-blue-900">"Lasata" (लसता)</span> means comfort, satisfaction, 
                and happiness - values we bring to every customer interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Our Story
                </a>
                <a
                  href="/history"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Our History
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of quality products for all your daily needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🛒</div>
                    <p className="text-sm">{category.name}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-blue-200">{category.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}