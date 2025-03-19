import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Building } from 'lucide-react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'influenciador' | 'anunciante'>('influenciador');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log(`Login como ${activeTab}:`, { email, senha });
    
    // Redirecionar para a página apropriada após o login
    navigate(activeTab === 'influenciador' ? '/painel-influenciador' : '/painel-anunciante');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Acesse sua conta</h2>
      
      {/* Tabs de seleção */}
      <div className="flex mb-8">
        <button
          className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
            activeTab === 'influenciador' 
              ? 'text-orange-500 border-b-2 border-orange-500' 
              : 'text-gray-500 hover:text-orange-400 border-b-2 border-gray-200'
          }`}
          onClick={() => setActiveTab('influenciador')}
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
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder={`Email do ${activeTab}`}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Sua senha"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="lembrar"
              type="checkbox"
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
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
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition duration-300 ease-in-out font-medium"
          >
            Entrar como {activeTab === 'influenciador' ? 'Influenciador' : 'Anunciante'}
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