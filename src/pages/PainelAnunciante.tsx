import { useNavigate } from 'react-router-dom';
import { Building, Users, BarChart2, Settings, LogOut, Bell, PlusCircle } from 'lucide-react';
import logoImage from '../assets/logo.png'; // Ajuste o caminho conforme necessário

const PainelAnunciante = () => {
  const navigate = useNavigate();
  
  // Funções de navegação
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-anunciante');
  const goToInfluenciadores = () => navigate('/influenciadores-anunciante');
  const goToCampanhas = () => navigate('/campanhas-anunciante');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={goToHome} className="text-2xl font-bold text-gray-900">
                <img 
                  src={logoImage} 
                  alt="Amplify" 
                  className="h-8" // Ajuste a altura conforme necessário
                />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <span className="text-gray-800 font-medium">Anunciante</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Sidebar and Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={goToDashboard}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-500 text-left"
                >
                  <Building className="h-5 w-5" />
                  <span className="font-medium">Dashboard</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={goToInfluenciadores}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
                >
                  <Users className="h-5 w-5" />
                  <span>Influenciadores</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={goToCampanhas}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
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
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard do Anunciante</h1>
            <button 
              onClick={goToCampanhas}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <PlusCircle className="h-5 w-5" />
              Nova Campanha
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Campanhas Ativas</h3>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Alcance Total</h3>
              <p className="text-3xl font-bold text-gray-900">15.2K</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">ROI Médio</h3>
              <p className="text-3xl font-bold text-gray-900">3.7x</p>
            </div>
          </div>
          
          {/* Active Campaigns */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Campanhas Ativas</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Lançamento Produto Verão</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Em andamento</span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500">Progresso</span>
                    <span className="text-sm text-gray-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-sm text-gray-500">5 influenciadores participando</span>
                  <button onClick={goToCampanhas} className="text-orange-500 font-medium hover:underline">Ver detalhes</button>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Promoção Semanal de Produtos</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Em andamento</span>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500">Progresso</span>
                    <span className="text-sm text-gray-600">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-sm text-gray-500">3 influenciadores participando</span>
                  <button onClick={goToCampanhas} className="text-orange-500 font-medium hover:underline">Ver detalhes</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Top Influencers */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Influenciadores Recomendados</h2>
              <button onClick={goToInfluenciadores} className="text-orange-500 font-medium hover:underline">Ver todos</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="font-medium">Ana Silva</h3>
                    <p className="text-sm text-gray-500">Moda e Estilo • 12.5K seguidores</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition-colors text-sm font-medium">
                  Convidar
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <h3 className="font-medium">Carlos Santos</h3>
                    <p className="text-sm text-gray-500">Gastronomia • 8.3K seguidores</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition-colors text-sm font-medium">
                  Convidar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelAnunciante; 