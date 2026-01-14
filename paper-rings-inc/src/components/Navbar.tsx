import Link from 'next/link';
import { Home, Lightbulb, Briefcase, DollarSign, Users, BookOpen, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-white/10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Paper Rings
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/" icon={<Home size={20} />} label="Home" />
          <NavLink href="/managed-it" icon={<Lightbulb size={20} />} label="Managed IT" />
          <NavLink href="/agentic-ai" icon={<Briefcase size={20} />} label="Agentic-AI" />
          <NavLink href="/grants" icon={<DollarSign size={20} />} label="Grants" />
          <NavLink href="/about" icon={<Users size={20} />} label="About Us" />
          <NavLink href="/case-studies" icon={<BookOpen size={20} />} label="Case Studies" />
          <NavLink href="/contact" icon={<Mail size={20} />} label="Contact Us" />
        </div>
        {/* Mobile menu button will go here */}
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors">
      {icon}
      <span>{label}</span>
    </Link>
  );
}

