'use client';

import { UsersIcon, MapPinIcon, RocketIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            About Paper Rings Inc.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            Our Journey in Empowering SMEs Since 2016
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <RocketIcon className="h-16 w-16 text-brand-blue" />
            <h3 className="mt-6 text-2xl font-semibold text-white">Our Mission</h3>
            <p className="mt-2 text-gray-300">To empower Small and Medium-sized Enterprises (SMEs) across North America with cutting-edge IT consulting and digital transformation strategies, enabling them to thrive in the digital era.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <MapPinIcon className="h-16 w-16 text-brand-green" />
            <h3 className="mt-6 text-2xl font-semibold text-white">North American Footprint</h3>
            <p className="mt-2 text-gray-300">Proudly serving businesses across Canada and the United States, our expertise bridges geographical gaps to deliver impactful digital solutions.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <UsersIcon className="h-16 w-16 text-brand-orange" />
            <h3 className="mt-6 text-2xl font-semibold text-white">Our Values</h3>
            <p className="mt-2 text-gray-300">Innovation, integrity, client-centricity, and continuous learning are at the core of everything we do, driving us to deliver excellence.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 text-center text-gray-300"
        >
          <p className="text-lg leading-relaxed">
            Since our founding in 2016, Paper Rings Inc. has been dedicated to guiding SMEs through their digital transformation journeys. With a deep understanding of the unique challenges and opportunities faced by small and medium-sized businesses, we have successfully completed 57+ digital transformations, helping our clients achieve operational efficiency, enhanced customer engagement, and sustainable growth.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Our team of expert IT consultants and UI/UX designers are committed to providing personalized solutions that not only meet your current needs but also position you for future success. We believe in building lasting partnerships, offering continuous support and strategic advice to ensure your business remains at the forefront of technological advancements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

