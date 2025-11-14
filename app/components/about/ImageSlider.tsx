/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSliderProps {
  images: string[] | string;
  year: string;
  title: string;
  autoSlideInterval?: number;
  width?: string;
  height?: string;
}

export const ImageSlider = ({ 
  images, 
  year, 
  title, 
  autoSlideInterval = 4000,
  width = "w-full",
  height = "h-64"
}: ImageSliderProps) => {
  // Normalize images to always be an array
  const imagesArray = Array.isArray(images) ? images : [images];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoading(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
    setImageLoading(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setImageLoading(true);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  // Auto slide effect
  useEffect(() => {
    if (imagesArray.length <= 1) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [imagesArray.length, autoSlideInterval, currentIndex]);

  return (
    <div className={`relative group ${width} ${height}`}>
      {/* Fixed Size Container */}
      <div className="rounded-2xl overflow-hidden relative bg-gray-100 w-full h-full">
        {imagesArray[currentIndex] ? (
          <div className="w-full h-full relative">
            {/* Loading skeleton */}
            {imageLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-0">
                <div className="text-gray-400">Loading...</div>
              </div>
            )}
            
            <img
              src={imagesArray[currentIndex]}
              alt={`${title} - ${year}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-sm">Historical Photo</p>
              <p className="text-xs">{year}</p>
            </div>
          </div>
        )}
        
        {/* Navigation Arrows */}
        {imagesArray.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
            >
              <FiChevronRight size={16} />
            </button>
          </>
        )}

        {/* Slide Indicator */}
        {imagesArray.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
            {imagesArray.map((_: string, index: number) => (
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
        {imagesArray.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
            {currentIndex + 1} / {imagesArray.length}
          </div>
        )}
      </div>
    </div>
  );
};