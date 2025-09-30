import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Rice Items');

  return (
    <div className="min-h-screen py-16">
      <Helmet>
        <title>Menu - Tea Party Restaurant | Indian & Chinese Food in Krishnagiri, Tamilnadu</title>
        <meta name="description" content="Explore our extensive menu with 200+ authentic Indian & Chinese dishes in Krishnagiri. Rice items, noodles, starters, pizza, burgers, momos, ice cream, and more. Affordable prices, fresh ingredients." />
        <meta name="keywords" content="menu Krishnagiri, Indian food menu, Chinese food menu, restaurant menu Tamilnadu, rice items, noodles, starters, pizza, burger, momos" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Complete Menu - Indian & Chinese Cuisine</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of 200+ authentic Indian & Chinese dishes in Krishnagiri, Tamilnadu. From traditional rice items and noodles to modern pizza and burgers, we offer something for every palate.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[selectedCategory as keyof typeof menuData]?.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-amber-600">Rs. {item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;