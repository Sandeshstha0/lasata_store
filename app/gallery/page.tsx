/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useCallback } from "react";
import { FiSearch, FiX, FiZoomIn, FiChevronLeft, FiChevronRight, FiGrid, FiList } from "react-icons/fi";

// Type definitions
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
  date?: string;
  featured?: boolean;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/gallery/store-front.jpg",
      alt: "Lasata Department Store Front",
      category: "store",
      title: "Store Entrance",
      description: "Our beautiful store front in Vyas Municipality",
      date: "2025-03-01",
      featured: true
    },
    {
      id: 2,
      src: "/gallery/interior-1.jpg",
      alt: "Store Interior",
      category: "store",
      title: "Spacious Interior",
      description: "Well-organized shelves and wide aisles for comfortable shopping",
      date: "2025-03-01",
      featured: true
    },
    {
      id: 3,
      src: "/gallery/grand-opening.jpg",
      alt: "Grand Opening Celebration",
      category: "events",
      title: "Grand Opening Day",
      description: "Celebrating our grand opening with the community",
      date: "2025-03-15",
      featured: true
    },
    {
      id: 4,
      src: "/gallery/products-1.jpg",
      alt: "Fresh Vegetables Section",
      category: "products",
      title: "Fresh Produce",
      description: "Locally sourced fresh vegetables and fruits",
      date: "2025-02-20"
    },
    {
      id: 5,
      src: "/gallery/products-2.jpg",
      alt: "Snacks and Groceries",
      category: "products",
      title: "Snacks Section",
      description: "Wide variety of snacks and grocery items",
      date: "2025-02-20"
    },
    {
      id: 6,
      src: "/gallery/team-1.jpg",
      alt: "Lasata Team",
      category: "team",
      title: "Our Friendly Staff",
      description: "The dedicated team behind Lasata Department Store",
      date: "2025-03-01",
      featured: true
    },
    {
      id: 7,
      src: "/gallery/community-1.jpg",
      alt: "Community Event",
      category: "community",
      title: "Community Gathering",
      description: "Engaging with our local community",
      date: "2025-02-10"
    },
    {
      id: 8,
      src: "/gallery/products-3.jpg",
      alt: "Household Items",
      category: "products",
      title: "Household Essentials",
      description: "Complete range of daily household necessities",
      date: "2025-02-25"
    },
    {
      id: 9,
      src: "/gallery/events-1.jpg",
      alt: "Cultural Program",
      category: "events",
      title: "Cultural Performance",
      description: "Traditional cultural program during store opening",
      date: "2025-03-15"
    },
    {
      id: 10,
      src: "/gallery/store-2.jpg",
      alt: "Payment Counter",
      category: "store",
      title: "Modern Checkout",
      description: "Fast and efficient payment counters",
      date: "2025-03-01"
    },
    {
      id: 11,
      src: "/gallery/community-2.jpg",
      alt: "Cleanliness Drive",
      category: "community",
      title: "Community Service",
      description: "Participating in local cleanliness drive",
      date: "2025-02-15"
    },
    {
      id: 12,
      src: "/gallery/team-2.jpg",
      alt: "Customer Service",
      category: "team",
      title: "Helping Customers",
      description: "Our team providing excellent customer service",
      date: "2025-03-05"
    }
  ];

  const categories: Category[] = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "store", name: "Store", count: galleryImages.filter(img => img.category === "store").length },
    { id: "products", name: "Products", count: galleryImages.filter(img => img.category === "products").length },
    { id: "events", name: "Events", count: galleryImages.filter(img => img.category === "events").length },
    { id: "community", name: "Community", count: galleryImages.filter(img => img.category === "community").length },
    { id: "team", name: "Our Team", count: galleryImages.filter(img => img.category === "team").length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.alt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredImages = galleryImages.filter(image => image.featured);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = useCallback((direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  // Close lightbox on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [navigateImage]);

  const GalleryImageCard: React.FC<{ image: GalleryImage }> = ({ image }) => (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${
        viewMode === "list" ? "flex" : "block"
      }`}
      onClick={() => openLightbox(image)}
    >
      <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : "w-full"}`}>
        <img
          src={image.src}
          alt={image.alt}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            viewMode === "list" ? "h-32" : "h-48"
          }`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <FiZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
        </div>
        {image.featured && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium capitalize">
            {image.category}
          </span>
          {image.date && (
            <span className="text-gray-500 text-xs">
              {new Date(image.date).toLocaleDateString()}
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {image.title}
        </h3>
        
        {image.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {image.description}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-4">
              Discover Lasata Through Our Lens
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Explore our store, products, events, and community activities through captivating visuals
            </p>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      {featuredImages.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredImages.map((image) => (
                <GalleryImageCard key={image.id} image={image} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Controls Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* View Toggle - Desktop */}
            <div className="hidden lg:flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "grid" ? "bg-white shadow-sm text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === "list" ? "bg-white shadow-sm text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiList size={20} />
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Category Filters */}
          <div className={`mt-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Photos' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-500 text-sm">
              {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
            </span>
          </div>

          {filteredImages.length > 0 ? (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
            }>
              {filteredImages.map((image) => (
                <GalleryImageCard key={image.id} image={image} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <FiX size={24} />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image */}
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Caption */}
              <div className="bg-white p-6 rounded-b-lg w-full max-w-4xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {selectedImage.category}
                  </span>
                </div>
                {selectedImage.description && (
                  <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                )}
                {selectedImage.date && (
                  <p className="text-gray-500 text-sm">
                    {new Date(selectedImage.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                )}
                <div className="text-gray-500 text-sm mt-2">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the Lasata difference in person. Come see why we're Tanahun's favorite shopping destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Directions
            </a>
            <a
              href="/about"
              className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}