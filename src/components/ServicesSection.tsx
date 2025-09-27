'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Zap, Droplets, Wind } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Structural',
      description: 'Foundation & framing inspection',
      features: ['Foundation assessment', 'Structural integrity', 'Load-bearing elements'],
    },
    {
      icon: Zap,
      title: 'Electrical Systems',
      description: 'Wiring & electrical inspection',
      features: ['Panel inspection', 'Outlet testing', 'Safety compliance'],
    },
    {
      icon: Droplets,
      title: 'Plumbing',
      description: 'Pipes & fixtures inspection',
      features: ['Water pressure testing', 'Leak detection', 'Drainage systems'],
    },
    {
      icon: Wind,
      title: 'HVAC',
      description: 'Heating & Cooling systems',
      features: ['System efficiency', 'Ductwork inspection', 'Air quality assessment'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Comprehensive Inspection Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our thorough inspections cover every critical system in your home,
            ensuring nothing is overlooked.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline font-semibold text-xl text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-500">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-headline text-2xl font-semibold text-primary mb-4">
              Ready to Schedule Your Inspection?
            </h3>
            <p className="text-gray-600 mb-6">
              Get peace of mind with our comprehensive home inspection services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-primary px-6 py-3 rounded-md border border-primary hover:bg-primary hover:text-white font-medium transition-colors duration-200"
              >
                View All Services
              </Link>
              <Link
                href="/book-inspection"
                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90 font-medium transition-colors duration-200"
              >
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;