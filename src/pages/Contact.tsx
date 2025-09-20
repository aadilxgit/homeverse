import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-dark-jungle-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to find your dream home? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-custom-2 p-8 h-fit">
                <h2 className="text-2xl font-bold text-dark-jungle-green mb-6 font-poppins">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-soda/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-soda" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-jungle-green mb-1">Address</h3>
                      <p className="text-cadet">15/A, Nest Tower, NYC<br />Brooklyn, New York, United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-soda/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-soda" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-jungle-green mb-1">Phone</h3>
                      <p className="text-cadet">+0123-456789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-soda/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-soda" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-jungle-green mb-1">Email</h3>
                      <p className="text-cadet">info@homeverse.com<br />contact@homeverse.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-soda/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-soda" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-jungle-green mb-1">Office Hours</h3>
                      <p className="text-cadet">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-dark-jungle-green mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-orange-soda/10 rounded-lg flex items-center justify-center text-orange-soda hover:bg-orange-soda hover:text-white transition-colors">
                      📘
                    </a>
                    <a href="#" className="w-10 h-10 bg-orange-soda/10 rounded-lg flex items-center justify-center text-orange-soda hover:bg-orange-soda hover:text-white transition-colors">
                      🐦
                    </a>
                    <a href="#" className="w-10 h-10 bg-orange-soda/10 rounded-lg flex items-center justify-center text-orange-soda hover:bg-orange-soda hover:text-white transition-colors">
                      📷
                    </a>
                    <a href="#" className="w-10 h-10 bg-orange-soda/10 rounded-lg flex items-center justify-center text-orange-soda hover:bg-orange-soda hover:text-white transition-colors">
                      💼
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-jungle-green mb-4 font-poppins">
              Find Us Here
            </h2>
            <p className="text-cadet">
              Visit our office or schedule an appointment to discuss your real estate needs.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-orange-soda mx-auto mb-4" />
              <p className="text-cadet">Interactive map would be integrated here</p>
              <p className="text-sm text-gray-500 mt-2">15/A, Nest Tower, NYC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}