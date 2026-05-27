/* eslint-disable react/no-unescaped-entities */
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
  FiCheckCircle,
  FiAlertCircle,
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
  const [result, setResult] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // WEB3FORMS SUBMIT
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setResult("");

    try {
      const formDataToSend = new FormData();

      formDataToSend.append(
        "access_key",
        "eef9ca9f-4bbd-4d11-b78d-7f4032110a84",
      );

      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      // Optional
      formDataToSend.append("from_name", "Lasata Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setResult("error");
      }
    } catch (error) {
      console.log(error);
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
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
      </section>

      {/* Contact Cards */}
      <section className="py-12 lg:py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-2 border border-gray-200"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
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

      {/* Main Section */}
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
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+977 98..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50"
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

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
                  />
                </div>

                {/* Success/Error Message */}
                {result === "success" && (
                  <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2">
                    <FiCheckCircle />
                    Message sent successfully!
                  </div>
                )}

                {result === "error" && (
                  <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
                    <FiAlertCircle />
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-70 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg"
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

            {/* Right Side */}
            <div className="space-y-8">
              {/* Map */}
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

                <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>

                    <p className="text-gray-700 font-semibold">
                      Interactive Map
                    </p>

                    <button
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=Lasata+Department+Store+Vyas+Municipality+Tanahun+Nepal",
                          "_blank",
                        )
                      }
                      className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-yellow-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FiMessageCircle className="text-yellow-600" />
                  Connect With Us
                </h3>

                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/LasataDS"
                    target="_blank"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FiFacebook size={20} />
                    Facebook
                  </a>

                  <a
                    href="https://instagram.com/lasata"
                    target="_blank"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FiInstagram size={20} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
