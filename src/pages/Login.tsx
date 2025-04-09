import { ArrowLeft, User, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/common/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-light py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-[#ff5d1d] mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para a página inicial
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Acesse a <span className="text-[#ff5d1d]">Amplify</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Entre em sua conta para acessar todas as ferramentas e recursos exclusivos da nossa plataforma, conectando influenciadores e anunciantes de forma eficiente.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#ff5d1d]/10 p-2 rounded-full">
                  <User className="h-5 w-5 text-[#ff5d1d]" />
                </div>
                <div>
                  <h3 className="font-medium">Para Influenciadores</h3>
                  <p className="text-gray-600">Acesse oportunidades exclusivas de parcerias com marcas locais</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#ff5d1d]/10 p-2 rounded-full">
                  <Building className="h-5 w-5 text-[#ff5d1d]" />
                </div>
                <div>
                  <h3 className="font-medium">Para Anunciantes</h3>
                  <p className="text-gray-600">Gerencie suas campanhas e encontre os influenciadores ideais</p>
                </div>
              </div>
            </div>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login; 