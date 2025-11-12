/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Products() {
  const smallBusinessProducts = [
    {
      id: 1,
      name: "Naga Chilli Chips",
      brand: "Sajilo Snacks",
      description:
        "Powered by: LASTA Department Store Groceries, Snacks and Drinks ⏰ 8AM – Midnight 12:00AM 📍 Damauli, Tanahun ☎️Contact: 9843682127 📍 Fast delivery | eSewa/COD",
      price: 50,
      originalPrice: 60,
      weight: "50g",
      image: "/2.jpg",
      storeLink: "https://sajilosnacks.kyte.site",
      category: "snacks",
    },
  ];

  return (
    <section className="my-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16">
          {/* Left Section - Logo & Sub-brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/3">
            <img
              src="/news/logo.png"
              alt="Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-2xl brightness-100 contrast-110"
            />

            <p className="text-blue-900 font-bold text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-4 leading-tight">
              SUB-BRAND
            </p>

            <p className="text-blue-900 font-semibold text-lg sm:text-xl lg:text-2xl mt-1 lg:mt-2">
              Sajilo Snacks
            </p>

            {/* Product Description - Visible on mobile */}
            <div className="mt-4 lg:hidden text-sm text-gray-600 text-center max-w-md">
              <p>Powered by: LASTA Department Store</p>
              <p>Groceries, Snacks and Drinks</p>
              <p>⏰ 8AM – Midnight 12:00AM</p>
              <p>📍 Damauli, Tanahun</p>
              <p>☎️ Contact: 9843682127</p>
              <p>📦 Fast delivery | eSewa/COD</p>
            </div>
          </div>

          {/* Right Section - Products Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {smallBusinessProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col"
                >
                  {/* Brand Badge */}
                  <div className="px-3 sm:px-4 pt-3 sm:pt-4">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="flex-1 p-3 sm:p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-3 sm:p-4">
                    {/* Visit Store Button */}
                    <a
                      href={product.storeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 sm:py-2 sm:px-4 rounded transition-colors text-center block text-sm sm:text-base"
                    >
                      Visit Store
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
