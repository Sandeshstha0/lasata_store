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
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24">
        {/* Left Section - Logo & Sub-brand */}
        <div className="flex flex-col items-center text-center flex-shrink-0 w-full lg:w-auto lg:items-start lg:text-left">
          <img
            src="/news/logo.png"
            alt="Logo"
            className="h-[6.2em] w-auto drop-shadow-2xl brightness-100 contrast-110 mx-auto lg:mx-0"
          />

          <p className="text-blue-900 font-bold text-4xl mt-2 leading-tight">
            SUB-BRAND
          </p>

          <p className="text-blue-900 font-semibold text-xl mt-1">
            Sajilo Snacks
          </p>
        </div>

        {/* Right Section - Products Grid */}
        <div className="flex flex-wrap justify-end gap-6 w-full lg:w-auto">
          {smallBusinessProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 transition-shadow"
            >
              {/* Brand Badge */}
              <div className="px-4 pt-4">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                  {product.brand}
                </span>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mt-2"
              />

              {/* Product Info */}
              <div className="p-4">
                <a
                  href={product.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors text-center block"
                >
                  Visit Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
