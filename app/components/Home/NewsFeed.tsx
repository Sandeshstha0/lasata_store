/* eslint-disable @next/next/no-img-element */
// components/NewsFeed.tsx
import React from "react";

const NewsFeed = () => {
  // Sample news data
  const newsItems = {
    left: [
      {
        id: 1,
        title: "Frozen Items Available",
        excerpt: "Available Now at SajiloSnacks. Order Now!!",
        image: "/news/frozenanditems.jpg",
        links:
          "https://sajilosnacks.kyte.site/en/c/frozen-items/1762771994100-PPnNR",
        category: "Frozen items",
        button: "Buy Now",
      },
      {
        id: 2,
        title: "Store ",
        excerpt:
          " Step In, Shop Easy-Lasata Department Store.(Vyas Municipality, Tanahun, Nepal) ",
        image: "/news/location.jpg",
        links:
          "https://sajilosnacks.kyte.site/en/p/cocacola-2lts/1758540888104-PPnNR",
        category: "",
        button: "Visit Us",
      },
    ],
    center: {
      id: 3,
      title: "Latest News",
      excerpt: "Latest News — Stay Updated with Lasata",
      image: "/news/notice2.jpg",
      links: "https://www.facebook.com/share/p/1BaF5iKSG1/",
      category: "Updates",
      date: "2 hours ago",
    },
    right: [
      {
        id: 4,
        title: "SajiloSnacks",
        excerpt: "See Our Catalog and Find Your Favorites!",
        image: "/news/catalog.jpg",
        links:
          "https://www.facebook.com/photo/?fbid=122131091192940573&set=pb.61578217207169.-2207520000",
        category: "catalog",
        button: "View Catalog",
      },
      {
        id: 5,
        title: "Working at Lasata ",
        excerpt:
          "Working at Lasata means being part of a growing, customer-focused team that values innovation, integrity, and teamwork.",
        image: "/bannerlasata.jpg",
        links: "https://www.facebook.com/share/p/1BaF5iKSG1/",
        category: "",
        button: "",
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Know more
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column - 2 rows */}
          <div className="space-y-6">
            {newsItems.left.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <a
                    href={item.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    {item.button}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Large featured item */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={newsItems.center.image}
              alt={newsItems.center.title}
              className="w-full  object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-600">
                  {newsItems.center.category}
                </span>
                <span className="text-sm text-gray-500">
                  {newsItems.center.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {newsItems.center.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {newsItems.center.excerpt}
              </p>
              <a
                href={newsItems.center.links}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Read
              </a>
            </div>
          </div>

          {/* Right Column - 2 rows */}
          <div className="space-y-6">
            {newsItems.right.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  {item?.button && (
                    <a
                      href={item.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                      {item.button}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
