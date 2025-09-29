import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
  {
    category: "About Tea Party",
    question: "What is Tea Party restaurant known for?",
    answer: "Tea Party is a multi-cuisine family restaurant known for authentic Indian dishes, delicious Chinese food, and a wide range of snacks, desserts, and beverages. We are popular for our cozy atmosphere, freshly prepared meals, and friendly service."
  },
  {
    category: "Menu",
    question: "Does Tea Party serve vegetarian and vegan food?",
    answer: "Yes! Tea Party has a wide variety of vegetarian, vegan, and Jain-friendly options. Our Indian and Chinese menus include fresh plant-based dishes made with authentic spices and ingredients."
  },
  {
    category: "Menu",
    question: "Does Tea Party have non-vegetarian dishes?",
    answer: "Absolutely. We serve a wide range of non-vegetarian Indian curries, tandoori grills, biryanis, and popular Chinese chicken, seafood, and lamb dishes. All meals are cooked fresh to order."
  },
  {
    category: "Menu",
    question: "Can I customize the spice level of my dish?",
    answer: "Yes, at Tea Party you can request your dishes to be mild, medium, or extra spicy. Our chefs happily adjust spice levels to suit your taste."
  },
  {
    category: "Reservations",
    question: "Do I need to book a table at Tea Party?",
    answer: "We recommend making a reservation, especially on weekends and evenings, to guarantee your table at Tea Party. However, we also welcome walk-in guests whenever seating is available."
  },
  {
    category: "Delivery & Takeaway",
    question: "Does Tea Party offer food delivery?",
    answer: "Yes! Tea Party offers home delivery and takeaway services. You can order directly through our website or find us on popular delivery platforms like Swiggy and Zomato."
  },
  {
    category: "Events",
    question: "Can I host a birthday or private party at Tea Party?",
    answer: "Yes, Tea Party is a perfect venue for birthdays, anniversaries, and corporate gatherings. We provide special decorations, customized menus, and group dining packages to make your celebration memorable."
  },
  {
    category: "Location",
    question: "Where is Tea Party located?",
    answer: "Tea Party restaurant is conveniently located at 2/95/D, Dharmapuri Main Road, Kullanru, Pochampally TK, Krishnagiri DI, - 635 206 Tamilnadu. Search 'Tea Party restaurant near me' on Google Maps and you'll find us easily."
  },
  {
    category: "General",
    question: "Why should I choose Tea Party?",
    answer: "Tea Party is one of the best restaurants for authentic Indian and Chinese food, offering a family-friendly dining experience with quality, taste, and affordable prices. Whether you’re craving biryani, noodles, or snacks, Tea Party has something for everyone."
  },
  {
    category: "Payment",
    question: "What payment methods does Tea Party accept?",
    answer: "Tea Party accepts cash, credit/debit cards, UPI payments, and popular digital wallets such as Google Pay and PhonePe."
  },
  {
    category: "Offers",
    question: "Does Tea Party have special discounts?",
    answer: "Yes! Tea Party offers weekly combos, festive discounts, and loyalty rewards for regular customers. Follow our social media pages for the latest offers."
  }
];


  const categories = [...new Set(faqData.map(item => item.category))];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our tea party experience, reservations, and services.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold text-amber-600 mb-4 border-b-2 border-amber-200 pb-2">
              {category}
            </h2>
            
            <div className="space-y-4">
              {faqData
                .filter(item => item.category === category)
                .map((item, index) => {
                  const globalIndex = faqData.indexOf(item);
                  return (
                    <div key={globalIndex} className="bg-white rounded-lg shadow-md">
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-amber-50 transition duration-200 rounded-lg"
                      >
                        <h3 className="text-lg font-medium text-gray-800 pr-4">
                          {item.question}
                        </h3>
                        {openIndex === globalIndex ? (
                          <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-amber-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Contact section */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-amber-100 mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Contact Us
            </Link>
            <a href="tel:+919385831418" className="inline-block border-2 border-white text-white hover:bg-white hover:text-amber-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Call +91 93858 31418
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;