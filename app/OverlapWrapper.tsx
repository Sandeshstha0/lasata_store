"use client";
import { motion } from "framer-motion";

export default function OverlapWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="sticky top-0 z-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}