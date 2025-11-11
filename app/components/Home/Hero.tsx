"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-sky-50">
      {/* Left Side Text */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
          Empower Your Business with Modern Solutions
        </h1>
        <p className="mt-4 text-gray-600">
          We provide innovative digital solutions to help your business grow faster
          and smarter in the online world.
        </p>
        <button className="mt-6 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg shadow-lg transition">
          Get Started
        </button>
      </div>

      {/* Right Side Image Slider */}
      <div className="md:w-1/2 w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/1.jpg"
              alt="Business team"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/slide2.jpg"
              alt="Office meeting"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/slide3.jpg"
              alt="Project planning"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
