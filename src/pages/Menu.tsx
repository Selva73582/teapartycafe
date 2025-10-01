import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Rice Items');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // On mobile, scroll to the top of the menu items to show the first item
    if (window.innerWidth < 640) {
      setTimeout(() => {
        const menuItems = document.querySelector('.menu-items');
        if (menuItems) {
          // Scroll to the very top of the menu items container
          menuItems.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <div className="min-h-screen py-16 sm:py-16">
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

        {/* Category Filters - Sticky on Mobile */}
        <div className="sticky top-16 z-10 bg-amber-50 py-4 -mx-4 px-4 mb-8 sm:mb-12 sm:static sm:bg-transparent sm:py-0">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div key={selectedCategory} className="menu-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {menuData[selectedCategory as keyof typeof menuData]?.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight flex-1">
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-amber-600 whitespace-nowrap">
                    Rs. {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;