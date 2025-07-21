import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Datenschutz = ({ onBack }) => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Verantwortlicher</h2>
            <p className="text-gray-700 mb-6">
              Tobias Stegmann<br />
              Am Eisenhammer 6<br />
              63857 Waldaschaff<br />
              E-Mail: <a href="mailto:admin@yacht-versicherungsvergleich.de">admin@yacht-versicherungsvergleich.de</a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Welche Daten werden erfasst?</h2>
            <p className="text-gray-700 mb-6">
              Beim Absenden einer Anfrage über das Vergleichsformular werden personenbezogene Daten wie Name, E-Mail, Telefonnummer sowie Boots- und Versicherungsdaten erhoben. Zusätzlich werden technische Daten (z. B. IP-Adresse, Browser, Betriebssystem) durch unseren Hostinganbieter Hostinger verarbeitet.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Zweck der Verarbeitung</h2>
            <p className="text-gray-700 mb-6">
              Die Daten werden verwendet, um passende Versicherungsangebote durch unsere Kooperationspartner bereitzustellen. Eine darüber hinausgehende Nutzung erfolgt nicht.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Weitergabe an Dritte</h2>
            <p className="text-gray-700 mb-6">
              Die im Formular eingegebenen Daten werden zur Angebotserstellung an kooperierende Versicherungen weitergeleitet. Eine vollständige Liste der Empfänger kann auf Anfrage zur Verfügung gestellt werden.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Hosting und IT-Sicherheit</h2>
            <p className="text-gray-700 mb-6">
              Diese Website wird von Hostinger (Serverstandort: EU) gehostet. Es besteht ein Vertrag zur Auftragsverarbeitung gem. Art. 28 DSGVO. Die Seite nutzt SSL-Verschlüsselung zur sicheren Datenübertragung.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Rechtsgrundlage</h2>
            <p className="text-gray-700 mb-6">
              Die Verarbeitung der personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b (Vertragsanbahnung) und lit. f (berechtigtes Interesse) DSGVO.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Ihre Rechte</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Cookies & Analyse</h2>
            <p className="text-gray-700 mb-6">
              Derzeit werden keine Tracking- oder Analyse-Dienste eingesetzt. Es werden lediglich technisch notwendige Cookies verwendet.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Speicherdauer</h2>
            <p className="text-gray-700 mb-6">
              Ihre Daten werden nur solange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Kontakt zum Datenschutz</h3>
              <p className="text-gray-700">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br />
                E-Mail: <a href="mailto:admin@yacht-versicherungsvergleich.de">admin@yacht-versicherungsvergleich.de</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Datenschutz;
