import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Interface para campanhas
interface Campanha {
  id: number;
  nome: string;
  status: string;
  dataInicio: string;
  dataFim: string;
}

const CampanhasMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);

  // Simula uma chamada de API para obter campanhas
  useEffect(() => {
    // Em uma aplicação real, isso seria uma chamada à API
    const obterCampanhas = () => {
      // Dados fictícios (mesmos dados da página de CampanhasAnunciante)
      const dadosCampanhas = [
        {
          id: 1,
          nome: 'Lançamento Produto Verão',
          status: 'Em andamento',
          dataInicio: '10/09/2023',
          dataFim: '30/12/2023',
        },
        {
          id: 2,
          nome: 'Promoção Semanal de Produtos',
          status: 'Em andamento',
          dataInicio: '15/08/2023',
          dataFim: '15/01/2024',
        },
        {
          id: 3,
          nome: 'Black Friday 2023',
          status: 'Planejada',
          dataInicio: '15/11/2023',
          dataFim: '30/11/2023',
        },
        {
          id: 4,
          nome: 'Campanha de Natal',
          status: 'Planejada',
          dataInicio: '01/12/2023',
          dataFim: '25/12/2023',
        },
        {
          id: 5,
          nome: 'Linha de Produto Eco-friendly',
          status: 'Concluída',
          dataInicio: '05/05/2023',
          dataFim: '05/08/2023',
        },
      ];
      
      setCampanhas(dadosCampanhas);
    };

    obterCampanhas();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-800 hover:text-orange-500 font-medium flex items-center"
      >
        Campanhas
        <ChevronDown size={16} className={`ml-1 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg z-50 py-2">
          <div className="max-h-64 overflow-y-auto">
            {campanhas.length > 0 ? (
              campanhas.map(campanha => (
                <Link
                  key={campanha.id}
                  to={`/campanha/${campanha.id}`}
                  className="block px-4 py-2 hover:bg-orange-50 text-sm"
                >
                  <div className="font-medium">{campanha.nome}</div>
                  <div className="flex justify-between items-center mt-1 text-xs">
                    <span className={`px-2 py-0.5 rounded-full ${
                      campanha.status === 'Em andamento' 
                        ? 'bg-green-100 text-green-800' 
                        : campanha.status === 'Planejada'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {campanha.status}
                    </span>
                    <span className="text-gray-500">{campanha.dataInicio}</span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">Nenhuma campanha disponível</div>
            )}
          </div>
          <div className="border-t mt-2 pt-2 px-4">
            <Link 
              to="/campanhas" 
              className="block text-orange-500 hover:text-orange-600 text-sm font-medium py-1"
            >
              Ver todas as campanhas
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampanhasMenu; 