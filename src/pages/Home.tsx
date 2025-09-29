import { Link } from 'react-router-dom';
import { Clock, Star, Coffee, Users } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: <Coffee className="h-8 w-8 text-amber-600" />,
      title: "Premium Tea Selection",
      description: "Over 50 varieties of finest teas from around the world"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Private Events",
      description: "Perfect venue for birthday parties, baby showers, and celebrations"
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in service and cuisine"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Tea Party
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An Elegant Tea Party Experience with Exquisite Cuisine and Warm Hospitality
          </p>
          <div className="space-x-4">
            <Link to="/menu" className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              View Menu
            </Link>
            <Link to="/reservations" className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Opening Hours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're open daily to serve you the finest dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Monday - Thursday</h3>
              <p className="text-2xl font-bold text-amber-600">11:00 AM - 11:00 PM</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Friday - Saturday</h3>
              <p className="text-2xl font-bold text-amber-600">11:00 AM - 11:00 PM</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sunday</h3>
              <p className="text-2xl font-bold text-amber-600">11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Tea Party?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our tea party experience truly special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Memorable Tea Party Experience?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Book your table today and indulge in our exquisite menu
          </p>
          <Link to="/reservations" className="inline-block bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;