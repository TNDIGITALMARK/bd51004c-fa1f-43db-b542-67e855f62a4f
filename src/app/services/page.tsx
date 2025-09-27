import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Clock, FileText, Shield, Building2, Zap, Droplets, Wind, Camera, ClipboardList } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Pre-Purchase Home Inspection',
      price: '$450-650',
      description: 'Comprehensive inspection for homebuyers to identify potential issues before purchase.',
      duration: '2-4 hours',
      reportTime: 'Same day',
      features: [
        'Complete structural assessment',
        'All major systems evaluation',
        'Detailed photo documentation',
        'Written report with recommendations',
        'Follow-up consultation included'
      ],
      icon: Building2,
      popular: true
    },
    {
      title: 'Pre-Listing Inspection',
      price: '$400-550',
      description: 'Help sellers identify and address issues before listing their property.',
      duration: '2-3 hours',
      reportTime: 'Same day',
      features: [
        'Identify potential buyer concerns',
        'Prioritized repair recommendations',
        'Marketing-ready report summary',
        'Repair cost estimates',
        'Competitive market advantage'
      ],
      icon: FileText
    },
    {
      title: 'New Construction Inspection',
      price: '$500-750',
      description: 'Quality assurance for newly built homes before final walkthrough.',
      duration: '3-5 hours',
      reportTime: 'Next day',
      features: [
        'Builder quality verification',
        'Code compliance check',
        'Finish work assessment',
        'System functionality testing',
        'Warranty documentation support'
      ],
      icon: Shield
    },
    {
      title: 'Annual Maintenance Inspection',
      price: '$300-450',
      description: 'Preventive inspection to catch issues early and maintain your investment.',
      duration: '1-2 hours',
      reportTime: 'Same day',
      features: [
        'Seasonal maintenance checklist',
        'Early problem detection',
        'Maintenance scheduling recommendations',
        'Energy efficiency assessment',
        'Insurance compliance verification'
      ],
      icon: ClipboardList
    }
  ];

  const whatWeInspect = [
    {
      category: 'Structural Systems',
      icon: Building2,
      items: ['Foundation', 'Framing', 'Roof structure', 'Load-bearing elements', 'Basement/crawl space']
    },
    {
      category: 'Electrical Systems',
      icon: Zap,
      items: ['Service panel', 'Wiring', 'Outlets & switches', 'GFCI protection', 'Electrical safety']
    },
    {
      category: 'Plumbing Systems',
      icon: Droplets,
      items: ['Water supply', 'Drainage', 'Fixtures', 'Water heater', 'Sump pump']
    },
    {
      category: 'HVAC Systems',
      icon: Wind,
      items: ['Heating system', 'Cooling system', 'Ductwork', 'Ventilation', 'Air quality']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-headline text-4xl md:text-5xl font-bold">
                Professional Inspection Services
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive home inspection services tailored to your specific needs.
                From pre-purchase to maintenance inspections, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-lg p-8 border ${
                      service.popular ? 'border-secondary ring-2 ring-secondary/20' : 'border-gray-200'
                    } hover:shadow-lg transition-shadow duration-300 relative`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-6 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-headline font-semibold text-xl text-gray-900">
                            {service.title}
                          </h3>
                          <div className="text-2xl font-bold text-secondary mt-1">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="flex gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>Report: {service.reportTime}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/book-inspection"
                      className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors duration-200 text-center block"
                    >
                      Schedule This Service
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Inspect */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                What We Inspect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive inspections cover all major home systems and components
                to give you complete peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatWeInspect.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-headline font-semibold text-xl text-gray-900">
                      {category.category}
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-xl text-white/90">
              Get started today with Denver's most trusted home inspection service.
              Quick scheduling, detailed reports, and unmatched expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-inspection"
                className="bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary/90 transition-colors duration-200"
              >
                Book Your Inspection
              </Link>
              <Link
                href="/sample-report"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
              >
                View Sample Report
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}