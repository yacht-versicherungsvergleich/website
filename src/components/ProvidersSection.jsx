
import React from 'react';
import { motion } from 'framer-motion';
import { Ship } from 'lucide-react';

const ProvidersSection = () => {
  const insuranceProviders = [
    "Allianz Marine", "AXA Yacht", "HDI Gerling", "Pantaenius", 
    "Yacht Pool", "Generali Marine", "DEVK Yacht", "Signal Iduna"
  ];

  return (
    <section id="anbieter" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Beispiele für <span className="text-blue-600">Versicherungsanbieter</span>
          </h2>
          <p className="text-xl text-gray-600">
            Wir leiten Ihre Anfrage an verschiedene Yacht-Versicherer weiter.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {insuranceProviders.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors group"
            >
              <div className="bg-white rounded-lg p-4 mb-4 group-hover:scale-105 transition-transform inline-block">
                <Ship className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <p className="font-semibold text-gray-900">{provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
