'use client';

import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

interface GrantCardProps {
  title: string;
  description: string;
  link: string;
}

export const GrantCard = ({ title, description, link }: GrantCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(100, 255, 200, 0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="group relative flex flex-col items-start rounded-lg bg-slate-800 p-6 shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-base text-gray-300">{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-brand-green hover:text-brand-cyan font-medium transition-colors">
          View Details <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

