
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const BenefitsSection = ({ onStartComparison }) => {
  const benefits = [
    "Für Segelyachten & Motoryachten",
    "Kasko- & Haftpflicht-Angebote", 
    "Optionen für weltweiten Schutz",
    "Angebote mit Regattaschutz finden",
    "Direkter Kontakt zu Anbietern"
  ];

  const USER_IMAGE_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/f7c05640-1c81-440b-b3ba-9eb34d8f5371/f17b431c49f1836d3c6f56e5f32058bc.jpg";


  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img   
              className="w-full h-auto rounded-2xl yacht-shadow object-cover aspect-[4/3]" 
              alt="Mehrere Yachten ankern in einer malerischen Bucht mit türkisfarbenem Wasser"
             src={USER_IMAGE_URL} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Passende Angebote für 
              <span className="text-blue-600"> Ihre Yacht</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Ob Segelyacht oder Motoryacht – geben Sie einmal Ihre Daten ein und erhalten Sie passende Versicherungsangebote von verschiedenen Anbietern zum Vergleichen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              onClick={onStartComparison}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
            >
              Jetzt Angebote anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
