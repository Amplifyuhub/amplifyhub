import { useNavigate } from 'react-router-dom';
import { Building, Users, BarChart2, Settings, LogOut, Bell, PlusCircle, Calendar, Clock, Search, Filter, ChevronDown, ArrowRight } from 'lucide-react';
import logoImage from '../assets/logo.png';

const CampanhasAnunciante = () => {
  const navigate = useNavigate();
  
  // Funções de navegação
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-anunciante');
  const goToInfluenciadores = () => navigate('/influenciadores-anunciante');
  const goToCampanhas = () => navigate('/campanhas-anunciante');

  // Dados fictícios para campanhas
  const campanhas = [
    {
      id: 1,
      nome: 'Lançamento Produto Verão',
      status: 'Em andamento',
      dataInicio: '10/09/2023',
      dataFim: '30/12/2023',
      progresso: 65,
      influenciadores: 5,
      alcance: '25.3K',
      engajamento: '4.2K',
      orcamento: 'R$ 5.000,00',
      imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80'
    },
    {
      id: 2,
      nome: 'Promoção Semanal de Produtos',
      status: 'Em andamento',
      dataInicio: '15/08/2023',
      dataFim: '15/01/2024',
      progresso: 30,
      influenciadores: 3,
      alcance: '12.8K',
      engajamento: '2.5K',
      orcamento: 'R$ 3.000,00',
      imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      nome: 'Black Friday 2023',
      status: 'Planejada',
      dataInicio: '15/11/2023',
      dataFim: '30/11/2023',
      progresso: 0,
      influenciadores: 8,
      alcance: '0',
      engajamento: '0',
      orcamento: 'R$ 8.000,00',
      imagem: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      nome: 'Campanha de Natal',
      status: 'Planejada',
      dataInicio: '01/12/2023',
      dataFim: '25/12/2023',
      progresso: 0,
      influenciadores: 6,
      alcance: '0',
      engajamento: '0',
      orcamento: 'R$ 7.500,00',
      imagem: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      nome: 'Linha de Produto Eco-friendly',
      status: 'Concluída',
      dataInicio: '05/05/2023',
      dataFim: '05/08/2023',
      progresso: 100,
      influenciadores: 4,
      alcance: '18.5K',
      engajamento: '3.2K',
      orcamento: 'R$ 4.500,00',
      imagem: 'https://images.unsplash.com/photo-1610024062303-e355e98a7daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
  ];

  // Função para mostrar a cor correta com base no status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Em andamento':
        return 'bg-green-100 text-green-800';
      case 'Planejada':
        return 'bg-blue-100 text-blue-800';
      case 'Concluída':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-orange-100 text-orange-800';
    }
  };

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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-500 text-left"
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
            <h1 className="text-2xl font-bold text-gray-900">Campanhas</h1>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar campanhas" 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filtrar</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <PlusCircle className="h-5 w-5" />
                Nova Campanha
              </button>
            </div>
          </div>
          
          {/* Filtro por status */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                Todas
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Em andamento
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Planejadas
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Concluídas
              </button>
            </div>
          </div>
          
          {/* Lista de Campanhas */}
          <div className="space-y-6">
            {campanhas.map(campanha => (
              <div key={campanha.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 md:h-auto">
                    <img 
                      src={campanha.imagem} 
                      alt={campanha.nome} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-bold text-gray-900">{campanha.nome}</h2>
                          <span className={`${getStatusColor(campanha.status)} text-xs font-medium px-2.5 py-0.5 rounded`}>
                            {campanha.status}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{campanha.dataInicio} - {campanha.dataFim}</span>
                        </div>
                      </div>
                      <button className="text-orange-500 hover:text-orange-600 p-1">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                    
                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">Progresso</span>
                        <span className="text-sm text-gray-600">{campanha.progresso}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{ width: `${campanha.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-gray-500">Influenciadores</p>
                        <p className="text-lg font-semibold text-gray-900">{campanha.influenciadores}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Alcance</p>
                        <p className="text-lg font-semibold text-gray-900">{campanha.alcance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Engajamento</p>
                        <p className="text-lg font-semibold text-gray-900">{campanha.engajamento}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Orçamento</p>
                        <p className="text-lg font-semibold text-gray-900">{campanha.orcamento}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Paginação */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-1">
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                Anterior
              </button>
              <button className="px-3 py-1 rounded-md bg-orange-500 text-white">1</button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                Próximo
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampanhasAnunciante; 