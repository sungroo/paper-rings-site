'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
  expandedContent?: string | React.ReactNode;
}

export const ServiceCard = ({ title, description, icon: Icon, expandedContent }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="relative flex flex-col items-start rounded-lg bg-slate-800 p-6 shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10 w-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-cyan">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-base text-gray-300">{description}</p>
        
        {expandedContent && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 inline-flex items-center bg-gradient-rainbow bg-clip-text text-transparent hover:opacity-80 font-medium transition-all"
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
              {isExpanded ? (
                <ChevronUpIcon className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              )}
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="pt-4 border-t border-slate-700 text-sm text-gray-300 leading-relaxed">
                    {typeof expandedContent === 'string' ? (
                      <p>{expandedContent}</p>
                    ) : (
                      expandedContent
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
};

