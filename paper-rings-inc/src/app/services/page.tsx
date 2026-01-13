'use client';

import { CheckCircleIcon, CloudIcon, ShieldCheckIcon, HardDriveIcon } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { motion } from 'framer-motion';

const services = [
  {
    title: "IT Infrastructure Management",
    description: "Proactive monitoring and maintenance of your servers, networks, and cloud infrastructure to ensure peak performance and reliability.",
    icon: HardDriveIcon,
    expandedContent: "Our IT Infrastructure Management services include comprehensive monitoring of your entire technology stack, ensuring 99.9% uptime. We handle server maintenance, network optimization, patch management, and performance tuning. Our team provides detailed reporting and proactive recommendations to keep your infrastructure running at peak efficiency. With 24/7 monitoring and rapid response times, we ensure your business operations remain uninterrupted."
  },
  {
    title: "Cybersecurity Solutions",
    description: "Robust security measures including threat detection, data protection, and compliance management to safeguard your business from cyber threats.",
    icon: ShieldCheckIcon,
    expandedContent: "Protect your business with enterprise-grade cybersecurity solutions. We implement multi-layered security strategies including firewall management, intrusion detection systems, endpoint protection, and security awareness training. Our compliance experts help you meet industry standards like SOC 2, ISO 27001, and GDPR. We conduct regular security audits, vulnerability assessments, and penetration testing to identify and mitigate risks before they become threats."
  },
  {
    title: "Cloud Services & Migration",
    description: "Seamless migration to cloud platforms and ongoing management of cloud resources for scalability, flexibility, and cost efficiency.",
    icon: CloudIcon,
    expandedContent: "Transform your business with our cloud migration and management services. We help you move to leading cloud platforms like AWS, Azure, or Google Cloud with minimal disruption. Our cloud experts design scalable architectures, implement cost optimization strategies, and provide ongoing management. We handle everything from initial assessment and migration planning to deployment and continuous optimization, ensuring you get maximum value from your cloud investment."
  },
  {
    title: "24/7 Help Desk Support",
    description: "Always-on technical support to resolve IT issues swiftly, minimizing downtime and keeping your team productive.",
    icon: CheckCircleIcon,
    expandedContent: "Get instant access to expert IT support whenever you need it. Our 24/7 help desk provides remote assistance for all your technology needs, from password resets to complex troubleshooting. We maintain an average response time of under 5 minutes and resolution time of under 30 minutes for most issues. Our support team is available via phone, email, chat, and remote desktop, ensuring your team gets the help they need, when they need it."
  },
];

export default function ManagedITSvcPage() {
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
            Managed IT Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            Streamline your operations and fortify your digital infrastructure with our comprehensive Managed IT Services. We ensure your technology works for you, not against you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              expandedContent={service.expandedContent}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

