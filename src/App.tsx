import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Testimonials } from './components/common/Testimonials'
import LoginDropdown from './components/common/LoginDropdown'
import CampanhasMenu from './pages/CampanhasMenu'
import RouteDebugger from './utils/RouteDebugger'
import principalImage from './assets/Principal.png'
import logoImage from './assets/logo.png'
import { LogIn } from 'lucide-react'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/">
                <img src={logoImage} alt="Logo" className="h-8 w-auto" />
              </Link>
              <div className="hidden md:flex ml-8 space-x-6">
                <Link to="/campanhas" className="text-gray-600 hover:text-orange-500">
                  Campanhas
                </Link>
                <Link to="/influenciadores" className="text-gray-600 hover:text-orange-500">
                  Influenciadores
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <LogIn size={20} />
                <span className="hidden md:inline">Entrar</span>
              </button>
              <Link
                to="/cadastro"
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <span className="hidden md:inline">Criar Conta</span>
                <span className="md:hidden">+</span>
              </Link>
            </div>
            <LoginDropdown 
              isOpen={isLoginDropdownOpen}
              onClose={() => setIsLoginDropdownOpen(false)}
            />
          </nav>

          <div className="mt-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Conectando <span className="text-orange-500">Influenciadores</span> e<br />
              <span className="text-orange-500">Anunciante</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src={principalImage} 
                alt="Influenciadores" 
                className="w-full h-auto shadow-2xl rounded-2xl"
              />
            </div>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Democratizando o marketing de influência para impulsionar a economia
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/cadastro"
                className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Comece Agora
              </Link>
              <Link
                to="/saiba-mais"
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          <div className="mt-32">
            <Testimonials />
          </div>

          <RouteDebugger />
        </div>
      </div>
    </AuthProvider>
  )
}

export default App