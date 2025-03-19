import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, BarChart as ChartBar, Rocket, Target, DollarSign, ChevronDown, Menu, X, User, Check } from 'lucide-react';
import { Testimonials } from './components/Testimonials';
import LoginDropdown from './components/LoginDropdown';
import logoImage from './assets/logo.png';
import principalImage from './assets/Principal.png';
import RouteDebugger from './components/RouteDebugger';


function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 rounded-full">
        <Icon className="w-6 h-6 text-orange-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-light">
        {/* Barra de navegação com login */}
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative">
          <div className="text-2xl font-bold text-gray-900">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Amplify" 
                className="h-8"
              />
            </Link>
          </div>
          <div>
            <button 
              onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
              className="px-8 py-3 bg-white text-orange-500 rounded-full font-semibold border-2 border-orange-500 hover:bg-orange-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Login
              <ChevronDown size={16} className={`transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <LoginDropdown 
              isOpen={isLoginDropdownOpen} 
              onClose={() => setIsLoginDropdownOpen(false)} 
            />
          </div>
        </nav>

        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Conectando <span className="text-orange-500">Influenciadores</span> e <span className="text-orange-500">Anunciante</span>
            </h1>
            
            <div className="relative w-full max-w-5xl mx-auto mt-8 mb-12">
              <img 
                src={principalImage} 
                alt="Principal" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              Democratizando o marketing de influência para impulsionar a economia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cadastro"
                className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
              >
                Comece Agora
              </Link>
              <Link 
                to="/saiba-mais"
                className="px-8 py-3 bg-white text-orange-500 rounded-full font-semibold border-2 border-orange-500 hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </header>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Como a Amplify Funciona</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Users}
              title="Conexão Direta"
              description="Conectamos influenciadores regionais com empresas locais de forma simples e eficaz"
            />
            <FeatureCard
              icon={ChartBar}
              title="Métricas Avançadas"
              description="Acesso a dados e análises detalhadas para otimização de campanhas"
            />
            <FeatureCard
              icon={Target}
              title="Marketing Localizado"
              description="Alcance seu público-alvo com precisão através de influenciadores da sua região"
            />
            <FeatureCard
              icon={Building2}
              title="Para Empresas Locais"
              description="Encontre os influenciadores perfeitos para promover seu negócio"
            />
            <FeatureCard
              icon={Rocket}
              title="Crescimento Mútuo"
              description="Plataforma gamificada para impulsionar o engajamento e resultados"
            />
            <FeatureCard
              icon={DollarSign}
              title="Preços Acessíveis"
              description="Democratizando o acesso ao marketing de influência"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              🎯 O Que Você Ganha com a Amplify?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Match Perfeito</h3>
                  <p className="text-gray-700">
                    Conectamos marcas e influenciadores com base em dados reais e perfis compatíveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Campanhas Sob Medida</h3>
                  <p className="text-gray-700">
                    Anuncie com influenciadores que realmente influenciam seu público-alvo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Métricas e Resultados</h3>
                  <p className="text-gray-700">
                    Acompanhe o desempenho das campanhas e otimize sua estratégia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Plataforma Gamificada</h3>
                  <p className="text-gray-700">
                    Participe de desafios, aumente sua relevância e ganhe mais oportunidades de parceria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Monetização Simples e Eficiente</h3>
                  <p className="text-gray-700">
                    Influenciadores encontram marcas ideais, e empresas investem em publicidade que realmente traz retorno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Social Proof */}
        <section className="bg-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Números que Impressionam</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-purple-200">Influenciadores Ativos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-200">Empresas Parceiras</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-purple-200">Campanhas Realizadas</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Amplificar seu Alcance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de influenciadores e empresas que já estão transformando o marketing digital
            </p>
            <Link
              to="/cadastro"
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
            >
              Cadastre-se Gratuitamente
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>© 2024 Amplify. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
      <RouteDebugger />
    </>
  );
}

export default App;