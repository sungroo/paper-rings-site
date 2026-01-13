'use client';

import { BarChartIcon, LightbulbIcon, TrendingUpIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const caseStudies = [
  {
    title: "E-commerce Platform Revitalization",
    description: "Transformed a local retail business into a thriving online entity, increasing sales by 150% within the first year.",
    icon: TrendingUpIcon,
  },
  {
    title: "Automated Customer Support System",
    description: "Implemented an Agentic-AI powered chatbot for a service-based SME, reducing response times by 70% and improving customer satisfaction.",
    icon: LightbulbIcon,
  },
  {
    title: "ERP System Integration for Manufacturing",
    description: "Streamlined operations for a manufacturing client by integrating a new ERP system, leading to a 25% increase in production efficiency.",
    icon: BarChartIcon,
  },
  {
    title: "Cloud Migration for a Financial Firm",
    description: "Successfully migrated a financial firm's legacy infrastructure to a secure cloud environment, enhancing data accessibility and reducing operational costs.",
    icon: LightbulbIcon,
  },
  {
    title: "Digital Marketing Strategy for a Startup",
    description: "Developed and executed a comprehensive digital marketing strategy for a new startup, achieving a 300% growth in online leads.",
    icon: TrendingUpIcon,
  },
  {
    title: "Data Analytics for a Healthcare Provider",
    description: "Implemented a robust data analytics solution for a healthcare provider, enabling better patient care and operational insights.",
    icon: BarChartIcon,
  },
];

export default function CaseStudiesPage() {
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
            Case Studies & Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            Showcasing the impact of our digital transformation expertise on 57+ SMEs.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((study, index) => (
            <div key={index} className="rounded-lg bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/20 text-brand-cyan">
                <study.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{study.title}</h3>
              <p className="mt-2 text-base text-gray-300">{study.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>This is just a glimpse of our work. For more detailed case studies, please <Link href="/contact" className="text-brand-cyan hover:text-brand-blue">contact us</Link>.</p>
        </motion.div>
      </div>
    </div>
  );
}

