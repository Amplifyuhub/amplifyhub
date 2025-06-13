import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, Users, BarChart2, Settings, LogOut, Bell, TrendingUp, Calendar, DollarSign, Eye, ThumbsUp, Share } from 'lucide-react';
import logoImage from '../assets/logo.png';

const DesempenhoInfluenciador = () => {
  const navigate = useNavigate();
  
  // Funções de navegação
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-influenciador');
  const goToParcerias = () => navigate('/parcerias-influenciador');
  const goToDesempenho = () => navigate('/desempenho-influenciador');

  return (
    <div className="min-h-screen bg-gray-50 w-full max-w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-sm w-full max-w-full">
        <div className="container mx-auto px-4 py-3 w-full max-w-full">
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
      <div className="container mx-auto px-2 sm:px-4 py-8 flex flex-col md:flex-row gap-8 w-full max-w-full">
        {/* Sidebar */}
        <div className="md:w-64 flex-shrink-0 w-full md:max-w-xs">
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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
                >
                  <Users className="h-5 w-5" />
                  <span>Parcerias</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={goToDesempenho}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-500 text-left"
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
        <div className="flex-1 w-full max-w-full">
          <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Análise de Desempenho</h1>
            
            <div className="flex items-center gap-3 w-full sm:w-auto flex-col sm:flex-row">
              <select className="w-full sm:w-auto px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Últimos 30 dias</option>
                <option>Últimos 90 dias</option>
                <option>Este ano</option>
                <option>Todo o período</option>
              </select>
              
              <button className="w-full sm:w-auto px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Exportar Relatório
              </button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-500">Alcance Total</h3>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">25.4K</p>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">+12.5%</span>
                <span className="text-gray-500 ml-1 hidden sm:inline">vs mês anterior</span>
                <span className="text-gray-500 ml-1 sm:hidden">vs anterior</span>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-500">Engajamento</h3>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ThumbsUp className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">3.2K</p>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">+5.8%</span>
                <span className="text-gray-500 ml-1 hidden sm:inline">vs mês anterior</span>
                <span className="text-gray-500 ml-1 sm:hidden">vs anterior</span>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-500">Campanhas</h3>
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Share className="h-5 w-5 text-orange-500" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">12</p>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">+2</span>
                <span className="text-gray-500 ml-1 hidden sm:inline">vs mês anterior</span>
                <span className="text-gray-500 ml-1 sm:hidden">vs anterior</span>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-gray-500">Receita Total</h3>
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">R$ 5.830</p>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">+18.3%</span>
                <span className="text-gray-500 ml-1 hidden sm:inline">vs mês anterior</span>
                <span className="text-gray-500 ml-1 sm:hidden">vs anterior</span>
              </div>
            </div>
          </div>
          
          {/* Performance Graph */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold text-gray-900">Alcance por Campanha</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Alcance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Engajamento</span>
                </div>
              </div>
            </div>
            <div className="h-48 sm:h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de desempenho aqui</p>
            </div>
          </div>
          
          {/* Campaign Performance Table */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Desempenho por Campanha</h2>
            <div className="overflow-x-auto w-full">
              <table className="min-w-full divide-y divide-gray-200 w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campanha
                    </th>
                    <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Anunciante
                    </th>
                    <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Período
                    </th>
                    <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alcance
                    </th>
                    <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Engajamento
                    </th>
                    <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receita
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">Lançamento de Produto</div>
                      <div className="text-sm text-gray-500 sm:hidden">Café Especial Gourmet</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-gray-700">Café Especial Gourmet</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700">10/09 - 30/12</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700">8.5K</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-gray-700">1.2K</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">R$ 650,00</div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">Novo Cardápio Sazonal</div>
                      <div className="text-sm text-gray-500 sm:hidden">Restaurante Sabor & Arte</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-gray-700">Restaurante Sabor & Arte</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700">15/08 - 15/01</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700">10.2K</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-gray-700">1.8K</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">R$ 850,00</div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">Coleção de Verão</div>
                      <div className="text-sm text-gray-500 sm:hidden">Loja de Roupas Estilo</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-gray-700">Loja de Roupas Estilo</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700">01/10 - 10/12</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-700">6.7K</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                      <div className="text-gray-700">920</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">R$ 450,00</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesempenhoInfluenciador; 