import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AGB = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8 flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Zurück</span>
        </Button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-gray-700 mb-6">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen der Yacht Versicherungsvergleich 
              im Zusammenhang mit der Vermittlung und dem Vergleich von Yacht-Versicherungen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 2 Leistungen</h2>
            <p className="text-gray-700 mb-6">
              Wir bieten einen kostenlosen Vergleichsservice für Yacht-Versicherungen an. Unsere Leistungen umfassen:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Vergleich verschiedener Versicherungsangebote</li>
              <li>Vermittlung von Kontakten zu Versicherungsanbietern</li>
              <li>Beratung zu Versicherungsoptionen</li>
              <li>Unterstützung bei der Antragsstellung</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 3 Kostenpflicht</h2>
            <p className="text-gray-700 mb-6">
              Die Nutzung unseres Vergleichsservices ist für Sie kostenfrei. Wir erhalten eine Vergütung von 
              den Versicherungsanbietern, wenn ein Vertrag über unsere Vermittlung zustande kommt.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 4 Datenschutz</h2>
            <p className="text-gray-700 mb-6">
              Ihre Daten werden entsprechend unserer Datenschutzerklärung verarbeitet. Weitere Informationen 
              finden Sie in unserer separaten Datenschutzerklärung.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 5 Haftung</h2>
            <p className="text-gray-700 mb-6">
              Wir haften nur für Schäden, die auf Vorsatz oder grobe Fahrlässigkeit zurückzuführen sind. 
              Eine weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 6 Schlussbestimmungen</h2>
            <p className="text-gray-700 mb-6">
              Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
              bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
              <p className="text-gray-700">
                Bei Fragen zu diesen AGB erreichen Sie uns unter:<br />
                E-Mail: info@yacht-versicherungsvergleich.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AGB;