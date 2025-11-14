/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FiShoppingBag, FiTruck, FiHeart, FiStar, FiClock, FiMapPin, FiPhone } from "react-icons/fi";

export default function AboutPage() {
  const stats = [
    { number: "2025", label: "Founded" },
    { number: "1146", label: "Nepal Sambat" },
    { number: "1000+", label: "Products" },
    { number: "24/7", label: "Service" },
  ];

  const values = [
    {
      icon: FiHeart,
      title: "Comfort & Satisfaction",
      description: "Bringing comfort and joy through quality service and products"
    },
    {
      icon: FiStar,
      title: "Quality Assurance",
      description: "Every product meets our high standards of quality and freshness"
    },
    {
      icon: FiShoppingBag,
      title: "Wide Selection",
      description: "Everything you need in one convenient place"
    },
   
  ];

  const storeInfo = [
    { icon: FiClock, text: "8AM – Midnight 12:00AM" },
    { icon: FiMapPin, text: "Vyas Municipality, Tanahun" },
    { icon: FiPhone, text: "9843682127" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Lasata
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90">
              Your Local Shopping Destination
            </p>
            <p className="text-lg lg:text-xl opacity-80">
              Comfort, Satisfaction, and Happiness in Every Visit
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Lasata Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/1.jpg"
                  alt="Lasata Department Store"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-sm font-semibold">Since 2025 AD</div>
                  <div className="text-xs">Nepal Sambat 1146</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Lasata (LDS)
              </h2>
              
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-blue-900">&#34;Lasata&#34; (लसता)</span> in Nepali means 
                  <span className="italic"> &#34;comfort, satisfaction, and happiness&#34;</span>, which perfectly 
                  reflects our mission — to bring comfort and joy to every customer through quality service and products.
                </p>

                <p>
                  Lasata provides a wide selection of groceries, household goods, personal care items, 
                  and daily essentials, ensuring customers can find everything they need in one convenient place. 
                  With a focus on affordability and customer satisfaction, Lasata combines modern retail 
                  standards with the warmth of Nepali hospitality.
                </p>

                <p>
                  Beyond being a department store, Lasata stands as a symbol of trust, community, and convenience. 
                  Every product and interaction carries our promise of care and quality, building strong relationships 
                  with customers and becoming a trusted part of their daily lives.
                </p>
              </div>

              {/* Store Info */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-4">Store Information</h3>
                <div className="space-y-3">
                  {storeInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 text-gray-700">
                        <Icon className="text-blue-600" size={18} />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes Lasata your trusted shopping destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sajilo Snacks Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src="/2.jpg"
                alt="Sajilo Snacks"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Online Sub-brand
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                🛒 About Sajilo Snacks
              </h2>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-green-700">&#34;Sajilo&#34; (सजिलो)</span> means 
                  <span className="italic"> &#34;easy or convenient&#34;</span> in Nepali — perfectly describing 
                  our mission to make online shopping effortless for everyone.
                </p>

                <p>
                  Unlike a restaurant or food brand, Sajilo Snacks functions as an online department store, 
                  featuring the same trusted items available at Lasata&#39;s physical store. From groceries and 
                  household essentials to packaged goods, everything is directly supplied by Lasata (LDS) 
                  ensuring authenticity, reliability, and fair pricing.
                </p>

                <p>
                  Built to meet the changing needs of modern shoppers, Sajilo Snacks provides a smooth and 
                  user-friendly online experience where customers can browse, order, and receive products 
                  from the comfort of their homes.
                </p>

                <p className="font-semibold text-green-700">
                  As Lasata&#39;s official online wing, Sajilo Snacks represents the future of local retail in Nepal — 
                  a trusted, convenient, and accessible digital shopping destination for families everywhere.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sajilosnacks.kyte.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Visit Sajilo Snacks Store
                </a>
                <a
                  href="/contact"
                  className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience the Lasata Difference
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Where comfort meets convenience in the heart of Tanahun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Directions
            </a>
            <a
              href="https://sajilosnacks.kyte.site"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Shop Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}