import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Building2, Eye, EyeOff } from 'lucide-react';
import { databaseService } from '../services/database.service';
import logoImage from '../assets/logo.png';

const LoginAnunciante = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Recuperar o parâmetro de redirecionamento da URL, se existir
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      setRedirectUrl(redirect);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Validar campos
      if (!email || !password) {
        throw new Error('Por favor, preencha todos os campos');
      }

      // Tentar fazer login
      const user = await databaseService.loginUser(email, password);

      // Verificar se o usuário é um anunciante
      if (user.user_type !== 'anunciante') {
        throw new Error('Esta conta não é de um anunciante');
      }

      // Salvar dados do usuário na sessão
      localStorage.setItem('user', JSON.stringify(user));
      
      // Redirecionar para a página solicitada ou para o painel do anunciante
      if (redirectUrl) {
        navigate(redirectUrl);
      } else {
        navigate('/painel-anunciante');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError(error instanceof Error ? error.message : 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-light py-16 px-4">
      <div className="container mx-auto max-w-md">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-orange-500">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar
          </Link>
          <Link to="/">
            <img 
              src={logoImage} 
              alt="Amplify" 
              className="h-8"
            />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Building2 size={32} className="text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Login de Anunciante</h1>
            <p className="text-gray-500 mt-2 text-center">
              Acesse sua conta para gerenciar suas campanhas
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

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
                  placeholder="Seu email"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Sua senha"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
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
                {loading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Não tem uma conta ainda?{' '}
              <Link to="/cadastro" className="text-orange-500 hover:underline font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAnunciante; 