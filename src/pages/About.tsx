import React from 'react';
import { Coffee, Users, Star, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Coffee className="h-8 w-8 text-amber-600" />,
      title: "Premium Quality",
      description: "We source the finest ingredients and teas from around the world to ensure every dish and cup is exceptional."
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Family Tradition",
      description: "Our recipes have been passed down through generations, bringing authentic flavors to every meal."
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      title: "Excellence",
      description: "We strive for perfection in every aspect of our service, from food preparation to customer experience."
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Community",
      description: "We believe in bringing people together through the shared joy of good food and great company."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Tea Party Restaurant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our passion for authentic Indian & Chinese cuisine, 
            premium teas, and creating memorable dining experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to bring authentic flavors from India and China to our community, 
                Tea Party Restaurant has been serving exceptional cuisine since our opening. Our journey 
                began with a simple belief: that great food brings people together.
              </p>
              <p>
                What started as a small family business has grown into a beloved local institution, 
                known for our commitment to quality, authenticity, and warm hospitality. Every dish 
                we serve tells a story of tradition, passion, and culinary excellence.
              </p>
              <p>
                Today, we continue to honor our roots while embracing innovation, offering a diverse 
                menu that celebrates the rich culinary heritage of both Indian and Chinese cuisines, 
                complemented by our carefully curated selection of premium teas.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 p-8 rounded-lg">
            <div className="text-center">
              <Coffee className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide an exceptional dining experience that celebrates authentic flavors, 
                fosters community connections, and creates lasting memories through the art of 
                fine cuisine and premium tea service.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our dedicated team of chefs, servers, and staff work tirelessly to ensure 
            every visit to Tea Party is a memorable one. From our experienced chefs 
            who bring decades of culinary expertise to our friendly service staff who 
            make you feel at home, we're all united by our passion for great food and 
            exceptional service.
          </p>
          <p className="text-amber-100">
            We're proud to be part of your community and look forward to serving you 
            for many years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
