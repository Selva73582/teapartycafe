import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Tea Party Logo" 
                className="h-8 w-8 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Tea Party Restaurant</h3>
                <p className="text-amber-400 text-sm">
                  Authentic Indian & Chinese Cuisine
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Welcome to <strong>Tea Party</strong>, the best multi-cuisine restaurant in 
              <strong> Krishnagiri, Tamilnadu</strong>. We specialize in <strong>authentic Indian food, Chinese dishes, 
              snacks, desserts, and premium tea</strong>. Whether it’s family dining, 
              corporate meals, or special celebrations, Tea Party offers the perfect 
              blend of taste, tradition, and elegance.
            </p>
            <nav className="space-x-4 text-sm">
              <Link to="/menu" className="hover:text-amber-400">Menu</Link>
              <Link to="/about" className="hover:text-amber-400">About Us</Link>
              <Link to="/reservations" className="hover:text-amber-400">Reservations</Link>
              <Link to="/contact" className="hover:text-amber-400">Contact</Link>
            </nav>
          </div>

          {/* Contact Info (Local SEO: NAP) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Tea Party Restaurant, 2/95/D, Dharmapuri Main Road, Kullanru, Pochampally TK, Krishnagiri DI, - 635 206 Tamilnadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <a href="tel:+919385831418" className="hover:text-amber-400">
                  +91 93858 31418
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <a href="mailto:teapartunity@gmail.com" className="hover:text-amber-400">
                  teapartunity@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-amber-400" />
                <a href="https://instagram.com/tea_party_._" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                  @tea_party_._
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <p>Mon - Thu: 11:00 AM - 11:00 PM</p>
              <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
              <p>Sunday: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tea Party Restaurant | Authentic Indian & Chinese Food in Krishnagiri, Tamilnadu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
