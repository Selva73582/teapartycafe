import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Tea Party Restaurant",
    "description": "Authentic Indian & Chinese cuisine restaurant in Krishnagiri, Tamilnadu",
    "url": "https://teapartyrestaurant.com",
    "telephone": "+919385831418",
    "email": "teapartunity@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tea Party, Kullanru, Pochampally TK",
      "addressLocality": "Krishnagiri",
      "addressRegion": "Tamilnadu",
      "postalCode": "635 206",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.5204",
      "longitude": "78.2138"
    },
    "openingHours": "Mo-Su 11:00-23:00",
    "priceRange": "$$",
    "servesCuisine": ["Indian", "Chinese"],
    "hasMenu": "https://teapartyrestaurant.com/menu",
    "image": "https://teapartyrestaurant.com/logo.png",
    "sameAs": [
      "https://instagram.com/tea_party_._"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150"
    }
  };

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <div className="min-h-screen bg-amber-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;