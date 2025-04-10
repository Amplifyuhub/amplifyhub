import React from 'react';
import Layout from '../components/Layout';

const Campanhas = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-light py-16">
        <div className="container mx-auto px-4">
          {/* Seção Principal */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossas <span className="text-orange-500">Campanhas</span>
            </h1>
            <p className="text-xl text-gray-600">
              Conectando marcas e influenciadores em campanhas de sucesso
            </p>
          </div>

          {/* Lista de Campanhas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Campanha 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Campanha de Moda Verão</h3>
                <p className="text-gray-600 mb-4">
                  Procuramos influenciadores para promover nossa nova coleção de moda praia.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-semibold">R$ 1.000 - R$ 3.000</span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    Participar
                  </button>
                </div>
              </div>
            </div>

            {/* Campanha 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gastronomia Local</h3>
                <p className="text-gray-600 mb-4">
                  Buscamos food influencers para divulgar restaurantes parceiros.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-semibold">R$ 500 - R$ 1.500</span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    Participar
                  </button>
                </div>
              </div>
            </div>

            {/* Campanha 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Review</h3>
                <p className="text-gray-600 mb-4">
                  Procuramos tech influencers para review de novos produtos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-semibold">R$ 2.000 - R$ 5.000</span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Filtros */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Filtrar Campanhas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Todas</option>
                  <option value="moda">Moda</option>
                  <option value="gastronomia">Gastronomia</option>
                  <option value="tecnologia">Tecnologia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Faixa de Valor
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Qualquer valor</option>
                  <option value="0-1000">Até R$ 1.000</option>
                  <option value="1000-3000">R$ 1.000 - R$ 3.000</option>
                  <option value="3000+">Acima de R$ 3.000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ordenar por
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="recentes">Mais recentes</option>
                  <option value="valor-alto">Maior valor</option>
                  <option value="valor-baixo">Menor valor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Campanhas; 