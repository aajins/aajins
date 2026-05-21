"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400 mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
