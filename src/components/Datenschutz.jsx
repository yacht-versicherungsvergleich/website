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
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-700 mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
              mit denen Sie persönlich identifiziert werden können.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Datenerfassung auf unserer Website</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p className="text-gray-700 mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Wie erfassen wir Ihre Daten?</h3>
            <p className="text-gray-700 mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="text-gray-700 mb-6">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
              Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Verwendung der Daten</h2>
            <p className="text-gray-700 mb-4">
              Wir verwenden Ihre Daten für folgende Zwecke:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Vermittlung von Versicherungsangeboten</li>
              <li>Kontaktaufnahme durch Versicherungsanbieter</li>
              <li>Verbesserung unserer Dienstleistungen</li>
              <li>Einhaltung gesetzlicher Verpflichtungen</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>unentgeltlich Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>Einschränkung der Datenverarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner 
              keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
              effektiver und sicherer zu machen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. SSL-Verschlüsselung</h2>
            <p className="text-gray-700 mb-6">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
              eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
              des Browsers von "http://" auf "https://" wechselt.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Kontakt zum Datenschutzbeauftragten</h3>
              <p className="text-gray-700">
                Bei Fragen zum Datenschutz erreichen Sie uns unter:<br />
                E-Mail: datenschutz@yacht-versicherungsvergleich.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Datenschutz;