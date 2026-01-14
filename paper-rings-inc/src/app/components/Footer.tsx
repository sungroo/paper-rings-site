import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Footer Content - Horizontal Flow */}
        <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
          {/* Company Info */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-white text-lg font-semibold mb-3">Paper Rings</h3>
            <p className="text-sm leading-relaxed mb-4">
              Digitizing operations for SMEs in Canada and the US since 2016. We've successfully completed 57+ digital transformations, helping businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex-shrink-0">
            <h3 className="text-white text-sm font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/agentic-ai" className="hover:text-white transition-colors">
                  Agentic-AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/grants" className="hover:text-white transition-colors">
                  Canadian Grants
                </Link>
              </li>
              <li>
                <Link href="/casestudies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex-shrink-0">
            <h3 className="text-white text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/casestudies" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-shrink-0">
            <h3 className="text-white text-sm font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-brand-cyan" />
                <a href="mailto:info@paperringsinc.com" className="hover:text-white transition-colors">
                  info@paperringsinc.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-brand-cyan" />
                <a href="tel:+18001234567" className="hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-brand-cyan" />
                <span>North America<br />Canada & United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Horizontal */}
        <div className="border-t border-slate-800 pt-6 flex flex-wrap justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Paper Rings All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

