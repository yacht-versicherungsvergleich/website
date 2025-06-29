import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ logoUrl, appName }) => {
  return (
    <footer id="kontakt" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div className="grid md:grid-cols-4 gap-8">
	  <div>
	    <div className="flex items-center space-x-3 mb-4">
	      <img src={logoUrl} alt={`${appName} Logo`} className="h-10 w-auto" />
	      <span className="text-xl font-bold">{appName}</span>
	    </div>
	    <p className="text-gray-400 text-sm">
	      Ihr unabhängiger Partner für den Vergleich von Yacht-Versicherungen.
	      Einfach, schnell und transparent.
	    </p>
	  </div>

	  <div>
	    <span className="text-lg font-semibold mb-4 block">Kontakt</span>
	    <div className="space-y-3">
	      <div className="flex items-center space-x-3">
		<Mail className="h-5 w-5 text-blue-400" />
		<span className="text-gray-300 text-sm">info@yacht-versicherungsvergleich.de</span>
	      </div>
	      <div className="flex items-center space-x-3">
		<MapPin className="h-5 w-5 text-blue-400" />
		<span className="text-gray-300 text-sm">Hamburg, Deutschland</span>
	      </div>
	    </div>
	  </div>

	  <div>
	    <span className="text-lg font-semibold mb-4 block">Schwerpunkte</span>
	    <div className="space-y-2 text-gray-300 text-sm">
	      <p>Vergleich von Yacht-Versicherungen</p>
	      <p>Angebote für Segelyachten</p>
	      <p>Angebote für Motoryachten</p>
	      <p>Optionen für Regattaschutz</p>
	      <p>Kasko & Haftpflicht</p>
	    </div>
	  </div>

	  <div>
	    <span className="text-lg font-semibold mb-4 block">Rechtliches</span>
	    <div className="flex flex-col space-y-2 text-gray-300 text-sm">
	      <button
		onClick={() => window.location.hash = '#impressum'}
		className="text-left hover:text-white transition-colors cursor-pointer"
	      >
		Impressum
	      </button>
	      <button
		onClick={() => window.location.hash = '#datenschutz'}
		className="text-left hover:text-white transition-colors cursor-pointer"
	      >
		Datenschutz
	      </button>
	      <button
		onClick={() => window.location.hash = '#agb'}
		className="text-left hover:text-white transition-colors cursor-pointer"
	      >
		AGB
	      </button>

	    </div>
	  </div>
	</div>

	<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
	  <p>&copy; {new Date().getFullYear()} {appName}. Alle Rechte vorbehalten.</p>
	</div>
      </div>
    </footer>
  );
};

export default Footer;
