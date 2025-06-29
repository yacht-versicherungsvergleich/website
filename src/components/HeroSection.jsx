import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = ({ onStartComparison }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 wave-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full ocean-gradient opacity-10 transform skew-x-12"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div className="grid lg:grid-cols-2 gap-12 items-center">
	  <motion.div
	    initial={{ opacity: 0, x: -50 }}
	    animate={{ opacity: 1, x: 0 }}
	    transition={{ duration: 0.8 }}
	  >
	    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
	      <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
		Yacht-Versicherungen
	      </span>
	      <br />
	      <span className="text-gray-800">vergleichen & sparen</span>
	    </h1>

	    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
	      Finden Sie passende Versicherungen für Ihre Segelyacht oder Motoryacht.
	      <strong className="text-blue-600"> Unabhängig, kostenlos und mit nur einer Anfrage </strong>
	      Angebote von verschiedenen Anbietern erhalten.
	    </p>

	    <div className="flex flex-col sm:flex-row gap-4 mb-8">
	      <Button
		onClick={onStartComparison}
		size="lg"
		className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg yacht-shadow group"
	      >
		Jetzt Vergleich starten
		<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
	      </Button>
	    </div>

	    <div className="flex items-center space-x-6 text-sm text-gray-600">
	      <div className="flex items-center">
		<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
		100% kostenlos
	      </div>
	      <div className="flex items-center">
		<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
		Unabhängig
	      </div>
	      <div className="flex items-center">
		<CheckCircle className="h-5 w-5 text-green-500 mr-2" />
		Einfache Anfrage
	      </div>
	    </div>
	  </motion.div>

	  <motion.div
	    initial={{ opacity: 0, x: 50 }}
	    animate={{ opacity: 1, x: 0 }}
	    transition={{ duration: 0.8, delay: 0.2 }}
	    className="relative"
	  >
	    <div className="relative floating">
	      <img
		className="w-full h-auto rounded-2xl yacht-shadow object-cover aspect-[4/3]"
		alt="Segelyacht kreuzt auf ruhigem Wasser bei Sonnenuntergang"
	       src="https://images.unsplash.com/photo-1498117293047-db08a355a3a6" />
	    </div>
	  </motion.div>
	</div>
      </div>
    </section>
  );
};

export default HeroSection;
