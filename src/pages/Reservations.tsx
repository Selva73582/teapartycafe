import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

const Reservations = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book a Table</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserve your table for an unforgettable tea party experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Embedded Google Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reservation Details</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSehXVJWF4Kz-eukO5TsfF8Udlnl9yMOefAq2SGrOOR9g2E9tw/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Reservation Form"
            >
              Loading…
            </iframe>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Policy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reservations are confirmed within 24 hours</li>
                <li>• Tables are held for 15 minutes past reservation time</li>
                <li>• Cancellations accepted up to 2 hours before</li>
                <li>• Large parties (8+) may require deposit</li>
                <li>• Special dietary needs accommodated with advance notice</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91 93858 31418</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Mon-Sat: 9AM-10PM</p>
                    <p className="text-gray-600">Sunday: 10AM-9PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Private Events</h3>
              <p className="mb-4">Planning a special celebration? We offer private dining options for groups of 15 or more.</p>
              <Link to="/contact" className="inline-block bg-white text-amber-600 hover:bg-amber-50 px-4 py-2 rounded font-medium transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
