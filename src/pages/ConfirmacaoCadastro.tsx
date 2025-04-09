import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import bannerCadastro from '../assets/Banner-cadastro.jpg';

const ConfirmacaoCadastro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = location.state?.userType || 'influenciador';
  const returnTo = location.state?.returnTo;

  console.log('Location state:', location.state);
  console.log('User type:', userType);
  console.log('Return to:', returnTo);

  const handleIrParaLogin = () => {
    if (returnTo) {
      navigate(returnTo);
    } else {
      navigate(userType === 'influenciador' ? '/login-influenciador' : '/login-anunciante');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48">
          <img
            src={bannerCadastro}
            alt="Banner de confirmação"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-full p-3">
              <Check className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cadastro realizado com sucesso!
          </h2>
          <p className="text-gray-600 mb-8">
            Parabéns! Seu cadastro foi concluído. {returnTo ? 'Você será redirecionado para sua área.' : 'Agora você pode fazer login e começar a usar a plataforma.'}
          </p>
          <button
            onClick={handleIrParaLogin}
            className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
          >
            {returnTo ? 'Continuar' : 'Ir para o Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacaoCadastro; 