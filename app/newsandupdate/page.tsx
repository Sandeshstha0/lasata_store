/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FiCalendar, FiClock, FiMapPin, FiTag, FiSearch } from "react-icons/fi";

// Type definitions
interface NewsUpdate {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  featured: boolean;
  location?: string;
  time?: string;
}

interface Category {
  id: string;
  name: string;
}

interface NewsCardProps {
  update: NewsUpdate;
  featured?: boolean;
}

export default function NewsUpdatesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories: Category[] = [
    { id: "all", name: "All Updates" },
    { id: "announcements", name: "Announcements" },
    { id: "events", name: "Events" },
    { id: "products", name: "New Products" },
    { id: "offers", name: "Special Offers" },
    { id: "community", name: "Community" }
  ];

  const newsUpdates: NewsUpdate[] = [
    {
      id: 1,
      title: "Grand Opening Celebration - Lasata Department Store",
      excerpt: "Join us for the grand opening of Lasata Department Store with special discounts, cultural programs, and free gifts for first 100 customers!",
      content: "We're thrilled to announce the grand opening of Lasata Department Store on March 15, 2025. Come celebrate with us and enjoy amazing opening offers, traditional cultural performances, and special gifts for our valued customers.",
      image: "/news/grand-opening.jpg",
      date: "2025-03-10",
      category: "events",
      tags: ["grand-opening", "celebration", "discounts"],
      author: "Lasata Team",
      featured: true,
      location: "Vyas Municipality, Tanahun",
      time: "9:00 AM - 8:00 PM"
    },
    {
      id: 2,
      title: "Sajilo Snacks - Online Store Now Live!",
      excerpt: "Our digital platform Sajilo Snacks is now officially launched. Order your favorite snacks and groceries online with fast delivery.",
      content: "We're excited to launch Sajilo Snacks, our online shopping platform. Now you can order all your favorite products from Lasata Department Store through our website with easy payment options and fast delivery service.",
      image: "/news/sajilo-launch.jpg",
      date: "2025-03-01",
      category: "announcements",
      tags: ["online-store", "sajilo-snacks", "delivery"],
      author: "Digital Team",
      featured: true
    },
    {
      id: 3,
      title: "New Product Line: Local Organic Vegetables",
      excerpt: "Introducing fresh, locally sourced organic vegetables from farmers in Tanahun region. Support local agriculture!",
      content: "We've partnered with local farmers to bring you the freshest organic vegetables. Our new product line features seasonal produce grown sustainably in the Tanahun region, supporting our local farming community.",
      image: "/news/organic-vegetables.jpg",
      date: "2025-02-25",
      category: "products",
      tags: ["organic", "local-farmers", "fresh-produce"],
      author: "Procurement Team",
      featured: false
    },
    {
      id: 4,
      title: "Weekly Discount: 20% Off on Household Essentials",
      excerpt: "Enjoy 20% discount on all household cleaning supplies and essentials this week. Stock up and save!",
      content: "This week only, get 20% off on all household essentials including cleaning supplies, toiletries, and daily necessities. Perfect time to stock up and save on your regular shopping.",
      image: "/news/household-sale.jpg",
      date: "2025-02-20",
      category: "offers",
      tags: ["discount", "household", "sale"],
      author: "Sales Team",
      featured: false
    },
    {
      id: 5,
      title: "Community Cleanliness Drive - Join Us!",
      excerpt: "Lasata organizes community cleanliness drive in Vyas Municipality. Volunteers welcome! Refreshments provided.",
      content: "As part of our community commitment, we're organizing a cleanliness drive in Vyas Municipality. Join us this Saturday to help keep our community clean and beautiful. All volunteers will receive refreshments and a small token of appreciation.",
      image: "/news/cleanliness-drive.jpg",
      date: "2025-02-15",
      category: "community",
      tags: ["community-service", "cleanliness", "volunteer"],
      author: "Community Team",
      featured: false,
      location: "Vyas Municipality Park",
      time: "7:00 AM - 10:00 AM"
    },
    {
      id: 6,
      title: "Extended Store Hours for Festive Season",
      excerpt: "To serve you better during the festive season, we're extending our store hours until midnight.",
      content: "During the upcoming festive season, we're extending our store hours to serve you better. Now open from 8:00 AM to 12:00 AM midnight. More time for your shopping convenience!",
      image: "/news/extended-hours.jpg",
      date: "2025-02-10",
      category: "announcements",
      tags: ["extended-hours", "festive-season", "convenience"],
      author: "Management",
      featured: false
    },
    {
      id: 7,
      title: "New Payment Method: Digital Wallets Accepted",
      excerpt: "We now accept eSewa, Khalti, and other digital wallets for faster and convenient payments.",
      content: "Making your shopping experience more convenient! We now accept all major digital wallets including eSewa, Khalti, and mobile banking. Fast, secure, and contactless payments available.",
      image: "/news/digital-payments.jpg",
      date: "2025-02-05",
      category: "announcements",
      tags: ["digital-payments", "esewa", "khalti"],
      author: "Finance Team",
      featured: false
    },
    {
      id: 8,
      title: "Customer Appreciation Week - Special Surprises!",
      excerpt: "Celebrating our valued customers with daily surprises, discounts, and loyalty rewards all week long.",
      content: "To show our appreciation for your continued support, we're celebrating Customer Appreciation Week with daily surprises, exclusive discounts, and special loyalty rewards for our regular customers.",
      image: "/news/customer-appreciation.jpg",
      date: "2025-02-01",
      category: "events",
      tags: ["customer-appreciation", "loyalty", "surprises"],
      author: "Customer Service Team",
      featured: false
    }
  ];

  const filteredUpdates = newsUpdates.filter(update => {
    const matchesCategory = activeCategory === "all" || update.category === activeCategory;
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredUpdates = newsUpdates.filter(update => update.featured);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const NewsCard: React.FC<NewsCardProps> = ({ update, featured = false }) => (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className="relative">
        <img
          src={update.image}
          alt={update.title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {update.category}
          </span>
        </div>
        {update.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <FiCalendar size={14} />
            <span>{formatDate(update.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiTag size={14} />
            <span className="capitalize">{update.author}</span>
          </div>
        </div>

        <h3 className={`font-bold text-gray-900 mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {update.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {update.excerpt}
        </p>

        {(update.location || update.time) && (
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            {update.location && (
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <FiMapPin size={14} />
                <span>{update.location}</span>
              </div>
            )}
            {update.time && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiClock size={14} />
                <span>{update.time}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {update.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
          Read More <FiArrowRight size={16} />
        </button> */}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-yellow-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Stay informed about the latest from Lasata Department Store
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Discover new products, special offers, community events, and everything happening at your favorite local store
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news and updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category: Category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Updates */}
      {featuredUpdates.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Updates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredUpdates.map((update: NewsUpdate) => (
                <NewsCard key={update.id} update={update} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Updates */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeCategory === 'all' ? 'All Updates' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-gray-500">
              {filteredUpdates.length} {filteredUpdates.length === 1 ? 'update' : 'updates'}
            </span>
          </div>

          {filteredUpdates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUpdates.map((update: NewsUpdate) => (
                <NewsCard key={update.id} update={update} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No updates found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get the latest news and offers directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}