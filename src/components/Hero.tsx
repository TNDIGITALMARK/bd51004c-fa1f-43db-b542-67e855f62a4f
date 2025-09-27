'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Star, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/95 to-primary text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop')",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Home Inspections You Can Trust
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Your peace of mind is our priority. Comprehensive home inspections
                with detailed reports for informed buying decisions.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary" />
                <span>12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span>Same-Day Reports</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/book-inspection"
                className="bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary/90 transition-colors duration-200 text-center"
              >
                Schedule Inspection
              </Link>
              <Link
                href="/sample-report"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 text-center"
              >
                View Sample Report
              </Link>
            </div>
          </div>

          {/* Inspector Image Placeholder */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-lg">Mike Stevens</h3>
                      <p className="text-white/80">Certified Home Inspector</p>
                      <p className="text-white/70 text-sm">Greater Denver Metro Area</p>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white/90 text-sm leading-relaxed">
                      "Every inspection is conducted with meticulous attention to detail,
                      providing you with the confidence to make informed decisions about your investment."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;