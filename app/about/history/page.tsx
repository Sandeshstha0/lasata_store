
"use client";

import { ImageSlider } from "@/app/components/about/ImageSlider";
import React from "react";
import { FiHeart, FiUsers, FiHome, FiStar, FiClock } from "react-icons/fi";

export default function HistoryPage() {
  const timeline = [
    {
      year: "1998",
      title: "The Humble Beginning",
      description:
        "A small grocery shop opened in Vyas Municipality, Tanahun by a hardworking father who believed in honesty, care, and service over profit.",
      icon: FiHome,
      images: ["/history/shop-old-2.jpg", "/history/shop-old-1.jpg"],
      color: "from-blue-100 to-blue-50",
    },
    {
      year: "2000–2010",
      title: "Growing with the Community",
      description:
        "The small grocery became an integral part of the community's daily life. The son grew up watching his father's dedication and the respect earned through honest work.",
      icon: FiUsers,
      images: ["/history/community-1.jpg", "/history/community-2.jpg"],
      color: "from-green-100 to-green-50",
    },
    {
      year: "2025",
      title: "The Dream Realized",
      description:
        "Lasata Department Store was officially established, combining modern retail standards with the same warmth and trust that defined the original family shop.",
      icon: FiStar,
      images: ["/history/growth-1.jpg", "/history/growth-2.jpg"],
      color: "from-purple-100 to-purple-50",
    },
    {
      year: "Present",
      title: "Continuing the Legacy",
      description:
        "Lasata stands as a symbol of trust, comfort, and community - serving generations with the same family values while embracing modern convenience.",
      icon: FiHeart,
      images: [
        "/history/family-legacy-1.jpg",
        
      ],
      color: "from-orange-100 to-orange-50",
    },
  ];

  const values = [
    {
      icon: FiHeart,
      title: "Family Values",
      description:
        "Treating every customer like family, just as we have for over 25 years",
    },
    {
      icon: FiStar,
      title: "Honesty & Trust",
      description:
        "Building relationships through transparent and fair practices",
    },
    {
      icon: FiUsers,
      title: "Community First",
      description:
        "Being an integral part of the local community's growth and daily life",
    },
    {
      icon: FiClock,
      title: "Generational Wisdom",
      description: "Combining traditional values with modern retail excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <FiClock className="animate-pulse" />
              <span>Established 2000 • Official 2025</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Our History
            </h1>

            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              From a small grocery shop to your trusted department store -
              <span className="block mt-2">
                A 25-year journey of love, trust, and community service
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm lg:text-base">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                📍 Vyas Municipality, Tanahun
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                🕰️ 25+ Years of Service
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                👨‍👩‍👧‍👦 Family Owned & Operated
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                🌿 The Story of Lasata Department Store
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200">
                <p className="mb-6">
                  The story of Lasata Department Store began{" "}
                  <span className="font-semibold text-blue-900">
                    more than 25 years ago
                  </span>{" "}
                  with a small grocery shop in Vyas Municipality, Tanahun. It
                  was started by a hardworking father who believed that{" "}
                  <span className="italic">
                    honesty, care, and service were more important than profit.
                  </span>
                </p>

                <p className="mb-6">
                  Every customer who walked into that little shop was treated
                  like family. The father&#39;s gentle smile and genuine concern
                  created more than just a business - it built relationships
                  that would last for generations.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-yellow-800 italic">
                    &#34;Years went by, and the small grocery became a part of
                    the community&#39;s daily life. The son grew up watching his
                    father&#39;s dedication and the respect he earned through
                    simple, honest work.&#34;
                  </p>
                </div>

                <p className="mb-6">
                  Inspired by that love and trust, the son dreamed of taking his
                  father&#39;s hard work to the next level — to build something
                  modern but still filled with the same warmth that made the
                  original shop so special.
                </p>

                <p className="mb-6 font-semibold text-blue-900 text-center text-xl">
                  That dream became real with the birth of Lasata (LDS)
                </p>

                <p className="text-center">
                  Officially established on{" "}
                  <span className="font-bold">2025 AD (Nepal Sambat 1146)</span>
                  . The word{" "}
                  <span className="font-semibold text-purple-600">
                    &#34;Lasata&#34; (लसता)
                  </span>{" "}
                  means{" "}
                  <span className="italic">
                    comfort, satisfaction, and happiness
                  </span>{" "}
                  — a perfect name for a store created from love and dedication.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl text-center">
                <p className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  From one man&#39;s small grocery to a growing department store
                </p>
                <p className="text-lg text-gray-700">
                  Lasata is more than just a business — it&#39;s a family story,
                  a journey of generations, and a promise to keep serving the
                  community with the same heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A visual timeline of our growth from humble beginnings to trusted
              community partner
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full hidden lg:block"></div>

              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative mb-12 lg:mb-16 ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="lg:flex lg:items-center lg:gap-8">
                      {/* Content */}
                      <div
                        className={`lg:w-1/2 ${
                          isEven ? "lg:pr-12" : "lg:order-2 lg:pl-12"
                        }`}
                      >
                        <div
                          className={`bg-gradient-to-br ${item.color} p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200`}
                        >
                          <div className="flex items-center gap-3 mb-4 lg:justify-start">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                              <Icon className="text-blue-600" size={20} />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>

                          <p className="text-gray-700 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline dot - visible only on desktop */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                      {/* Image placeholder - would be replaced with actual images */}
                      <div
                        className={`lg:w-1/2 mt-4 lg:mt-0 ${
                          isEven ? "lg:pl-12" : "lg:order-1 lg:pr-12"
                        }`}
                      >
                        <div className=" rounded-2xl h-48 lg:h-64 flex items-center justify-center text-gray-500">
                          <div className="text-center">
                            <ImageSlider
                              images={item.images}
                              year={item.year}
                              title={item.title}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Values That Guide Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles passed down through generations that continue to define
              who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 lg:p-12 rounded-3xl border border-gray-200">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Service
              </h2>

              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                From that small grocery shop to Lasata Department Store, our
                commitment remains unchanged: to serve our community with the
                same heart, honesty, and care that started it all over 25 years
                ago.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Learn More About Us
                </a>
                <a
                  href="/contact"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Visit Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
