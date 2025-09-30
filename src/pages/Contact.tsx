import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any questions or inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      Tea Party, Kullanru, Pochampally TK<br />
                      Krishnagiri DI, - 635 206 Tamilnadu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 93858 31418</p>
                    <p className="text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">teapartunity@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Instagram</h3>
                    <a href="https://instagram.com/tea_party_._" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">
                      @tea_party_._
                    </a>
                    <p className="text-sm text-gray-500">Follow us for updates and special offers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Thursday: 11:00 AM - 11:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Find Us</h3>
                <p className="text-sm text-gray-600">Tea Party, Kullanru, Pochampally TK, Krishnagiri DI, - 635 206 Tamilnadu</p>
              </div>
              <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Tea Party Restaurant</p>
                  <p className="text-sm text-gray-500">Krishnagiri, Tamilnadu</p>
                  <a 
                    href="https://maps.app.goo.gl/agmQ8JmkuBfhqwg18?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="catering">Catering Services</option>
                  <option value="private-events">Private Events</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Please share your message, questions, or comments..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Catering Services</h3>
            <p className="text-gray-600">
              We offer full catering services for your special events and corporate meetings.
            </p>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Private Parties</h3>
            <p className="text-gray-600">
              Book our venue for private tea parties, birthdays, and celebrations.
            </p>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Gift Cards</h3>
            <p className="text-gray-600">
              Perfect for tea lovers! Purchase gift cards for friends and family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;