import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CadastroAnuncianteProps {
  campanhaId?: string; // ID opcional da campanha, caso o cadastro venha de uma campanha específica
}

const CadastroAnunciante: React.FC<CadastroAnuncianteProps> = ({ campanhaId }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [segmento, setSegmento] = useState('');
  const [website, setWebsite] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');

  // Segmentos disponíveis
  const segmentos = [
    'Alimentação',
    'Moda',
    'Beleza e Cosméticos',
    'Tecnologia',
    'Educação',
    'Saúde e Bem-estar',
    'Imobiliário',
    'Automotivo',
    'Entretenimento',
    'Esportes',
    'Viagens e Turismo',
    'Serviços Financeiros',
    'Outros'
  ];

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações básicas
    if (!nome || !email || !senha || !empresa || !segmento) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    if (senha !== confirmacaoSenha) {
      setErro('As senhas não coincidem.');
      return;
    }
    
    // Criar objeto do anunciante
    const novoAnunciante = {
      id: Date.now(), // ID temporário, em uma aplicação real seria gerado pelo backend
      nome,
      email,
      empresa,
      segmento,
      website,
      telefone
    };
    
    // Salvar no localStorage (em uma aplicação real seria enviado para uma API)
    try {
      const anunciantesRegistrados = localStorage.getItem('anunciantes_registrados');
      let anunciantes = [];
      
      if (anunciantesRegistrados) {
        anunciantes = JSON.parse(anunciantesRegistrados);
      }
      
      anunciantes.push(novoAnunciante);
      localStorage.setItem('anunciantes_registrados', JSON.stringify(anunciantes));
      
      // Também salvamos o estado de login
      localStorage.setItem('anunciante_logado', 'true');
      
      // Redirecionamento
      if (campanhaId) {
        navigate(`/campanha/${campanhaId}`);
      } else {
        navigate('/painel-anunciante');
      }
    } catch (error) {
      console.error('Erro ao salvar anunciante:', error);
      setErro('Ocorreu um erro ao salvar os dados. Por favor, tente novamente.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cadastro de Anunciante</h2>
      
      {erro && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {erro}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Seu nome completo"
              required
            />
          </div>
          
          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da Empresa *
            </label>
            <input
              id="empresa"
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Nome da sua empresa"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Corporativo *
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="seu.email@empresa.com"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
              Senha *
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="********"
              minLength={6}
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmacao-senha" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha *
            </label>
            <input
              id="confirmacao-senha"
              type="password"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="********"
              minLength={6}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="segmento" className="block text-sm font-medium text-gray-700 mb-1">
              Segmento da Empresa *
            </label>
            <select
              id="segmento"
              value={segmento}
              onChange={(e) => setSegmento(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Selecione um segmento</option>
              {segmentos.map((seg, index) => (
                <option key={index} value={seg}>{seg}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              id="website"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="https://www.empresa.com.br"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone de Contato
          </label>
          <input
            id="telefone"
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Cadastrar e Começar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroAnunciante; 