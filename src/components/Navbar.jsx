import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = ({ logoUrl, appName }) => {
  const handleLogin = () => {
    window.location.href = 'https://app.yacht-versicherungsvergleich.de/auth/login';
  };

  const handleSignup = () => {
    window.location.href = 'https://app.yacht-versicherungsvergleich.de/auth/signup';
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div className="flex justify-between items-center h-16">
	  <div className="flex items-center space-x-3">
	    <img src={logoUrl} alt={`${appName} Logo`} className="h-10 w-auto" />
	    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hidden sm:inline">
	      {appName}
	    </span>
	  </div>
	  <div className="flex items-center space-x-4">
	    <div className="hidden md:flex items-center space-x-8 mr-4">
	      <a href="#vorteile" className="text-gray-700 hover:text-blue-600 transition-colors">Vorteile</a>
	      <a href="#anbieter" className="text-gray-700 hover:text-blue-600 transition-colors">Anbieter</a>
	      <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
	    </div>
	    <Button
	      onClick={handleLogin}
	      variant="outline"
	      size="sm"
	      className="border-blue-600 text-blue-600 hover:bg-blue-50"
	    >
	      Anmelden
	    </Button>
	    <Button
	      onClick={handleSignup}
	      size="sm"
	      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
	    >
	      Registrieren
	    </Button>
	  </div>
	</div>
      </div>
    </nav>
  );
};

export default Navbar;
