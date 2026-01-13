'use client';

import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-gray-300"
          >
            We'd love to hear from you. Fill out the form below or reach out directly.
          </motion.p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 rounded-lg bg-slate-800 p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="flex items-center">
                <MailIcon className="h-6 w-6 text-brand-cyan mr-3" />
                info@paperringsinc.com
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-brand-cyan mr-3" />
                +1 (800) 123-4567
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-brand-cyan mr-3" />
                North America
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-2/3 rounded-lg bg-slate-800 p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white">Send us a Message</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/contact"
              className="mt-6 space-y-6"
            >
              {/* Hidden form name field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Hidden honeypot field for spam protection */}
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              
              {/* Hidden _to field for email notifications (optional) */}
              <input type="hidden" name="_to" value="info@paperringsinc.com" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-slate-900 px-3 py-2 text-white shadow-sm focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-slate-900 px-3 py-2 text-white shadow-sm focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-slate-900 px-3 py-2 text-white shadow-sm focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-gradient-rainbow py-2 px-4 text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

