'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../public/images/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Managed IT', href: '/services' },
  { name: 'Agentic-AI Solutions', href: '/agentic-ai' },
  { name: 'Canadian Grants', href: '/grants' },
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/casestudies' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  return (
    <Popover as="nav" className="sticky top-0 z-50 glassmorphism w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={logo}
                  alt="Paper Rings Inc. Logo"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-semibold">Paper Rings</span>
                <span className="text-white text-xs opacity-80">Your Partner in Success</span>
              </div>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Call to action button or other elements */}
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          {({ close }) => (
            <div className="rounded-lg bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" className="flex items-center gap-2" onClick={() => close()}>
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                          src={logo} // Ensure this is the imported 'logo' variable from the top of your file
                          alt="Paper Rings Inc. Logo"
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-lg font-semibold">Paper Rings</span>
                        <span className="text-white text-xs opacity-80">Your Partner in Success</span>
                      </div>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => close()}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

