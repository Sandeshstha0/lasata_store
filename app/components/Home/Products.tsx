/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Products() {
  const smallBusinessProducts = [
    {
      id: 1,
      name: "Naga Chilli Chips",
      brand: "Sajilo Snacks",
      description: "Powered by: LASTA Department Store Groceries, Snacks and Drinks ⏰ 8AM – Midnight 12:00AM 📍 Damauli, Tanahun ☎️Contact: 9843682127 📍 Fast delivery | eSewa/COD",
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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our Brands & Products
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Discover products from our family of small businesses
        </p>

        {/* Brands Navigation */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            All Brands
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            Sajilo Snacks
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            Local Clothing
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
            Handmade Crafts
          </button>
        </div> */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallBusinessProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border"
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
                className="w-full h-40 object-cover mt-2"
              />

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>

               

                {/* Buy Now Button */}
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
