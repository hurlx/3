'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f4f5] text-gray-900 px-6 text-center">
      {/* Animated 404 number */}
      <motion.h1
        className="text-9xl font-bold mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        404
      </motion.h1>

      {/* Main text */}
      <motion.p
        className="text-2xl md:text-3xl font-light mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! Page not found
      </motion.p>

      {/* Subtext */}
      <motion.p
        className="text-gray-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button back home */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Link
          href="/"
          className="inline-block px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg font-medium transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
