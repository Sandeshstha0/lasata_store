/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url('/news/broucher.jpg')`,
        }}
      />

       <div className="absolute inset-0 bg-black/30" />

      {/* Centered Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Welcome to{" "}
          <img
            src="/logo.png"
            alt="Logo"
            className="inline-block h-[4.2em] w-auto align-middle ml-2 
               drop-shadow-2xl brightness-180 contrast-110"
          />
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Explore the world most beautiful destinations and create memories that
          last a lifetime
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      
    </div>
  );
}
