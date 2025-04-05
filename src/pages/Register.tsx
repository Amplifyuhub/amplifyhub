import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import CadastroInfluenciador from '../pages/CadastroInfluenciador';
import CadastroAnunciante from '../pages/CadastroAnunciante';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tipoUsuario, setTipoUsuario] = useState<'influenciador' | 'anunciante'>('influenciador');
  
  // Extrair campanhaId da query da URL, se disponível
  const queryParams = new URLSearchParams(location.search);
  const campanhaId = queryParams.get('campanha') || undefined;

  const goToHome = () => navigate('/');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-light">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-8">
          <button 
            onClick={goToHome}
            className="flex items-center text-gray-600 hover:text-orange-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para home
          </button>
          <img 
            src={logoImage} 
            alt="Amplify" 
            className="h-8"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Junte-se à Amplify</h1>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setTipoUsuario('influenciador')}
                className={`py-3 rounded-lg text-center font-medium ${
                  tipoUsuario === 'influenciador'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sou Influenciador
              </button>
              <button
                onClick={() => setTipoUsuario('anunciante')}
                className={`py-3 rounded-lg text-center font-medium ${
                  tipoUsuario === 'anunciante'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sou Anunciante
              </button>
            </div>
            
            {tipoUsuario === 'influenciador' && (
              <CadastroInfluenciador campanhaId={campanhaId} />
            )}
            
            {tipoUsuario === 'anunciante' && (
              <CadastroAnunciante />
            )}

            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-gray-600">
                Já tem uma conta?{' '}
                <Link to="/login" className="text-orange-500 hover:underline font-medium">
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 