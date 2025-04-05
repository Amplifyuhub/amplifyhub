import { useNavigate } from 'react-router-dom';
import { Building, Users, BarChart2, Settings, LogOut, Bell, Search, Filter, ChevronDown } from 'lucide-react';
import logoImage from '../assets/logo.png';

const InfluenciadoresAnunciante = () => {
  const navigate = useNavigate();
  
  // Funções de navegação
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-anunciante');
  const goToInfluenciadores = () => navigate('/influenciadores-anunciante');
  const goToCampanhas = () => navigate('/campanhas-anunciante');

  // Dados fictícios de influenciadores para demonstração
  const influenciadores = [
    {
      id: 1,
      nome: 'Ana Silva',
      categoria: 'Moda e Estilo',
      seguidores: '12.5K',
      engajamento: '4.2%',
      nicho: ['Moda Sustentável', 'Estilo Casual'],
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      nome: 'Carlos Santos',
      categoria: 'Gastronomia',
      seguidores: '8.3K',
      engajamento: '5.6%',
      nicho: ['Receitas Veganas', 'Comida Saudável'],
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      nome: 'Marina Costa',
      categoria: 'Fitness',
      seguidores: '25.7K',
      engajamento: '3.8%',
      nicho: ['Treino em Casa', 'Nutrição Esportiva'],
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      nome: 'Roberto Alves',
      categoria: 'Tecnologia',
      seguidores: '18.2K',
      engajamento: '3.2%',
      nicho: ['Gadgets', 'Reviews de Produtos'],
      image: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    {
      id: 5,
      nome: 'Camila Mendes',
      categoria: 'Beleza',
      seguidores: '32.9K',
      engajamento: '4.7%',
      nicho: ['Maquiagem', 'Cuidados com a Pele'],
      image: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
      id: 6,
      nome: 'Lucas Oliveira',
      categoria: 'Viagem',
      seguidores: '22.4K',
      engajamento: '5.1%',
      nicho: ['Destinos Nacionais', 'Dicas de Viagem'],
      image: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
  ];

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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-500 text-left"
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
            <h1 className="text-2xl font-bold text-gray-900">Influenciadores</h1>
            <div className="relative">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar influenciadores" 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  <span>Filtrar</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Categorias de Influenciadores */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                Todos
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Moda
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Gastronomia
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Fitness
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Beleza
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Viagem
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50">
                Tecnologia
              </button>
            </div>
          </div>
          
          {/* Grid de Influenciadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {influenciadores.map(influenciador => (
              <div key={influenciador.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={influenciador.image} 
                      alt={influenciador.nome} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{influenciador.nome}</h3>
                      <p className="text-sm text-gray-500">{influenciador.categoria}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Seguidores</p>
                      <p className="text-xl font-bold text-gray-900">{influenciador.seguidores}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Engajamento</p>
                      <p className="text-xl font-bold text-gray-900">{influenciador.engajamento}</p>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <p className="text-sm text-gray-500 mb-2">Nichos</p>
                    <div className="flex flex-wrap gap-2">
                      {influenciador.nicho.map((nicho, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                        >
                          {nicho}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Convidar
                    </button>
                    <button className="flex-1 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Ver perfil
                    </button>
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
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
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

export default InfluenciadoresAnunciante; 