import { ReactNode } from 'react';

interface GrantCardProps {
  title: string;
  description: string;
  link: string;
  icon?: ReactNode; // Optional icon
}

export default function GrantCard({ title, description, link, icon }: GrantCardProps) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      {icon && <div className="text-blue-400 mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm mb-4">{description}</p>
      <a href={link} className="text-blue-400 hover:underline">
        Learn More
      </a>
    </div>
  );
}

