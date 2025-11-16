/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  FiPhone,
  FiMapPin,
  FiClock,
  FiMail,
  FiSend,
  FiMessageCircle,
  FiFacebook,
  FiInstagram,
  FiMessageSquare,
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Visit Our Store",
      details: "Vyas Municipality, Tanahun, Nepal",
      description: "Located in the heart of Vyas Municipality",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+977 9843682127",
      description: "Available 8AM - 12AM daily",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: "info@lasata.com",
      description: "We'll respond within 24 hours",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiClock,
      title: "Store Hours",
      details: "8:00 AM - 12:00 AM",
      description: "Open every day",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Product Availability",
    "Delivery Service",
    "Wholesale Order",
    "Complaint",
    "Suggestion",
    "Partnership",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-yellow-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-4">
              We'd Love to Hear From You
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Have questions about our products, services, or delivery? Reach
              out to us - we're here to help!
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 lg:py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:transform hover:-translate-y-2 border border-gray-200"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-semibold text-lg mb-2">
                    {item.details}
                  </p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiMessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    We'll get back to you as soon as possible
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50"
                      placeholder="+977 98..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-yellow-300 disabled:to-yellow-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:shadow-none transform hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Store Location Map */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <FiMapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Our Location
                    </h2>
                    <p className="text-gray-600">
                      Visit us in Vyas Municipality
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl h-64 lg:h-80 flex items-center justify-center border-2 border-dashed border-blue-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-700 font-semibold">
                      Interactive Map
                    </p>
                    <p className="text-gray-600 text-sm">
                      Vyas Municipality, Tanahun
                    </p>
                    <button
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=Lasata+Department+Store+Vyas+Municipality+Tanahun+Nepal",
                          "_blank"
                        )
                      }
                      className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
                    >
                      <FiMapPin size={16} />
                      Get Directions
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    📍 Store Address:
                  </h4>
                  <p className="text-blue-800">
                    Lasata Department Store
                    <br />
                    Vyas Municipality, Tanahun
                    <br />
                    Gandaki Province, Nepal
                  </p>
                </div>
              </div>

              {/* Social Media & Quick Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-yellow-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FiMessageCircle className="text-yellow-600" />
                  Connect With Us
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/lasata"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <FiFacebook size={20} />
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/lasata"
                      className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <FiInstagram size={20} />
                      Instagram
                    </a>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">
                      💡 Quick Response:
                    </h4>
                    <p className="text-yellow-700 text-sm">
                      For urgent inquiries, call us directly at{" "}
                      <strong>9843682127</strong>. We're available during store
                      hours to assist you immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-500 mb-2">
                    What are your delivery charges?
                  </h4>
                  <p className="text-black">
                    Free delivery on orders above Rs. 500. Below that, delivery
                    charges start from Rs. 40 on the Damauli bazar.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-500 mb-2">
                    Do you accept online orders?
                  </h4>
                  <p className="text-black">
                    Yes! You can order through our Sajilo Snacks platform or
                    call us directly.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-500 mb-2">
                    What payment methods do you accept?
                  </h4>
                  <p className="text-black">
                    We accept cash, credit/debit cards, eSewa, Khalti, and
                    mobile banking.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-500 mb-2">
                    Can I return or exchange products?
                  </h4>
                  <p className="text-black">
                    Yes, we have a flexible return on the product damage or the
                    product is expired.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
