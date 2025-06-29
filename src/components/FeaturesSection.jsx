
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, ListChecks } from 'lucide-react';

const FeaturesSection = ({ appName }) => {
  const features = [
    {
      icon: Shield,
      title: "100% Unabhängig",
      description: "Wir sind an keinen Versicherer gebunden und ermöglichen Ihnen einen neutralen Überblick."
    },
    {
      icon: Zap,
      title: "Einfache Dateneingabe",
      description: "Nur einmal Ihre Yachtdaten eingeben und Anfragen an mehrere Anbieter senden lassen."
    },
    {
      icon: Clock,
      title: "Zeit Sparen",
      description: "Kein mühsames Ausfüllen mehrerer Formulare bei verschiedenen Versicherern mehr."
    },
    {
      icon: ListChecks,
      title: "Angebote Vergleichen",
      description: "Erhalten Sie verschiedene Angebote direkt von den Anbietern und wählen Sie das Beste für sich aus."
    }
  ];

  return (
    <section id="vorteile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Warum <span className="text-blue-600">{appName}</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir vereinfachen den Prozess, passende Yacht-Versicherungen zu finden und zu vergleichen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
