import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, User, Building2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Escolha seu perfil</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/login/influenciador')}
            className="flex flex-col items-center justify-center p-6 bg-white border-2 border-orange-500 rounded-xl hover:bg-orange-50 transition-colors group"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
              <User size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Influenciador</h3>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Acesse suas oportunidades de parceria
            </p>
          </button>
          
          <button 
            onClick={() => navigate('/login/anunciante')}
            className="flex flex-col items-center justify-center p-6 bg-white border-2 border-orange-500 rounded-xl hover:bg-orange-50 transition-colors group"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
              <Building2 size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Anunciante</h3>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Gerencie suas campanhas
            </p>
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          Não tem uma conta? <a href="/cadastro" className="text-orange-500 font-medium hover:underline">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 