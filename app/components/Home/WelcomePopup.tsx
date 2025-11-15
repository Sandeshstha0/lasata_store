/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { FiX, FiGift, FiShoppingBag, FiMapPin } from "react-icons/fi";

interface PopupData {
  id: number;
  title: string;
  message: string;
  image?: string;
  ctaText: string;
  ctaLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  type: "welcome" | "offer" | "announcement" | "newsletter";
  showCloseButton: boolean;
  autoClose?: number; // in seconds
}

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<PopupData | null>(null);

  const popupMessages: PopupData[] = [
    {
      id: 1,
      title: "🎉 Welcome to Lasata!",
      message:
        "Discover comfort, satisfaction, and happiness in every visit. Your local shopping destination in Tanahun.",
      image: "/popup/welcome.jpg",
      ctaText: "Explore Store",
      ctaLink: "/about",
      secondaryText: "View Offers",
      secondaryLink: "/offers",
      type: "welcome",
      showCloseButton: true,
      autoClose: 8,
    },
    {
      id: 2,
      title: "🚚 Free Home Delivery!",
      message:
        "Get free delivery on orders above Rs. 1000. Fast and reliable service throughout Tanahun.",
      image: "/popup/delivery.jpg",
      ctaText: "Learn More",
      ctaLink: "/services/delivery",
      secondaryText: "Shop Now",
      secondaryLink: "/products",
      type: "offer",
      showCloseButton: true,
      autoClose: 10,
    },
    {
      id: 3,
      title: "📱 Stay Connected",
      message:
        "Get latest updates, exclusive offers, and shopping tips delivered to your inbox.",
      ctaText: "Subscribe Now",
      ctaLink: "/newsletter",
      secondaryText: "Maybe Later",
      type: "newsletter",
      showCloseButton: true,
      autoClose: 12,
    },
  ];

  // Select a random popup
  const getRandomPopup = () => {
    const randomIndex = Math.floor(Math.random() * popupMessages.length);
    return popupMessages[randomIndex];
  };

  // Show popup after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const popup = getRandomPopup();
      setCurrentPopup(popup);
      setIsVisible(true);

      // Auto close if specified
      if (popup.autoClose) {
        setTimeout(() => {
          if (isVisible) {
            closePopup();
          }
        }, popup.autoClose * 1000);
      }
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Close popup function
  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentPopup(null);
    }, 300);
  };

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible]);

  if (!currentPopup) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black bg-opacity-0 z-[100] transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
   
        onClick={closePopup}
      />
      {/* Popup Container */}
      <div
        className={`fixed inset-0 z-[101] flex items-center justify-center p-4 transition-all duration-300 ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative border-2 border-yellow-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          {currentPopup.showCloseButton && (
            <button
              onClick={closePopup}
              className="absolute cursor-pointer top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-500 hover:text-gray-700 p-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FiX size={20} />
            </button>
          )}

          {/* Popup Content */}
          <div className="relative">
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FiGift size={20} />
                </div>
                <h2 className="text-2xl font-bold">{currentPopup.title}</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                {currentPopup.message}
              </p>
            </div>

            {/* Image Section (if available) */}
            {currentPopup.image && (
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-yellow-50">
                <img
                  src={currentPopup.image}
                  alt={currentPopup.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
              </div>
            )}

            {/* Store Info Section */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FiMapPin className="text-blue-600" />
                Visit Our Store
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>📍 Location:</span>
                  <span className="font-medium">
                    Vyas Municipality, Tanahun
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>🕒 Hours:</span>
                  <span className="font-medium">8AM - 12AM</span>
                </div>
                <div className="flex justify-between">
                  <span>📞 Contact:</span>
                  <span className="font-medium">9843682127</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Primary CTA */}
                <a
                  href={currentPopup.ctaLink}
                  onClick={closePopup}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FiShoppingBag size={20} />
                  {currentPopup.ctaText}
                </a>

                {/* Secondary CTA */}
                {currentPopup.secondaryText && (
                  <a
                    href={currentPopup.secondaryLink || "#"}
                    onClick={closePopup}
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {currentPopup.secondaryText}
                  </a>
                )}

                {/* Quick Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a
                    href="/products"
                    onClick={closePopup}
                    className="flex-1 text-center bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    Browse Products
                  </a>
                  <a
                    href="/contact"
                    onClick={closePopup}
                    className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 rounded-b-2xl border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Lasata Department Store</span>
                <span>Your Local Shopping Destination</span>
              </div>
            </div>
          </div>

          {/* Auto-close progress bar */}
          {/* {currentPopup.autoClose && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-2xl">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-b-2xl transition-all duration-100 ease-linear"
                style={{
                  animation: `shrink ${currentPopup.autoClose}s linear forwards`,
                }}
              />
              <style jsx>{`
                @keyframes shrink {
                  from {
                    width: 100%;
                  }
                  to {
                    width: 0%;
                  }
                }
              `}</style>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
