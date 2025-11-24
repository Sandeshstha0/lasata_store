"use client";
import { motion, Variants } from "framer-motion";

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
          "https://www.google.com/maps/place/Lasata+Department+Store/@27.9747759,84.2654921,740m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3995a90075c4c3c5:0x932b5de784d48966!8m2!3d27.9747759!4d84.2654921!16s%2Fg%2F11mlvlp6tj?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D",
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

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const centerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.section 
      className="py-12 bg-gray-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          variants={itemVariants}
        >
          Know more
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column - 2 rows */}
          <div className="space-y-6">
            {newsItems.left.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                custom={index}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-4">
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <motion.a
                    href={item.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.button}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Large featured item */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            variants={centerVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img
              src={newsItems.center.image}
              alt={newsItems.center.title}
              className="w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
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
              <motion.a
                href={newsItems.center.links}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - 2 rows */}
          <div className="space-y-6">
            {newsItems.right.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                custom={index + 2}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
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
                    <motion.a
                      href={item.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.button}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsFeed;