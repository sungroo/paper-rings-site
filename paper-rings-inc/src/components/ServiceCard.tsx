import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}

