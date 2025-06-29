import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Waves, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CtaSection = ({ onStartComparison }) => {
  const { toast } = useToast();

  return (
    <section className="py-20 ocean-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
	<motion.div
	  initial={{ opacity: 0, y: 30 }}
	  whileInView={{ opacity: 1, y: 0 }}
	  viewport={{ once: true }}
	  transition={{ duration: 0.8 }}
	>
	  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
	    Bereit für die passenden Yacht-Versicherungen?
	  </h2>
	  <p className="text-xl text-blue-100 mb-8">
	    Starten Sie jetzt Ihre kostenlose Anfrage und erhalten Sie verschiedene Angebote zum Vergleichen für Ihre Yacht.
	  </p>

	  <div className="flex flex-col sm:flex-row gap-4 justify-center">
	    <Button
	      onClick={onStartComparison}
	      size="lg"
	      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg yacht-shadow"
	    >
	      <Waves className="mr-2 h-5 w-5" />
	      Vergleich starten
	    </Button>
	  </div>
	</motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
