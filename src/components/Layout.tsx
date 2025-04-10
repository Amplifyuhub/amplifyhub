import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import LoginDropdown from './LoginDropdown';
import logoImage from '../assets/logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  return (
    <>
      {/* Barra de navegação com login */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative">
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/">
            <img 
              src={logoImage} 
              alt="Amplify" 
              className="h-8"
            />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-orange-500 font-medium">
            Página Inicial
          </Link>
          <Link to="/sobre" className="text-gray-800 hover:text-orange-500 font-medium">
            Sobre Nós
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
              className="text-gray-800 hover:text-orange-500 font-medium flex items-center"
            >
              Serviços/Produtos
              <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 py-2">
                <Link
                  to="/campanhas"
                  className="block px-4 py-2 hover:bg-orange-50 text-sm text-gray-800"
                >
                  Campanhas
                </Link>
                <Link
                  to="/influenciadores"
                  className="block px-4 py-2 hover:bg-orange-50 text-sm text-gray-800"
                >
                  Influenciadores
                </Link>
              </div>
            )}
          </div>
          <Link to="/contato" className="text-gray-800 hover:text-orange-500 font-medium">
            Contato
          </Link>
        </div>
        
        {/* Botão de Login (desktop) */}
        <div className="hidden md:block">
          <button 
            onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
            className="px-8 py-3 bg-white text-orange-500 rounded-full font-semibold border-2 border-orange-500 hover:bg-orange-50 transition-colors inline-flex items-center justify-center gap-2"
          >
            Login
            <ChevronDown size={16} className={`transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          <LoginDropdown 
            isOpen={isLoginDropdownOpen} 
            onClose={() => setIsLoginDropdownOpen(false)} 
          />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-50 inset-x-0 animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link 
              to="/" 
              className="py-3 px-4 hover:bg-orange-50 border-b text-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Página Inicial
            </Link>
            <Link 
              to="/sobre" 
              className="py-3 px-4 hover:bg-orange-50 border-b text-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <div className="py-3 px-4 border-b">
              <button
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                className="w-full text-left text-gray-800 flex items-center justify-between"
              >
                Serviços/Produtos
                <ChevronDown size={16} className={`transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesMenuOpen && (
                <div className="mt-2 pl-4">
                  <Link
                    to="/campanhas"
                    className="block py-2 text-gray-800 hover:text-orange-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Campanhas
                  </Link>
                  <Link
                    to="/influenciadores"
                    className="block py-2 text-gray-800 hover:text-orange-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Influenciadores
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/contato" 
              className="py-3 px-4 hover:bg-orange-50 border-b text-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="pt-3 px-4">
              <button 
                onClick={() => {
                  setIsLoginDropdownOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo da página */}
      {children}
    </>
  );
};

export default Layout; 