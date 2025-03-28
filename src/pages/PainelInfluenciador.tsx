import { useNavigate } from 'react-router-dom';
import { Award, Users, BarChart2, LogOut, Bell, User, MapPin, Instagram, Phone, Mail, Calendar, Edit, AlertCircle } from 'lucide-react';
import logoImage from '../assets/logo.png'; // Importação consistente do logo
import { useState, useEffect } from 'react';

const PainelInfluenciador = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  
  // Mock dos dados do influenciador (posteriormente virá da API)
  const [influencerData, setInfluencerData] = useState({
    nome: "Maria Silva",
    foto: "https://placeholder.com/150",
    cidade: "São Paulo, SP",
    instagram: "@maria.influencer",
    telefone: "(11) 98765-4321",
    email: "maria@email.com",
    cpf: "123.456.789-00",
    dataNascimento: "15/03/1995",
    idade: "28 anos",
    categoria: "Moda e Lifestyle",
    seguidores: "50K",
    engajamentoMedio: "5.2%",
    biografia: "Criadora de conteúdo apaixonada por moda, lifestyle e viagens. Compartilho dicas e experiências para inspirar pessoas."
  });

  // Função para calcular a completude do perfil
  const calculateProfileCompletion = () => {
    const requiredFields = [
      { key: 'nome', label: 'Nome' },
      { key: 'foto', label: 'Foto' },
      { key: 'cidade', label: 'Cidade' },
      { key: 'instagram', label: 'Instagram' },
      { key: 'telefone', label: 'Telefone' },
      { key: 'email', label: 'E-mail' },
      { key: 'cpf', label: 'CPF' },
      { key: 'dataNascimento', label: 'Data de Nascimento' },
      { key: 'idade', label: 'Idade' },
      { key: 'categoria', label: 'Categoria' },
      { key: 'seguidores', label: 'Seguidores' },
      { key: 'engajamentoMedio', label: 'Taxa de Engajamento' },
      { key: 'biografia', label: 'Biografia' }
    ];

    const missing = requiredFields.filter(field => 
      !influencerData[field.key as keyof typeof influencerData] || 
      influencerData[field.key as keyof typeof influencerData].trim() === ''
    ).map(field => field.label);

    setMissingFields(missing);
    const completed = requiredFields.length - missing.length;
    const percentage = (completed / requiredFields.length) * 100;
    setCompletionPercentage(percentage);
  };

  useEffect(() => {
    calculateProfileCompletion();
  }, [influencerData]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Aqui você implementaria a lógica para salvar as alterações na API
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfluencerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Funções de navegação para cada rota
  const goToHome = () => navigate('/');
  const goToDashboard = () => navigate('/painel-influenciador');
  const goToParcerias = () => navigate('/parcerias-influenciador');
  
  // Função de navegação para Desempenho - usando apenas navigate()
  const goToDesempenho = () => {
    console.log('Navegando para desempenho do influenciador');
    navigate('/desempenho-influenciador');
  };
  
  const getCompletionColor = () => {
    if (completionPercentage >= 100) return 'text-green-500';
    if (completionPercentage >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProgressColor = () => {
    if (completionPercentage >= 100) return '#22c55e';
    if (completionPercentage >= 70) return '#eab308';
    return '#ef4444';
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
              <li>
                <button 
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 text-left"
                >
                  <User className="h-5 w-5" />
                  <span>Meu Perfil</span>
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
          {/* Perfil do Influenciador */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Meu Perfil</h2>
              {isEditing ? (
                <div className="space-x-2">
                  <button 
                    onClick={handleSave}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Salvar
                  </button>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleEditClick}
                  className="p-2 rounded-lg bg-orange-50 text-orange-500 hover:bg-orange-100"
                >
                  <Edit className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Coluna da Esquerda - Foto e Informações Principais */}
              <div className="md:w-1/3">
                <div className="text-center mb-6 relative">
                  {/* Círculo de progresso */}
                  <div className="relative w-40 h-40 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="transition-all duration-300"
                        strokeWidth="4"
                        stroke={getProgressColor()}
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - completionPercentage / 100)}`}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                        <img 
                          src={influencerData.foto} 
                          alt={influencerData.nome}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Indicador de completude */}
                  <div className="mt-4">
                    <p className={`text-lg font-semibold ${getCompletionColor()}`}>
                      {completionPercentage.toFixed(0)}% completo
                    </p>
                    {missingFields.length > 0 && (
                      <div className="mt-2 p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 text-orange-700 mb-2">
                          <AlertCircle className="h-5 w-5" />
                          <p className="font-medium">Campos pendentes:</p>
                        </div>
                        <ul className="text-sm text-orange-600 list-disc list-inside">
                          {missingFields.map(field => (
                            <li key={field}>{field}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {isEditing ? (
                    <input
                      type="text"
                      name="nome"
                      value={influencerData.nome}
                      onChange={handleInputChange}
                      className="text-xl font-semibold text-gray-900 text-center w-full border rounded-lg p-2 mb-2"
                    />
                  ) : (
                    <h3 className="text-xl font-semibold text-gray-900">{influencerData.nome}</h3>
                  )}
                  {isEditing ? (
                    <input
                      type="text"
                      name="categoria"
                      value={influencerData.categoria}
                      onChange={handleInputChange}
                      className="text-gray-600 text-center w-full border rounded-lg p-2"
                    />
                  ) : (
                    <p className="text-gray-600">{influencerData.categoria}</p>
                  )}
                </div>

                <div className="space-y-4">
                  {[
                    { icon: MapPin, name: 'cidade', value: influencerData.cidade },
                    { icon: Instagram, name: 'instagram', value: influencerData.instagram },
                    { icon: Phone, name: 'telefone', value: influencerData.telefone },
                    { icon: Mail, name: 'email', value: influencerData.email }
                  ].map(({ icon: Icon, name, value }) => (
                    <div key={name} className="flex items-center gap-3 text-gray-600">
                      <Icon className="h-5 w-5" />
                      {isEditing ? (
                        <input
                          type="text"
                          name={name}
                          value={value}
                          onChange={handleInputChange}
                          className="flex-1 border rounded-lg p-2"
                        />
                      ) : (
                        <span>{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna da Direita - Dados Pessoais e Métricas */}
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Dados Pessoais</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'CPF', name: 'cpf', value: influencerData.cpf },
                        { label: 'Data de Nascimento', name: 'dataNascimento', value: influencerData.dataNascimento },
                        { label: 'Idade', name: 'idade', value: influencerData.idade }
                      ].map(({ label, name, value }) => (
                        <div key={name}>
                          <p className="text-sm text-gray-500">{label}</p>
                          {isEditing ? (
                            <input
                              type="text"
                              name={name}
                              value={value}
                              onChange={handleInputChange}
                              className="w-full border rounded-lg p-2 text-gray-900"
                            />
                          ) : (
                            <p className="text-gray-900">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Métricas do Instagram</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'Seguidores', name: 'seguidores', value: influencerData.seguidores },
                        { label: 'Taxa de Engajamento', name: 'engajamentoMedio', value: influencerData.engajamentoMedio }
                      ].map(({ label, name, value }) => (
                        <div key={name}>
                          <p className="text-sm text-gray-500">{label}</p>
                          {isEditing ? (
                            <input
                              type="text"
                              name={name}
                              value={value}
                              onChange={handleInputChange}
                              className="w-full border rounded-lg p-2 text-gray-900"
                            />
                          ) : (
                            <p className="text-gray-900">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Biografia</h4>
                  {isEditing ? (
                    <textarea
                      name="biografia"
                      value={influencerData.biografia}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg p-2 text-gray-600 h-32"
                    />
                  ) : (
                    <p className="text-gray-600">{influencerData.biografia}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

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