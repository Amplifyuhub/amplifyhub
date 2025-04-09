import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { databaseService } from '../services/database.service';

interface CadastroInfluenciadorProps {
  campanhaId?: string;
}

const CadastroInfluenciador: React.FC<CadastroInfluenciadorProps> = ({ campanhaId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nichos, setNichos] = useState<string[]>([]);
  const [nichoInput, setNichoInput] = useState('');
  const [instagram, setInstagram] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  // Categorias disponíveis
  const categorias = [
    'Moda e Estilo',
    'Beleza e Cosméticos',
    'Lifestyle',
    'Gastronomia e Culinária',
    'Fitness e Saúde',
    'Tecnologia e Games',
    'Viagens e Turismo',
    'Educação e Carreira',
    'Finanças Pessoais',
    'Maternidade e Família',
    'Pets e Animais',
    'Decoração e Casa',
    'Arte e Cultura',
    'Música e Entretenimento',
    'Esportes',
    'Sustentabilidade',
    'Humor e Comédia',
    'Negócios e Empreendedorismo',
    'Bem-estar e Mindfulness',
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    try {
      // Validações básicas
      if (!nome || !email || !senha || !categoria || nichos.length === 0) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }
      
      if (senha !== confirmacaoSenha) {
        throw new Error('As senhas não coincidem.');
      }

      // Criar usuário no Supabase
      const userData = {
        name: nome,
        email,
        password: senha,
        user_type: 'influenciador' as const,
        category: categoria,
        niches: nichos,
        instagram: instagram,
        phone: telefone
      };

      const user = await databaseService.createUser(userData);
      
      // Se tiver ID da campanha, já faz a inscrição
      if (campanhaId && user) {
        await databaseService.enrollInCampaign(campanhaId, user.id);
      }
      
      const state = { 
        userType: 'influenciador',
        returnTo: location.state?.returnTo || (campanhaId ? `/campanha/${campanhaId}` : '/painel-influenciador')
      };
      
      console.log('Navigating to confirmation with state:', state);
      
      // Sempre redirecionar para a página de confirmação primeiro
      navigate('/confirmacao-cadastro', { state });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setErro(error instanceof Error ? error.message : 'Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
    } finally {
      setLoading(false);
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
            disabled={loading}
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
            disabled={loading}
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
              required
              disabled={loading}
            />
          </div>
          
          <div>
            <label htmlFor="confirmacaoSenha" className="block text-sm font-medium text-gray-700 mb-1">
              Confirme a Senha *
            </label>
            <input
              id="confirmacaoSenha"
              type="password"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="********"
              required
              disabled={loading}
            />
          </div>
        </div>

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
            disabled={loading}
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nichos de Atuação *
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={nichoInput}
              onChange={(e) => setNichoInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), adicionarNicho())}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Digite um nicho e pressione Enter"
              disabled={loading}
            />
            <button
              type="button"
              onClick={adicionarNicho}
              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              disabled={loading}
            >
              Adicionar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {nichos.map((nicho, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex items-center gap-2"
              >
                {nicho}
                <button
                  type="button"
                  onClick={() => removerNicho(index)}
                  className="hover:text-orange-900"
                  disabled={loading}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
              Instagram
            </label>
            <input
              id="instagram"
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="@seuinstagram"
              disabled={loading}
            />
          </div>
          
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="(00) 00000-0000"
              disabled={loading}
            />
          </div>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className={`w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar e Começar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroInfluenciador; 