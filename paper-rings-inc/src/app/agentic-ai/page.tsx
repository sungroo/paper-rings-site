'use client';

import { BrainIcon, LayoutDashboardIcon, LineChartIcon, MailOpenIcon, UsersIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';

const aiSolutions = [
  {
    title: "Customer Service Automation",
    description: "Implement Agentic-AI powered chatbots and virtual assistants to handle inquiries, provide support, and resolve issues 24/7.",
    icon: UsersIcon,
    expandedContent: "Deploy intelligent Agentic-AI chatbots that understand context, learn from interactions, and handle complex customer inquiries. Our solutions integrate with your existing systems, provide multi-channel support (website, social media, email), and escalate to human agents when needed. Features include natural language processing, sentiment analysis, multilingual support, and seamless CRM integration. Reduce response times by up to 70% and improve customer satisfaction scores significantly."
  },
  {
    title: "Lead Generation & Nurturing",
    description: "Automate lead identification, qualification, and nurturing processes using Agentic-AI to boost your sales pipeline.",
    icon: MailOpenIcon,
    expandedContent: "Transform your lead generation with Agentic-AI that identifies high-quality prospects, scores leads based on behavioral data, and automates personalized nurturing campaigns. Our system analyzes website behavior, social media activity, and engagement patterns to prioritize leads. Automated email sequences, personalized content delivery, and intelligent follow-up scheduling ensure no lead falls through the cracks. Increase conversion rates by 3x and reduce manual lead qualification time by 80%."
  },
  {
    title: "Marketing Automation",
    description: "Leverage Agentic-AI for personalized marketing campaigns, content creation, and audience targeting to maximize ROI.",
    icon: LineChartIcon,
    expandedContent: "Elevate your marketing with Agentic-AI that creates personalized campaigns, generates engaging content, and optimizes ad targeting in real-time. Our platform analyzes customer segments, predicts optimal send times, and A/B tests messaging automatically. Features include dynamic content generation, automated campaign optimization, cross-channel orchestration, and advanced attribution modeling. Achieve higher engagement rates, lower cost per acquisition, and maximize marketing ROI across all channels."
  },
  {
    title: "ERP Configuration & Optimization",
    description: "Intelligent Agentic-AI driven configuration and optimization of ERP systems for enhanced efficiency and data accuracy.",
    icon: LayoutDashboardIcon,
    expandedContent: "Optimize your ERP systems with Agentic-AI that learns your business processes and suggests improvements. Our intelligent configuration engine analyzes data flows, identifies bottlenecks, and recommends customizations. Features include automated workflow optimization, intelligent data validation, predictive maintenance scheduling, and smart reporting dashboards. Reduce ERP implementation time by 40%, improve data accuracy by 95%, and streamline business processes for maximum efficiency."
  },
  {
    title: "Business Reporting & Analytics",
    description: "Automate complex data analysis and generate insightful business reports with Agentic-AI for informed decision-making.",
    icon: BrainIcon,
    expandedContent: "Unlock actionable insights with Agentic-AI that analyzes your business data and generates comprehensive reports automatically. Our system connects to all your data sources, identifies key trends and anomalies, and creates executive dashboards. Features include predictive analytics, anomaly detection, automated report generation, natural language querying, and intelligent recommendations. Make data-driven decisions faster with real-time insights, forecast trends accurately, and identify opportunities for growth before your competitors."
  },
];

export default function AgenticAISolutionsPage() {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-20 glowing-ai">
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Agentic-AI Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            Unlock unparalleled efficiency and innovation with our Agentic-AI Solutions. We empower your business to automate, optimize, and grow through intelligent automation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {aiSolutions.map((solution, index) => (
            <ServiceCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              expandedContent={solution.expandedContent}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

