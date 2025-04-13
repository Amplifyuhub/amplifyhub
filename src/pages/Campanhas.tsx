import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Instagram, Youtube, Tiktok, HelpCircle } from 'lucide-react';
import { databaseService } from '../services/database.service';

interface Campanha {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  budget: number;
  advertiser_id: string;
  created_at: string;
  social_media: 'instagram' | 'youtube' | 'tiktok';
  requirements: string[];
  advertiser: {
    name: string;
    company_name: string;
  };
}

const Campanhas: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCampanhas = async () => {
      try {
        const data = await databaseService.getCampaigns();
        setCampanhas(data);
      } catch (err) {
        console.error('Erro ao buscar campanhas:', err);
        setError('Erro ao carregar campanhas. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampanhas();
  }, []);

  const getSocialMediaIcon = (socialMedia: string) => {
    switch (socialMedia) {
      case 'instagram':
        return <Instagram size={24} className="text-gray-600" />;
      case 'youtube':
        return <Youtube size={24} className="text-gray-600" />;
      case 'tiktok':
        return <Tiktok size={24} className="text-gray-600" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">Carregando campanhas...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Campanhas Disponíveis</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campanhas.map((campanha) => (
            <div key={campanha.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getSocialMediaIcon(campanha.social_media)}
                    <h2 className="text-xl font-semibold text-gray-900">{campanha.title}</h2>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    campanha.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : campanha.status === 'completed'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {campanha.status === 'active' ? 'Ativa' : campanha.status === 'completed' ? 'Concluída' : 'Inativa'}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-gray-600">{campanha.description}</p>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Empresa:</span>
                    <span className="text-sm font-medium">{campanha.advertiser.company_name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Data de início:</span>
                    <span className="text-sm font-medium">
                      {new Date(campanha.created_at).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Valor:</span>
                        <span className="text-sm font-medium">
                          R$ {campanha.budget.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Requisitos:</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {campanha.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      {user?.user_type === 'influenciador' && (
                        <button className="w-full mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                          Candidatar-se
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="mt-4 flex items-center justify-center gap-2 text-gray-500">
                      <HelpCircle size={20} />
                      <span className="text-sm">
                        Para visualizar os valores, é necessário estar logado
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isAuthenticated && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Deseja ver mais detalhes e participar das campanhas?
            </p>
            <Link
              to="/login"
              className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Fazer login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Campanhas; 