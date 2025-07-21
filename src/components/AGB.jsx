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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
            <p className="text-gray-700 mb-6">
              Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung des Vergleichsportals für Yachtversicherungen auf dieser Website. Es wird ausdrücklich darauf hingewiesen, dass der Betreiber dieser Seite nicht als Versicherungsmakler tätig ist.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 2 Tippgeberfunktion</h2>
            <p className="text-gray-700 mb-6">
              Der Betreiber dieser Website tritt ausschließlich als Tippgeber auf. Die Versicherungsverträge kommen ausschließlich zwischen dem Nutzer und dem jeweiligen Versicherungsunternehmen zustande.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 3 Leistungen</h2>
            <p className="text-gray-700 mb-6">
              Die Website bietet eine Übersicht über mögliche Versicherungsangebote für Yachten. Die eingegebenen Daten der Nutzer werden an Kooperationspartner (Versicherungsunternehmen) zur Erstellung von Angeboten weitergeleitet.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 4 Vergütung</h2>
            <p className="text-gray-700 mb-6">
              Für die erfolgreiche Weiterleitung von Anfragen an Versicherer erhält der Betreiber dieser Website gegebenenfalls eine Tippgebervergütung. Diese hat keinen Einfluss auf die Darstellung oder Auswahl der Angebote.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 5 Haftung</h2>
            <p className="text-gray-700 mb-6">
              Der Betreiber übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen. Die Nutzung der Website und der darauf basierenden Empfehlungen erfolgt auf eigene Verantwortung. Eine Haftung für Vermögensschäden ist – soweit gesetzlich zulässig – ausgeschlossen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 6 Datenschutz</h2>
            <p className="text-gray-700 mb-6">
              Die Verarbeitung personenbezogener Daten erfolgt gemäß der gesonderten Datenschutzerklärung dieser Website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">§ 7 Schlussbestimmungen</h2>
            <p className="text-gray-700 mb-6">
              Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
              <p className="text-gray-700">
                Tobias Stegmann<br />
                Am Eisenhammer 6, 63857 Waldaschaff<br />
                E-Mail: <a href="mailto:admin@yacht-versicherungsvergleich.de">admin@yacht-versicherungsvergleich.de</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AGB;
