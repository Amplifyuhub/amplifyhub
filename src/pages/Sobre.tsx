import React from 'react';
import Layout from '../components/Layout';

const Sobre = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-light py-16">
        <div className="container mx-auto px-4">
          {/* Seção Principal */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-orange-500">Amplify</span>
            </h1>
            <p className="text-xl text-gray-600">
              Transformando o marketing de influência no Brasil
            </p>
          </div>

          {/* Nossa História */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nossa História</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                A Amplify nasceu da visão de democratizar o marketing de influência, tornando-o acessível tanto para pequenas empresas quanto para influenciadores emergentes. Fundada em 2024, nossa plataforma tem revolucionado a forma como marcas e criadores de conteúdo se conectam.
              </p>
              <p className="text-gray-600">
                Nossa missão é criar um ecossistema onde influenciadores regionais possam prosperar e empresas locais possam alcançar seu público de forma autêntica e eficaz. Acreditamos no poder das conexões genuínas e no impacto positivo que elas podem gerar nas comunidades.
              </p>
            </div>
          </div>

          {/* Nossos Valores */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Transparência</h3>
                <p className="text-gray-600">
                  Promovemos relações claras e honestas entre todos os participantes da nossa plataforma.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Inovação</h3>
                <p className="text-gray-600">
                  Buscamos constantemente novas formas de melhorar a experiência e os resultados de nossos usuários.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">Comunidade</h3>
                <p className="text-gray-600">
                  Valorizamos o crescimento conjunto e o impacto positivo nas comunidades locais.
                </p>
              </div>
            </div>
          </div>

          {/* Nossa Equipe */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossa Equipe</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">João Silva</h3>
                <p className="text-gray-600">CEO & Fundador</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">Maria Santos</h3>
                <p className="text-gray-600">Diretora de Tecnologia</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">Pedro Costa</h3>
                <p className="text-gray-600">Diretor de Marketing</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">Ana Oliveira</h3>
                <p className="text-gray-600">Diretora de Operações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sobre; 