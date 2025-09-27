'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Wrench, FileText, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="font-headline font-bold text-xl text-primary">
              SM Home Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/sample-report"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Sample Report
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/book-inspection"
              className="bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-secondary/90 transition-colors duration-200"
            >
              Book Inspection
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;