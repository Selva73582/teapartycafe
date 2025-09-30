import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Tea Party Restaurant - Best Indian & Chinese Food in Krishnagiri, Tamilnadu</title>
        <meta name="description" content="Tea Party Restaurant in Krishnagiri offers authentic Indian & Chinese cuisine with 200+ dishes. Open 11 AM - 11 PM daily. Family dining, corporate meals, and special celebrations." />
        <meta name="keywords" content="restaurant Krishnagiri, Indian food Tamilnadu, Chinese food Krishnagiri, Tea Party restaurant, authentic cuisine, family dining" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Tea Party Restaurant
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Authentic Indian & Chinese Cuisine in Krishnagiri, Tamilnadu - Where Every Meal is a Celebration
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Restaurant Hours & Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit Tea Party Restaurant in Krishnagiri, Tamilnadu for authentic Indian and Chinese cuisine. We're open daily from 11 AM to 11 PM to serve you the finest dining experience with fresh ingredients and traditional recipes.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Tea Party Restaurant in Krishnagiri?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best of Indian and Chinese cuisine in Tamilnadu. Our restaurant combines authentic flavors, fresh ingredients, and warm hospitality to create memorable dining experiences for families, friends, and corporate gatherings.
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

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Authentic Indian & Chinese Cuisine in Krishnagiri</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tea Party Restaurant is the premier destination for authentic Indian and Chinese cuisine in Krishnagiri, Tamilnadu. Our extensive menu features over 200 carefully crafted dishes, from traditional Indian curries and biryanis to flavorful Chinese noodles and stir-fries.
                </p>
                <p>
                  Located at Tea Party, Kullanru, Pochampally TK, Krishnagiri DI, our restaurant offers a warm and inviting atmosphere perfect for family dinners, corporate meals, and special celebrations. We pride ourselves on using fresh, locally-sourced ingredients and traditional cooking methods.
                </p>
                <p>
                  Whether you're craving spicy Indian starters like Chicken 65 and Gobi Manchurian, or prefer Chinese favorites like Prawn Noodles and Mixed Veg Fried Rice, our skilled chefs prepare each dish with authentic flavors and attention to detail.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Specialties</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Authentic Indian Rice & Noodle Dishes</li>
                <li>• Traditional Chinese Cuisine</li>
                <li>• Fresh Vegetarian & Non-Vegetarian Options</li>
                <li>• Pizza, Burger & Sandwich Menu</li>
                <li>• Delicious Momos & Snacks</li>
                <li>• Premium Ice Cream & Falooda</li>
                <li>• Refreshing Soda & Beverages</li>
                <li>• Private Dining & Event Catering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Memorable Dining Experience?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Book your table today and indulge in our exquisite menu of authentic Indian & Chinese cuisine
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