import { useNavigate, useLocation } from 'react-router-dom';
import { Building, Users, BarChart2, LogOut } from 'lucide-react';

const AnuncianteSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Funções de navegação
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-anunciante');
  const goToInfluenciadores = () => navigate('/influenciadores-anunciante');
  const goToCampanhas = () => navigate('/campanhas-anunciante');
  
  // Verifica qual rota está ativa
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="md:w-64 flex-shrink-0">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <ul className="space-y-2">
          <li>
            <button 
              onClick={goToDashboard}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${
                isActive('/painel-anunciante') 
                  ? 'bg-orange-50 text-orange-500' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Building className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </button>
          </li>
          <li>
            <button 
              onClick={goToInfluenciadores}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${
                isActive('/influenciadores-anunciante') 
                  ? 'bg-orange-50 text-orange-500' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Influenciadores</span>
            </button>
          </li>
          <li>
            <button 
              onClick={goToCampanhas}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${
                isActive('/campanhas-anunciante') 
                  ? 'bg-orange-50 text-orange-500' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart2 className="h-5 w-5" />
              <span>Campanhas</span>
            </button>
          </li>
          <li className="pt-4 border-t">
            <button 
              onClick={goToHome}
              className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-500 hover:bg-red-50 text-left"
            >
              <LogOut className="h-5 w-5" />
              <span>Sair</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnuncianteSidebar; 