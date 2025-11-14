/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FiShoppingBag,
  FiStar,
  FiClock,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export default function Testomonal() {
  const testimonials = [
    {
      name: "Ram Bahadur",
      role: "Regular Customer",
      comment:
        "Lasata has been my family's trusted store for years. The quality and service never disappoint!",
      rating: 5,
    },
    {
      name: "Sita Sharma",
      role: "Local Resident",
      comment:
        "From their physical store to Sajilo Snacks online, Lasata makes shopping so convenient.",
      rating: 5,
    },
    {
      name: "Hari Prasad",
      role: "Business Owner",
      comment:
        "The freshness of their products and the friendly staff keep me coming back every week.",
      rating: 4,
    },
  ];
  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              community members
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
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Lasata?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily
            needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://sajilosnacks.kyte.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg"
            >
              <FiShoppingBag />
              Shop Online Now
            </a>
            <a
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Visit Our Store
            </a>
          </div>

          {/* Store Info */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <FiMapPin className="text-blue-300" size={20} />
              <span>Vyas Municipality, Tanahun</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FiClock className="text-blue-300" size={20} />
              <span>8AM - Midnight</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FiPhone className="text-blue-300" size={20} />
              <span>9843682127</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
