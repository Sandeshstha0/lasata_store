"use client";
import { motion, Variants } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Animation variants with proper typing
const heroVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const backgroundVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut"
    }
  }
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <motion.div
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
      variants={heroVariants}
      initial="hidden"
      animate="show"
    >
      {/* Background Image with zoom effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/news/broucher.jpg')`,
        }}
        variants={backgroundVariants}
        initial="hidden"
        animate="show"
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        variants={overlayVariants}
        initial="hidden"
        animate="show"
      />

      {/* Content Section */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full text-center text-white"
        variants={contentVariants}
        initial="hidden"
        animate="show"
      >
     
      </motion.div>
    </motion.div>
  );
}