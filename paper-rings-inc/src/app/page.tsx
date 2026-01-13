'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Empowering SMEs with Digital Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            Paper Rings Inc. is your trusted IT consulting partner, digitizing operations for businesses in Canada and the US since 2016.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <span className="inline-flex items-center rounded-full bg-brand-blue/20 px-3 py-1 text-sm font-semibold text-brand-cyan ring-1 ring-inset ring-brand-blue/30">
              Digitizing since 2016
            </span>
            <div className="flex items-center text-white text-lg font-semibold">
              <CheckCircleIcon className="h-6 w-6 text-brand-green mr-2" />
              <span>57+ Successful Transformations</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">Our Core Pillars</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Managed IT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-lg bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-white">Managed IT Services</h3>
            <p className="mt-4 text-gray-300">Comprehensive IT support, infrastructure management, and cybersecurity solutions tailored for SMEs to ensure seamless operations.</p>
          </motion.div>

          {/* Agentic-AI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-lg bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 glowing-ai"
          >
            <h3 className="text-xl font-semibold text-white">Agentic-AI Solutions</h3>
            <p className="mt-4 text-gray-300">Leverage cutting-edge Agentic-AI to automate customer service, generate leads, streamline marketing, and enhance business reporting.</p>
          </motion.div>

          {/* Grants */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="rounded-lg bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-white">Canadian Grants</h3>
            <p className="mt-4 text-gray-300">Navigate the complexities of Canadian digital transformation grants like DMAP and RMPG with expert guidance to secure funding.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

