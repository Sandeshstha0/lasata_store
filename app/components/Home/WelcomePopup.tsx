/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";


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
      {/* Backdrop with blur effect */}
      <div
        className={`fixed inset-0 backdrop-blur-sm  bg-opacity-20 z-[100] transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closePopup}
      />

      {/* Popup Content */}
      <div
        className={`fixed inset-0 z-[101] flex items-center justify-center p-4 transition-all duration-300 ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <img
            src="/popupimage.jpg"
            alt="Popup Image"
            className="w-full h-auto rounded"
          />
          {/* Close button */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer text-2xl font-bold"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}
