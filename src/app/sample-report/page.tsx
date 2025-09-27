'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  FileText,
  Camera,
  AlertTriangle,
  CheckCircle,
  Info,
  Download,
  ZoomIn,
  X
} from 'lucide-react';

export default function SampleReportPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('overview');

  const reportSections = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'structural', label: 'Structural', icon: CheckCircle },
    { id: 'electrical', label: 'Electrical', icon: AlertTriangle },
    { id: 'plumbing', label: 'Plumbing', icon: CheckCircle },
    { id: 'hvac', label: 'HVAC', icon: Info },
  ];

  const sampleImages = [
    {
      title: 'Electrical Panel Issue',
      category: 'Major Concern',
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop',
      description: 'Outdated electrical panel with safety concerns that require immediate attention from a qualified electrician.'
    },
    {
      title: 'Plumbing Assessment',
      category: 'Good Condition',
      url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop',
      description: 'Modern plumbing fixtures in excellent condition with proper installation and no visible leaks.'
    },
    {
      title: 'Roof Structure',
      category: 'Minor Issues',
      url: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=400&auto=format&fit=crop',
      description: 'Overall good roof condition with minor wear on some shingles that should be monitored.'
    }
  ];

  const reportData = {
    overview: {
      title: 'Inspection Overview',
      content: {
        address: '1234 Mountain View Drive, Denver, CO 80202',
        date: 'October 15, 2024',
        inspector: 'Mike Stevens, Certified Home Inspector',
        summary: 'This comprehensive home inspection was conducted on a 2,400 sq ft two-story home built in 1998. The property is generally in good condition with a few areas requiring attention.',
        majorFindings: [
          'Electrical panel requires updating for safety compliance',
          'Minor roof maintenance needed on south-facing slope',
          'HVAC system performing well with recent service'
        ]
      }
    },
    structural: {
      title: 'Structural Systems',
      content: {
        foundation: 'Foundation appears solid with no major cracks or settling issues observed.',
        framing: 'Structural framing is in good condition with no visible sagging or damage.',
        roof: 'Roof structure is sound with minor cosmetic issues on exterior shingles.',
        status: 'satisfactory'
      }
    },
    electrical: {
      title: 'Electrical Systems',
      content: {
        panel: 'Main electrical panel is outdated and should be upgraded to meet current safety standards.',
        wiring: 'Most wiring appears to be in good condition, though some outlets lack GFCI protection.',
        safety: 'Several safety concerns identified that require professional attention.',
        status: 'attention-needed'
      }
    },
    plumbing: {
      title: 'Plumbing Systems',
      content: {
        supply: 'Water supply system is functioning properly with good water pressure throughout.',
        drainage: 'All drains tested and working correctly with no blockages observed.',
        fixtures: 'Plumbing fixtures are in excellent condition with recent updates.',
        status: 'excellent'
      }
    },
    hvac: {
      title: 'HVAC Systems',
      content: {
        heating: 'Heating system recently serviced and operating efficiently.',
        cooling: 'Air conditioning unit in good working order with clean filters.',
        ductwork: 'Ductwork properly installed with good insulation throughout.',
        status: 'good'
      }
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'satisfactory':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'attention-needed':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'good':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'satisfactory':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'attention-needed':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-headline text-4xl md:text-5xl font-bold">
                Sample Inspection Report
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                See exactly what you'll receive with our comprehensive home inspection reports.
                Detailed, professional, and easy to understand.
              </p>
              <div className="flex justify-center">
                <button className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors duration-200 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Full Sample Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Report Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              {reportSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Report Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="mb-6">
                    <h2 className="font-headline text-2xl font-bold text-gray-900 mb-2">
                      {reportData[activeSection as keyof typeof reportData].title}
                    </h2>
                  </div>

                  {activeSection === 'overview' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Property Details</h3>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p><strong>Address:</strong> {reportData.overview.content.address}</p>
                            <p><strong>Inspection Date:</strong> {reportData.overview.content.date}</p>
                            <p><strong>Inspector:</strong> {reportData.overview.content.inspector}</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Inspection Summary</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center p-3 bg-green-50 rounded">
                              <div className="font-bold text-green-600">15</div>
                              <div className="text-gray-600">Systems Checked</div>
                            </div>
                            <div className="text-center p-3 bg-orange-50 rounded">
                              <div className="font-bold text-orange-600">3</div>
                              <div className="text-gray-600">Items Flagged</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Executive Summary</h3>
                        <p className="text-gray-700 leading-relaxed">{reportData.overview.content.summary}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Major Findings</h3>
                        <ul className="space-y-2">
                          {reportData.overview.content.majorFindings.map((finding, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeSection !== 'overview' && (
                    <div className="space-y-6">
                      {Object.entries(reportData[activeSection as keyof typeof reportData].content).map(([key, value]) => {
                        if (key === 'status') {
                          return (
                            <div key={key} className={`p-4 rounded-lg border ${getStatusColor(value as string)}`}>
                              <div className="flex items-center gap-2">
                                {getStatusIcon(value as string)}
                                <span className="font-semibold capitalize">
                                  {(value as string).replace('-', ' ')} Condition
                                </span>
                              </div>
                            </div>
                          );
                        }
                        return (
                          <div key={key}>
                            <h3 className="font-semibold text-gray-900 mb-2 capitalize">{key}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{value as string}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Photo Gallery Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-gray-900">Photo Documentation</h3>
                  </div>
                  <div className="space-y-4">
                    {sampleImages.map((image, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="relative">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-32 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage(image.url)}
                          />
                          <button
                            className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                            onClick={() => setSelectedImage(image.url)}
                          >
                            <ZoomIn className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm text-gray-900">{image.title}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              image.category === 'Major Concern' ? 'bg-red-100 text-red-700' :
                              image.category === 'Minor Issues' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {image.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Report Features */}
                <div className="bg-primary text-white rounded-lg p-6">
                  <h3 className="font-headline font-semibold text-lg mb-4">Report Features</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Detailed photo documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Priority-based recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Easy-to-understand summaries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Digital and print-friendly format</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Get Your Professional Inspection Report
            </h2>
            <p className="text-xl text-white/90">
              Experience the same level of detail and professionalism in your own home inspection.
              Schedule today and receive your comprehensive report within 24 hours.
            </p>
            <Link
              href="/book-inspection"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary/90 transition-colors duration-200"
            >
              Schedule Your Inspection Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Inspection photo"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}