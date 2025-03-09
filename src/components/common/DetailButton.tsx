'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface DetailButtonProps {
  href: string;
  text?: string;
}

export default function DetailButton({ href, text = '詳しく見る' }: DetailButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      className="mt-8 text-center"
    >
      <Link 
        href={href} 
        className="inline-block px-8 py-3 bg-accent hover:bg-accent/80 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/30 transform hover:-translate-y-1"
      >
        {text} <span className="ml-2">→</span>
      </Link>
    </motion.div>
  );
} 