import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Paper Rings</h3>
            <p className="text-sm">
              Digitizing operations for SMEs in Canada and the US since 2016.
              <br />
              Helping businesses thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-300">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-blue-300"><Twitter size={24} /></a>
              <a href="#" className="text-white hover:text-blue-300"><Linkedin size={24} /></a>
            </div>
            <p className="text-sm mt-4">Email: info@paperringsinc.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm">
          &copy; {currentYear} Paper Rings All rights reserved.
        </div>
      </div>
    </footer>
  );
}

