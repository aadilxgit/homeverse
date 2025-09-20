import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-raisin-black-1 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Home className="w-8 h-8 text-orange-soda" />
              <span className="text-2xl font-bold font-poppins">Homeverse</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-soda" />
                <span className="text-gray-300">Brooklyn, New York, United States</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-soda" />
                <span className="text-gray-300">+0123-456789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-soda" />
                <span className="text-gray-300">contact@homeverse.com</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">📘</a>
              <a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">🐦</a>
              <a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">💼</a>
              <a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">📺</a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-soda transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-orange-soda transition-colors">Blog</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-orange-soda transition-colors">All Properties</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-soda transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">Property Search</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">Property Listing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">Real Estate Consulting</a></li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-4">Customer Care</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-soda transition-colors">Contact us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-soda transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-raisin-black-2 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; 2024 <span className="text-orange-soda">Homeverse</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}