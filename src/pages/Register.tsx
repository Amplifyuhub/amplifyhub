import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building2 } from 'lucide-react';

type UserType = 'influencer' | 'business' | null;

function Register() {
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Campos específicos para influenciador
    niche: '',
    socialMedia: '',
    followers: '',
    // Campos específicos para negócio
    businessName: '',
    segment: '',
    city: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Comece sua jornada na Amplify
          </h1>

          {!userType ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-center mb-8">Escolha seu perfil</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType('influencer')}
                  className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-600 flex flex-col items-center"
                >
                  <Users className="w-16 h-16 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Influenciador</h3>
                  <p className="text-gray-600 text-center">
                    Monetize seu conteúdo e conecte-se com marcas
                  </p>
                </button>

                <button
                  onClick={() => setUserType('business')}
                  className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-600 flex flex-col items-center"
                >
                  <Building2 className="w-16 h-16 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Anunciante</h3>
                  <p className="text-gray-600 text-center">
                    Encontre influenciadores para promover sua marca
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">
                {userType === 'influencer' ? 'Cadastro de Influenciador' : 'Cadastro do Anunciante'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campos comuns */}
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="password">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>

                {/* Campos específicos para influenciador */}
                {userType === 'influencer' && (
                  <>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="niche">
                        Nicho Principal
                      </label>
                      <select
                        id="niche"
                        name="niche"
                        value={formData.niche}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                      >
                        <option value="">Selecione um nicho</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="food">Gastronomia</option>
                        <option value="fashion">Moda</option>
                        <option value="tech">Tecnologia</option>
                        <option value="fitness">Fitness</option>
                        <option value="beauty">Beleza</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="socialMedia">
                        Principal Rede Social
                      </label>
                      <input
                        type="text"
                        id="socialMedia"
                        name="socialMedia"
                        value={formData.socialMedia}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="@seu.perfil"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="followers">
                        Número de Seguidores
                      </label>
                      <input
                        type="number"
                        id="followers"
                        name="followers"
                        value={formData.followers}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </>
                )}

                {/* Campos específicos para negócio */}
                {userType === 'business' && (
                  <>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="businessName">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="segment">
                        Segmento
                      </label>
                      <select
                        id="segment"
                        name="segment"
                        value={formData.segment}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                      >
                        <option value="">Selecione um segmento</option>
                        <option value="restaurant">Restaurante</option>
                        <option value="retail">Varejo</option>
                        <option value="beauty">Beleza e Estética</option>
                        <option value="fitness">Academia e Fitness</option>
                        <option value="education">Educação</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="city">
                        Cidade
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setUserType(null)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2024 Amplify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Register; 