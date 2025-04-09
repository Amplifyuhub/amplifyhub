import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { MaskedInput } from '../components/ui/MaskedInput';
import { Alert } from '../components/ui/Alert';
import bannerCadastro from '../assets/Banner-cadastro.jpg';
import { databaseService } from '../services/database.service';

const CadastroAnunciante = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [segmento, setSegmento] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userData = {
        name: nome,
        email,
        password: senha,
        user_type: 'anunciante' as const,
        phone: telefone,
        company_name: razaoSocial,
        segment: segmento
      };

      const user = await databaseService.createUser(userData);

      const state = { 
        userType: 'anunciante',
        returnTo: location.state?.returnTo 
      };
      
      console.log('Navigating to confirmation with state:', state);
      
      navigate('/confirmacao-cadastro', { state });
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="h-48 md:h-full relative">
              <img
                src={bannerCadastro}
                alt="Banner de cadastro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-600 bg-opacity-50"></div>
            </div>
          </div>

          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Cadastro de Anunciante
            </h2>

            {error && (
              <Alert variant="error" className="mb-4">
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />

              <Input
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />

              <MaskedInput
                label="Telefone"
                mask="(99) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />

              <MaskedInput
                label="CNPJ"
                mask="99.999.999/9999-99"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                required
              />

              <Input
                label="Razão Social"
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                required
              />

              <Select
                label="Segmento"
                value={segmento}
                onChange={(e) => setSegmento(e.target.value)}
                required
              >
                <option value="">Selecione um segmento</option>
                <option value="moda">Moda</option>
                <option value="beleza">Beleza</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="alimentacao">Alimentação</option>
                <option value="saude">Saúde</option>
                <option value="educacao">Educação</option>
                <option value="entretenimento">Entretenimento</option>
                <option value="outros">Outros</option>
              </Select>

              <Button
                type="submit"
                className="w-full"
                loading={loading}
              >
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroAnunciante; 