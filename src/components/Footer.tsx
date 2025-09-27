'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6" />
              <span className="font-headline font-bold text-lg">SM Home Services</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Professional home inspection services in the Greater Denver Metro Area.
              Your peace of mind is our priority.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary transition-colors">
                  Home Inspections
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary transition-colors">
                  Pre-Purchase Inspections
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary transition-colors">
                  Pre-Listing Inspections
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary transition-colors">
                  New Construction Inspections
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-secondary transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/sample-report" className="text-white/80 hover:text-secondary transition-colors">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-headline font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Greater Denver Metro Area<br />
                  Colorado
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <a
                  href="tel:+1-800-HOME-PRO"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  +1 (800) HOME-PRO
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:mike@smhomeservices.com"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  mike@smhomeservices.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 SM Home Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;