'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, Phone, Mail, User, Home, CheckCircle } from 'lucide-react';

export default function BookInspectionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    inspectionType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const inspectionTypes = [
    { value: 'pre-purchase', label: 'Pre-Purchase Inspection', price: '$450-650' },
    { value: 'pre-listing', label: 'Pre-Listing Inspection', price: '$400-550' },
    { value: 'new-construction', label: 'New Construction Inspection', price: '$500-750' },
    { value: 'maintenance', label: 'Annual Maintenance Inspection', price: '$300-450' }
  ];

  const propertyTypes = [
    'Single Family Home',
    'Townhouse',
    'Condominium',
    'Multi-Family (2-4 units)',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Home Inspection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quick and easy booking process. Get your comprehensive inspection report within 24 hours.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                      step <= currentStep
                        ? 'bg-primary text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step < currentStep ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 3 && (
                      <div className={`w-12 h-1 ${
                        step < currentStep ? 'bg-primary' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-center space-x-16 mt-4">
                <span className={`text-sm ${currentStep >= 1 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                  Property Details
                </span>
                <span className={`text-sm ${currentStep >= 2 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                  Schedule
                </span>
                <span className={`text-sm ${currentStep >= 3 ? 'text-primary font-medium' : 'text-gray-500'}`}>
                  Contact Info
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Step 1: Property Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-headline text-2xl font-bold text-gray-900 mb-2">
                      Property Information
                    </h2>
                    <p className="text-gray-600">Tell us about the property you'd like inspected</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        name="propertyAddress"
                        required
                        value={formData.propertyAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="123 Main Street, Denver, CO 80202"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select Property Type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inspection Type *
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {inspectionTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            formData.inspectionType === type.value
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inspectionType"
                            value={type.value}
                            checked={formData.inspectionType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-gray-900">{type.label}</div>
                              <div className="text-sm text-secondary font-semibold mt-1">{type.price}</div>
                            </div>
                            {formData.inspectionType === type.value && (
                              <CheckCircle className="h-5 w-5 text-primary" />
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-headline text-2xl font-bold text-gray-900 mb-2">
                      Choose Date & Time
                    </h2>
                    <p className="text-gray-600">Select your preferred inspection date and time</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Any specific concerns or areas you'd like us to focus on..."
                    ></textarea>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-headline text-2xl font-bold text-gray-900 mb-2">
                      Contact Information
                    </h2>
                    <p className="text-gray-600">How can we reach you to confirm your appointment?</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="john.smith@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gray-50 rounded-lg p-6 mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property:</span>
                        <span className="text-gray-900">{formData.propertyAddress || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inspection Type:</span>
                        <span className="text-gray-900">
                          {inspectionTypes.find(t => t.value === formData.inspectionType)?.label || 'Not selected'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="text-gray-900">{formData.preferredDate || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="text-gray-900">{formData.preferredTime || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                        <span className="text-gray-900">Estimated Cost:</span>
                        <span className="text-secondary">
                          {inspectionTypes.find(t => t.value === formData.inspectionType)?.price || 'TBD'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="bg-secondary text-white px-8 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
                    >
                      Book Inspection
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-2xl font-bold mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-white/90 mb-8">
              Our team is here to assist you. Contact us directly for immediate assistance.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-secondary" />
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-white/80">+1 (800) HOME-PRO</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-secondary" />
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-white/80">mike@smhomeservices.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-secondary" />
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-white/80">Greater Denver Metro</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}