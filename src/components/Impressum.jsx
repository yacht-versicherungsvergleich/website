import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Impressum = ({ onBack }) => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Betreiber der Website</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Yacht Versicherungsvergleich GmbH</p>
                    <p className="text-gray-700">Hafenstraße 123</p>
                    <p className="text-gray-700">20354 Hamburg</p>
                    <p className="text-gray-700">Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">+49 (0) 40 123 456 789</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">info@yacht-versicherungsvergleich.de</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Handelsregister</h2>
            <p className="text-gray-700 mb-6">
              Registergericht: Amtsgericht Hamburg<br />
              Registernummer: HRB 123456
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-700 mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Geschäftsführung</h2>
            <p className="text-gray-700 mb-6">
              Max Mustermann
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Aufsichtsbehörde</h2>
            <p className="text-gray-700 mb-6">
              Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)<br />
              Graurheindorfer Str. 108<br />
              53117 Bonn
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-gray-700 mb-6">
              Berufsbezeichnung: Versicherungsmakler<br />
              Zuständige Kammer: Industrie- und Handelskammer Hamburg<br />
              Verliehen durch: Deutschland
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
            <p className="text-gray-700 mb-6">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="text-gray-700 mb-6">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
              <p className="text-gray-700 text-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Impressum;