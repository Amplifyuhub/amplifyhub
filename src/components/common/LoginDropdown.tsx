import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Building2 } from 'lucide-react';

interface LoginDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDropdown: React.FC<LoginDropdownProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-4 top-20 bg-white rounded-xl shadow-xl p-4 w-64 z-50"
    >
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Escolha seu perfil</h3>
        
        <Link 
          to="/login/influenciador"
          className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors w-full text-left"
        >
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <User size={20} className="text-orange-500" />
          </div>
          <div>
            <div className="font-medium">Influenciador</div>
            <div className="text-xs text-gray-500">Acesse suas parcerias</div>
          </div>
        </Link>
        
        <Link 
          to="/login/anunciante"
          className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors w-full text-left"
        >
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <Building2 size={20} className="text-orange-500" />
          </div>
          <div>
            <div className="font-medium">Anunciante</div>
            <div className="text-xs text-gray-500">Gerencie campanhas</div>
          </div>
        </Link>
        
        <div className="pt-2 mt-2 border-t text-center">
          <Link to="/cadastro" className="text-sm text-orange-500 hover:underline">
            Criar uma conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginDropdown;