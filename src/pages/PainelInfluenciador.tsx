import { useNavigate } from 'react-router-dom';
import { Award, Users, BarChart2, LogOut, Bell } from 'lucide-react';
import logoImage from '../assets/logo.png'; // Importação consistente do logo

const PainelInfluenciador = () => {
  const navigate = useNavigate();
  
  // Funções de navegação para cada rota
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-influenciador');
  const goToParcerias = () => navigate('/parcerias-influenciador');
  
  // Função de navegação para Desempenho - usando apenas navigate()
  const goToDesempenho = () => {
    console.log('Navegando para desempenho do influenciador');
    navigate('/desempenho-influenciador');
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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg bg-orange-50 text-orange-500 text-left"
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
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
                  data-testid="desempenho-btn"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Bem-vindo ao seu Dashboard</h1>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Campanhas Ativas</h3>
              <p className="text-3xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Novas Propostas</h3>
              <p className="text-3xl font-bold text-gray-900">7</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Receita do Mês</h3>
              <p className="text-3xl font-bold text-gray-900">R$ 1.256</p>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Atividades Recentes</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-medium">Nova proposta de parceria</h3>
                  <p className="text-gray-600">Café Especial quer trabalhar com você</p>
                  <p className="text-sm text-gray-500 mt-1">12 minutos atrás</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-medium">Campanha concluída com sucesso</h3>
                  <p className="text-gray-600">Restaurante Sabor Local agradeceu sua participação</p>
                  <p className="text-sm text-gray-500 mt-1">2 horas atrás</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Opportunities */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Oportunidades Recomendadas</h2>
              <a href="#" className="text-orange-500 font-medium hover:underline">Ver todas</a>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Loja de Roupas Estilo</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Novo</span>
                </div>
                <p className="text-gray-600 mt-1">Procurando influenciadores de moda para nova coleção</p>
                <div className="flex justify-between mt-4">
                  <span className="text-sm text-gray-500">Orçamento: R$ 300-500</span>
                  <a href="#" className="text-orange-500 font-medium hover:underline">Candidatar-se</a>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <h3 className="font-medium">Restaurante Sabor & Saúde</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Novo</span>
                </div>
                <p className="text-gray-600 mt-1">Buscando parceria para divulgação de novo cardápio vegetariano</p>
                <div className="flex justify-between mt-4">
                  <span className="text-sm text-gray-500">Orçamento: R$ 200-400</span>
                  <a href="#" className="text-orange-500 font-medium hover:underline">Candidatar-se</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button 
              onClick={goToDesempenho}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg"
              data-testid="direct-desempenho-btn"
            >
              Desempenho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelInfluenciador; 