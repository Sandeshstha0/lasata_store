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
      },
      {
        id: 2,
        title: "Cocacola, Sprite, Fanta ",
        excerpt:
          "Available Now on SajiloSnacks Order Now!!! Sajilosnacks.kyte.site",
        image: "/news/colddrink.jpg",
        links:
          "https://sajilosnacks.kyte.site/en/p/cocacola-2lts/1758540888104-PPnNR",
        category: "Drinks",
      },
    ],
    center: {
      id: 3,
      title: "Latest News",
      excerpt: "Get the latest news on SajiloSnacks Products.",
      image: "/news/notice.jpg",
      links:
          "https://www.facebook.com/share/p/1BaF5iKSG1/",
      category: "Drinks",
      date: "2 hours ago",
    },
    right: [
      {
        id: 4,
        title: "SajiloSnacks",
        excerpt: "Recent updates .",
        image: "/news/catalog.jpg",
         links:
          "https://sajilosnacks.kyte.site/en",
        category: "catalog",
      },
      {
        id: 5,
        title: "Working at Lasata ",
        excerpt: "Join our team and make a difference!",
        image: "/1.jpg",
         links:
          "https://www.facebook.com/share/p/1BaF5iKSG1/",
        category: "Updates",
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
                    Buy Now
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
                  <a
                    href={item.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Location Section */}
<section className="my-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Google Maps */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300.3165472172988!2d84.26535512564521!3d27.97476932536239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a9688282bfb3%3A0x7a50fcd5253e556c!2sVision!5e1!3m2!1sen!2snp!4v1762940846650!5m2!1sen!2snp" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>

      {/* Frozen Items Promotion */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src="/news/frozenanditems.jpg" 
          alt="Frozen Items Available"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">Frozen Items</span>
          <h3 className="text-xl font-semibold mt-3 mb-3">Frozen Items Available</h3>
          <p className="text-gray-600 mb-4">Available Now at SajiloSnacks. Order Now!!</p>
          <a 
            href="https://sajilosnacks.kyte.site/en/c/frozen-items/1762771994100-PPnNR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Shop Frozen Items
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </section>
  );
};

export default NewsFeed;
