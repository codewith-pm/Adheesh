import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CarListing from './components/CarListing';
import DocumentRequirements from './components/DocumentRequirements';
import ReviewForm from './components/ReviewForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading Aadhees Cars...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <CarListing />
      <DocumentRequirements />
      <ReviewForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
