import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Filter, ChevronDown } from 'lucide-react';
import logoImage from '../assets/logo.png';
import ProfileCompletionMeter from '../components/ProfileCompletionMeter';

interface Influenciador {
  id: number;
  nome: string;
  categoria: string;
  seguidores: string;
  engajamento: string;
  nicho: string[];
  image: string;
  cidade: string;
  instagram: string;
  telefone: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  idade: string;
  engajamentoMedio: string;
  biografia: string;
}

const Influenciadores = () => {
  const navigate = useNavigate();
  const [influenciadores, setInfluenciadores] = useState<Influenciador[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState('Todos');

  // Simula a obtenção de dados dos influenciadores (em uma aplicação real, seria uma chamada à API)
  useEffect(() => {
    // Dados fictícios de influenciadores cadastrados
    const influenciadoresData = [
      {
        id: 1,
        nome: 'Ana Silva',
        categoria: 'Moda e Estilo',
        seguidores: '12.5K',
        engajamento: '4.2%',
        nicho: ['Moda Sustentável', 'Estilo Casual'],
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        cidade: 'São Paulo',
        instagram: '@anasilva',
        telefone: '(11) 1234-5678',
        email: 'ana@example.com',
        cpf: '123.456.789-00',
        dataNascimento: '01/01/1990',
        idade: '33 anos',
        engajamentoMedio: '4.5%',
        biografia: 'Sou uma influenciadora de moda e estilo há 10 anos.'
      },
      {
        id: 2,
        nome: 'Carlos Santos',
        categoria: 'Gastronomia',
        seguidores: '8.3K',
        engajamento: '5.6%',
        nicho: ['Receitas Veganas', 'Comida Saudável'],
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        cidade: 'Rio de Janeiro',
        instagram: '@carlossantos',
        telefone: '(21) 9876-5432',
        email: 'carlos@example.com',
        cpf: '987.654.321-00',
        dataNascimento: '15/05/1985',
        idade: '38 anos',
        engajamentoMedio: '5.2%',
        biografia: 'Sou um chef de cozinha com 15 anos de experiência.'
      },
      {
        id: 3,
        nome: 'Marina Costa',
        categoria: 'Fitness',
        seguidores: '25.7K',
        engajamento: '3.8%',
        nicho: ['Treino em Casa', 'Nutrição Esportiva'],
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        cidade: 'Belo Horizonte',
        instagram: '@marinacost',
        telefone: '(31) 8765-4321',
        email: 'marina@example.com',
        cpf: '876.543.210-00',
        dataNascimento: '20/07/1995',
        idade: '28 anos',
        engajamentoMedio: '3.9%',
        biografia: 'Sou uma personal trainer com 5 anos de experiência.'
      },
      {
        id: 4,
        nome: 'Roberto Alves',
        categoria: 'Tecnologia',
        seguidores: '18.2K',
        engajamento: '3.2%',
        nicho: ['Gadgets', 'Reviews de Produtos'],
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
        cidade: 'São Paulo',
        instagram: '@robertoalves',
        telefone: '(11) 5678-9012',
        email: 'roberto@example.com',
        cpf: '567.890.123-00',
        dataNascimento: '10/03/1980',
        idade: '43 anos',
        engajamentoMedio: '3.3%',
        biografia: 'Sou um especialista em tecnologia com 12 anos de experiência.'
      },
      {
        id: 5,
        nome: 'Camila Mendes',
        categoria: 'Beleza',
        seguidores: '32.9K',
        engajamento: '4.7%',
        nicho: ['Maquiagem', 'Cuidados com a Pele'],
        image: 'https://randomuser.me/api/portraits/women/26.jpg',
        cidade: 'Rio de Janeiro',
        instagram: '@camilamendes',
        telefone: '(21) 4567-8901',
        email: 'camila@example.com',
        cpf: '456.789.012-00',
        dataNascimento: '18/12/1992',
        idade: '31 anos',
        engajamentoMedio: '4.6%',
        biografia: 'Sou uma especialista em beleza com 8 anos de experiência.'
      },
      {
        id: 6,
        nome: 'Lucas Oliveira',
        categoria: 'Viagem',
        seguidores: '22.4K',
        engajamento: '5.1%',
        nicho: ['Destinos Nacionais', 'Dicas de Viagem'],
        image: 'https://randomuser.me/api/portraits/men/62.jpg',
        cidade: 'São Paulo',
        instagram: '@lucasoliveira',
        telefone: '(11) 3456-7890',
        email: 'lucas@example.com',
        cpf: '345.678.901-00',
        dataNascimento: '05/09/1987',
        idade: '36 anos',
        engajamentoMedio: '5.0%',
        biografia: 'Sou um viajante que adora compartilhar suas aventuras.'
      }
    ];

    // Verificar se há influenciadores registrados no localStorage
    const influenciadoresRegistrados = localStorage.getItem('influenciadores_registrados');
    if (influenciadoresRegistrados) {
      try {
        const registrados = JSON.parse(influenciadoresRegistrados);
        // Combinar os influenciadores registrados com os fictícios
        setInfluenciadores([...registrados, ...influenciadoresData]);
      } catch (error) {
        console.error('Erro ao carregar influenciadores registrados:', error);
        setInfluenciadores(influenciadoresData);
      }
    } else {
      setInfluenciadores(influenciadoresData);
    }
  }, []);

  // Filtra os influenciadores com base na busca e categoria selecionada
  const influenciadoresFiltrados = influenciadores.filter(influenciador => {
    const matchesSearch = influenciador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influenciador.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influenciador.nicho.some(n => n.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategoria = selectedCategoria === 'Todos' || 
                            influenciador.categoria.includes(selectedCategoria);
    
    return matchesSearch && matchesCategoria;
  });

  // Lista única de categorias para o filtro
  const categorias = ['Todos', ...new Set(influenciadores.map(i => i.categoria))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            onClick={() => navigate('/')} 
            className="cursor-pointer"
          >
            <img src={logoImage} alt="Amplify" className="h-8" />
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-white text-orange-500 rounded-full font-medium border-2 border-orange-500 hover:bg-orange-50 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Influenciadores</h1>
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <input 
                type="text" 
                placeholder="Buscar influenciadores" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <div className="relative">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 flex items-center gap-2 hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filtrar</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categorias */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categorias.map((categoria, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategoria === categoria 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategoria(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid de Influenciadores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {influenciadoresFiltrados.map(influenciador => (
            <div key={influenciador.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 mb-4">
                  <div className="w-20 md:w-auto">
                    <ProfileCompletionMeter
                      profileData={{
                        nome: influenciador.nome,
                        foto: influenciador.image,
                        cidade: influenciador.cidade,
                        instagram: influenciador.instagram,
                        telefone: influenciador.telefone,
                        email: influenciador.email,
                        cpf: influenciador.cpf,
                        dataNascimento: influenciador.dataNascimento,
                        idade: influenciador.idade,
                        categoria: influenciador.categoria,
                        seguidores: influenciador.seguidores,
                        engajamentoMedio: influenciador.engajamentoMedio,
                        biografia: influenciador.biografia
                      }}
                      size="sm"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-medium text-gray-900">{influenciador.nome}</h3>
                    <p className="text-sm text-gray-500">{influenciador.categoria}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Seguidores</p>
                    <p className="text-lg md:text-xl font-bold text-gray-900">{influenciador.seguidores}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Engajamento</p>
                    <p className="text-lg md:text-xl font-bold text-gray-900">{influenciador.engajamento}</p>
                  </div>
                </div>

                <div className="mb-4">
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
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <button 
                    onClick={() => navigate(`/influenciador/${influenciador.id}`)}
                    className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-base"
                  >
                    Ver perfil
                  </button>
                  <button 
                    onClick={() => navigate('/campanhas')}
                    className="flex-1 px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm md:text-base"
                  >
                    Ver campanhas
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Influenciadores; 