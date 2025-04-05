import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Users, BarChart2, Settings, LogOut, Bell, Award, Filter, Search } from 'lucide-react';
import logoImage from '../assets/logo.png';

const ParceiriasInfluenciador = () => {
  const navigate = useNavigate();
  
  // Funções de navegação
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-influenciador');
  const goToParcerias = () => navigate('/parcerias-influenciador');
  const goToDesempenho = () => navigate('/desempenho-influenciador');

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
                  className="h-8"
                />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                  U
                </div>
                <span className="text-gray-800 font-medium">Influenciador</span>
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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
                >
                  <Award className="h-5 w-5" />
                  <span className="font-medium">Dashboard</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={goToParcerias}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-500 text-left"
                >
                  <Users className="h-5 w-5" />
                  <span>Parcerias</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={goToDesempenho}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
                >
                  <BarChart2 className="h-5 w-5" />
                  <span>Desempenho</span>
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
            <h1 className="text-2xl font-bold text-gray-900">Minhas Parcerias</h1>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar parceria..."
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                Filtrar
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="border-b-2 border-orange-500 py-4 px-1 text-sm font-medium text-orange-500">
                Ativas (3)
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Pendentes (2)
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Concluídas (8)
              </button>
            </nav>
          </div>
          
          {/* Partnerships List */}
          <div className="space-y-4">
            {/* Partnership Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Café Especial Gourmet</h3>
                    <p className="text-gray-500 text-sm">Campanha: Lançamento de Produto</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Em andamento
                      </span>
                      <span className="text-sm text-gray-500">
                        Até 30/12/2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">R$ 650,00</div>
                  <div className="text-sm text-gray-500">2 entregas</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-sm text-gray-500">Progresso:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '50%' }}></div>
                    </div>
                    <span className="text-sm text-gray-700">50%</span>
                  </div>
                </div>
                <Link 
                  to="#" 
                  className="text-orange-500 font-medium hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Partnership Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Restaurante Sabor & Arte</h3>
                    <p className="text-gray-500 text-sm">Campanha: Novo cardápio sazonal</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Em andamento
                      </span>
                      <span className="text-sm text-gray-500">
                        Até 15/01/2025
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">R$ 850,00</div>
                  <div className="text-sm text-gray-500">3 entregas</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-sm text-gray-500">Progresso:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '33%' }}></div>
                    </div>
                    <span className="text-sm text-gray-700">33%</span>
                  </div>
                </div>
                <Link 
                  to="#" 
                  className="text-orange-500 font-medium hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
            
            {/* Partnership Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Loja de Roupas Estilo</h3>
                    <p className="text-gray-500 text-sm">Campanha: Coleção de Verão</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Em andamento
                      </span>
                      <span className="text-sm text-gray-500">
                        Até 10/12/2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">R$ 450,00</div>
                  <div className="text-sm text-gray-500">1 entrega</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="text-sm text-gray-500">Progresso:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-sm text-gray-700">75%</span>
                  </div>
                </div>
                <Link 
                  to="#" 
                  className="text-orange-500 font-medium hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParceiriasInfluenciador; 