/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSliderProps {
  images: string[];
  year: string;
  title: string;
  autoSlideInterval?: number; // Optional prop to customize slide interval
}

export const ImageSlider = ({ 
  images, 
  year, 
  title, 
  autoSlideInterval = 4000 // Default to 5 seconds
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide effect
  useEffect(() => {
    // Only auto-slide if there are multiple images
    if (images.length <= 1) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [images.length, autoSlideInterval]); // Add dependencies

  // Reset auto-slide timer when user interacts with the slider
  useEffect(() => {
    if (images.length <= 1) return;

    const resetAutoSlide = () => {
      // This effect doesn't need to do anything, 
      // it just restarts the auto-slide when dependencies change
    };
    resetAutoSlide();
  }, [currentIndex, images.length]); // Reset when currentIndex changes

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="rounded-2xl h-48 lg:h-64 overflow-hidden relative">
        {images[currentIndex] ? (
          <img
            src={images[currentIndex]}
            alt={`${title} - ${year}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-sm">Historical Photo</p>
              <p className="text-xs">{year}</p>
            </div>
          </div>
        )}
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <FiChevronRight size={16} />
            </button>
          </>
        )}

        {/* Slide Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};