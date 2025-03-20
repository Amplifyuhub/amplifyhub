import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CadastroInfluenciadorProps {
  campanhaId?: string;  // ID opcional da campanha, se o cadastro vier de uma campanha específica
}

const CadastroInfluenciador: React.FC<CadastroInfluenciadorProps> = ({ campanhaId }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nichos, setNichos] = useState<string[]>([]);
  const [nichoInput, setNichoInput] = useState('');
  const [seguidores, setSeguidores] = useState('');
  const [erro, setErro] = useState('');

  // Categorias disponíveis
  const categorias = [
    'Moda e Estilo',
    'Gastronomia',
    'Fitness',
    'Tecnologia',
    'Beleza',
    'Viagem',
    'Jogos',
    'Educação',
    'Finanças',
    'Outros'
  ];

  // Adicionar um nicho à lista
  const adicionarNicho = () => {
    if (nichoInput.trim() && !nichos.includes(nichoInput.trim())) {
      setNichos([...nichos, nichoInput.trim()]);
      setNichoInput('');
    }
  };

  // Remover um nicho da lista
  const removerNicho = (index: number) => {
    setNichos(nichos.filter((_, i) => i !== index));
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações básicas
    if (!nome || !email || !senha || !categoria || nichos.length === 0) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    if (senha !== confirmacaoSenha) {
      setErro('As senhas não coincidem.');
      return;
    }
    
    // Criar objeto do influenciador
    const novoInfluenciador = {
      id: Date.now(), // ID temporário, em uma aplicação real seria gerado pelo backend
      nome,
      categoria,
      nicho: nichos,
      seguidores: seguidores || '0',
      engajamento: '0%', // Valor inicial
      image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 99)}.jpg` // Imagem aleatória para demonstração
    };
    
    // Salvar no localStorage (em uma aplicação real seria enviado para uma API)
    try {
      const influenciadoresRegistrados = localStorage.getItem('influenciadores_registrados');
      let influenciadores = [];
      
      if (influenciadoresRegistrados) {
        influenciadores = JSON.parse(influenciadoresRegistrados);
      }
      
      influenciadores.push(novoInfluenciador);
      localStorage.setItem('influenciadores_registrados', JSON.stringify(influenciadores));
      
      // Também salvamos o estado de login
      localStorage.setItem('influenciador_logado', 'true');
      
      // Redirecionamento
      if (campanhaId) {
        navigate(`/campanha/${campanhaId}`);
      } else {
        navigate('/painel-influenciador');
      }
    } catch (error) {
      console.error('Erro ao salvar influenciador:', error);
      setErro('Ocorreu um erro ao salvar os dados. Por favor, tente novamente.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cadastro de Influenciador</h2>
      
      {erro && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {erro}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome Completo *
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Seu nome completo"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="seu.email@exemplo.com"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
              Senha *
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="********"
              minLength={6}
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmacao-senha" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha *
            </label>
            <input
              id="confirmacao-senha"
              type="password"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="********"
              minLength={6}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
              Categoria Principal *
            </label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="seguidores" className="block text-sm font-medium text-gray-700 mb-1">
              Total de Seguidores
            </label>
            <input
              id="seguidores"
              type="text"
              value={seguidores}
              onChange={(e) => setSeguidores(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Ex: 10K"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="nichos" className="block text-sm font-medium text-gray-700 mb-1">
            Nichos de Atuação *
          </label>
          <div className="flex items-center gap-2">
            <input
              id="nichos"
              type="text"
              value={nichoInput}
              onChange={(e) => setNichoInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Adicione um nicho"
            />
            <button
              type="button"
              onClick={adicionarNicho}
              className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Adicionar
            </button>
          </div>
          
          {nichos.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {nichos.map((nicho, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm flex items-center"
                >
                  {nicho}
                  <button
                    type="button"
                    onClick={() => removerNicho(index)}
                    className="ml-2 text-orange-500 hover:text-orange-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}
          {nichos.length === 0 && (
            <p className="text-sm text-gray-500 mt-2">
              Adicione pelo menos um nicho de atuação
            </p>
          )}
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Cadastrar e Começar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroInfluenciador; 