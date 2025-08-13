import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProvidersSection from '@/components/ProvidersSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import AGB from '@/components/AGB';
import Datenschutz from '@/components/Datenschutz';
import Impressum from '@/components/Impressum';

const LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/f7c05640-1c81-440b-b3ba-9eb34d8f5371/be603b06749b86f8c93241682bc2576f.png";
const APP_NAME = "Yacht Versicherungsvergleich";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (['agb', 'datenschutz', 'impressum'].includes(hash)) {
	setCurrentPage(hash);
      } else {
	setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleStartComparison = () => {
    window.location.href = 'https://app.yacht-versicherungsvergleich.de';
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'agb':
	return <AGB onBack={handleBackToHome} />;
      case 'datenschutz':
	return <Datenschutz onBack={handleBackToHome} />;
      case 'impressum':
	return <Impressum onBack={handleBackToHome} />;
      default:
	return (
	  <motion.div
	    initial={{ opacity: 0 }}
	    animate={{ opacity: 1 }}
	  >
	    <HeroSection onStartComparison={handleStartComparison} />
	    <FeaturesSection appName={APP_NAME} />
	      <BenefitsSection onStartComparison={handleStartComparison} />
	      {/*}<ProvidersSection />{*/}
	    <CtaSection onStartComparison={handleStartComparison} />
	    <Footer logoUrl={LOGO_URL} appName={APP_NAME} />
	  </motion.div>
	);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Toaster />

      {currentPage === 'home' && <Navbar logoUrl={LOGO_URL} appName={APP_NAME} />}

      {renderPage()}
    </div>
  );
}

export default App;
