import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function LearnMore() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            🚀 Amplify – O Poder do Marketing de Influência ao Seu Alcance!
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Pequenos e médios influenciadores enfrentam dificuldades para monetizar seu conteúdo. 
              Empresas locais lutam para encontrar parceiros autênticos que falem diretamente com seu público.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              A Amplify é a solução! Conectamos influenciadores regionais a negócios locais, 
              impulsionando marcas através do marketing de influência acessível, eficiente e mensurável.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Como Funciona?</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">🔹 Para Influenciadores</h3>
                <p className="text-gray-700">
                  Monetize seu conteúdo com parcerias estratégicas e receba campanhas que fazem sentido para seu nicho.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">🔹 Para Empresas</h3>
                <p className="text-gray-700">
                  Encontre influenciadores autênticos e transforme seu marketing digital com campanhas personalizadas.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3">🔹 Para Todos</h3>
                <p className="text-gray-700">
                  Nossa plataforma oferece métricas avançadas, suporte estratégico e uma comunidade engajada, 
                  tornando a publicidade digital mais acessível do que nunca.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/" 
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors inline-block"
            >
              Voltar para Página Inicial
            </Link>
          </div>
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

export default LearnMore; 