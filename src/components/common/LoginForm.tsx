import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Building } from 'lucide-react';
import { databaseService } from '../../services/database.service';

const LoginForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'influenciador' | 'anunciante'>('influenciador');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setLoading(true);

    try {
      // Buscar usuário pelo email
      const user = await databaseService.loginUser(email);

      // Verificar se o usuário existe e é do tipo correto
      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      if (user.user_type !== activeTab) {
        throw new Error(`Este email está cadastrado como ${user.user_type}`);
      }

      // Em uma aplicação real, aqui seria feita a validação da senha
      // Por enquanto, vamos apenas simular o login
      
      // Salvar dados do usuário na sessão
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirecionar para a página apropriada
      navigate(activeTab === 'influenciador' ? '/painel-influenciador' : '/painel-anunciante');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErro(error instanceof Error ? error.message : 'Ocorreu um erro ao fazer login. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Acesse sua conta</h2>
      
      {erro && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {erro}
        </div>
      )}
      
      {/* Tabs de seleção */}
      <div className="flex mb-8">
        <button
          className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
            activeTab === 'influenciador' 
              ? 'text-orange-500 border-b-2 border-orange-500' 
              : 'text-gray-500 hover:text-orange-400 border-b-2 border-gray-200'
          }`}
          onClick={() => setActiveTab('influenciador')}
          disabled={loading}
        >
          <User size={18} />
          Influenciador
        </button>
        <button
          className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
            activeTab === 'anunciante' 
              ? 'text-orange-500 border-b-2 border-orange-500' 
              : 'text-gray-500 hover:text-orange-400 border-b-2 border-gray-200'
          }`}
          onClick={() => setActiveTab('anunciante')}
          disabled={loading}
        >
          <Building size={18} />
          Anunciante
        </button>
      </div>
      
      {/* Formulário de login */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="seu.email@exemplo.com"
              required
              disabled={loading}
            />
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <div className="relative">
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="********"
              required
              disabled={loading}
            />
            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="lembrar"
              type="checkbox"
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              disabled={loading}
            />
            <label htmlFor="lembrar" className="ml-2 block text-sm text-gray-700">
              Lembrar de mim
            </label>
          </div>
          
          <div className="text-sm">
            <a href="#" className="text-orange-500 hover:underline">
              Esqueceu a senha?
            </a>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition duration-300 ease-in-out font-medium ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Entrando...' : `Entrar como ${activeTab === 'influenciador' ? 'Influenciador' : 'Anunciante'}`}
          </button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-600">
          Não tem uma conta ainda?{' '}
          <a href="/cadastro" className="text-orange-500 hover:underline font-medium">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm; 