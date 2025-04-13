import React, { useState } from 'react';
import { databaseService } from '../../services/database.service';

const DatabaseTest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const testConnection = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await databaseService.testConnection();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao testar conexão');
    } finally {
      setLoading(false);
    }
  };

  const insertTestData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await databaseService.testInsert();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao inserir dados de teste');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Teste de Banco de Dados</h2>
      
      <div className="space-y-4">
        <button
          onClick={testConnection}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Testando...' : 'Testar Conexão'}
        </button>

        <button
          onClick={insertTestData}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 ml-4"
        >
          {loading ? 'Inserindo...' : 'Inserir Dados de Teste'}
        </button>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {result && (
          <div className="p-4 bg-green-100 text-green-700 rounded">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseTest; 