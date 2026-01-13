'use client';

import { LandmarkIcon, DollarSignIcon, FileTextIcon } from 'lucide-react';
import { GrantCard } from '../components/GrantCard';
import { motion } from 'framer-motion';
import Link from 'next/link';

const grants = [
  {
    title: "Digital Main Street Adoption Program (DMAP)",
    description: "Expert assistance for small businesses to adopt digital technologies and enhance online presence through the DMAP grant.",
    link: "https://digitalmainstreet.ca/"
  },
  {
    title: "Canada Digital Adoption Program (CDAP) - Grow Your Business Online",
    description: "Guidance for businesses seeking to boost their e-commerce presence and leverage digital tools with funding from CDAP.",
    link: "https://www.ic.gc.ca/eic/site/152.nsf/eng/home"
  },
  {
    title: "CanExport SMEs Program",
    description: "Support for small and medium-sized enterprises looking to explore new export opportunities and markets.",
    link: "https://www.international.gc.ca/trade-commerce/Funding-financement/canexport/sme-pme.aspx?lang=eng"
  },
  {
    title: "Strategic Innovation Fund (SIF)",
    description: "Assistance for large-scale, transformative projects that drive innovation and economic growth in Canada.",
    link: "https://ised-isde.canada.ca/site/strategic-innovation-fund/en"
  },
];

export default function GrantsPage() {
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
            The Grant Desk: Canadian Digital Transformation Subsidies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            Navigating government grants can be complex. Our Grant Desk provides expert guidance to help Canadian SMEs secure funding for their digital transformation initiatives.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {grants.map((grant, index) => (
            <GrantCard
              key={index}
              title={grant.title}
              description={grant.description}
              link={grant.link}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center text-gray-400"
        >
          <p>Don't see the grant you're looking for? <Link href="/contact" className="text-brand-cyan hover:text-brand-blue">Contact us</Link> for a personalized consultation.</p>
        </motion.div>
      </div>
    </div>
  );
}

