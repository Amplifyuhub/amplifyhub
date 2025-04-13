import React from 'react';
import DatabaseTest from '../components/common/DatabaseTest';

const TesteBanco: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Teste de Banco de Dados</h1>
        <DatabaseTest />
      </div>
    </div>
  );
};

export default TesteBanco; 