import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { databaseService } from '../../services/database.service';

interface CampaignFormProps {
  onSuccess?: () => void;
  initialData?: any;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSuccess, initialData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [budget, setBudget] = useState(initialData?.budget || '');
  const [status, setStatus] = useState<'active' | 'inactive' | 'completed'>(initialData?.status || 'active');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validações básicas
      if (!title || !description || !budget) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.');
      }

      // Obter o usuário logado (anunciante)
      const userJson = localStorage.getItem('user');
      if (!userJson) {
        throw new Error('Usuário não está logado.');
      }

      const user = JSON.parse(userJson);
      if (user.user_type !== 'anunciante') {
        throw new Error('Apenas anunciantes podem criar campanhas.');
      }

      // Criar campanha
      const campaignData = {
        title,
        description,
        status,
        budget: Number(budget),
        advertiser_id: user.id
      };

      await databaseService.createCampaign(campaignData);

      // Callback de sucesso
      if (onSuccess) {
        onSuccess();
      }

      // Redirecionar para a lista de campanhas
      navigate('/campanhas-anunciante');
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
      setError(error instanceof Error ? error.message : 'Ocorreu um erro ao criar a campanha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {initialData ? 'Editar Campanha' : 'Nova Campanha'}
      </h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título da Campanha *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Ex: Lançamento Produto Verão"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descrição *
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Descreva os objetivos e requisitos da campanha"
            rows={4}
            required
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Orçamento (R$) *
          </label>
          <input
            id="budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Ex: 5000"
            min="0"
            step="0.01"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status *
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'active' | 'inactive' | 'completed')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
            disabled={loading}
          >
            <option value="active">Ativa</option>
            <option value="inactive">Inativa</option>
            <option value="completed">Concluída</option>
          </select>
        </div>

        <div className="pt-4 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/campanhas-anunciante')}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={`px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Salvando...' : initialData ? 'Salvar Alterações' : 'Criar Campanha'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm; 