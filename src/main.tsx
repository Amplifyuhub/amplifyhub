import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import LearnMore from './pages/LearnMore'
import Register from './pages/Register'
import Login from './pages/Login'
import LoginInfluenciador from './pages/LoginInfluenciador'
import LoginAnunciante from './pages/LoginAnunciante'
import PainelInfluenciador from './pages/PainelInfluenciador'
import PainelAnunciante from './pages/PainelAnunciante'
import ParceiriasInfluenciador from './pages/ParceiriasInfluenciador'
import DesempenhoInfluenciador from './pages/DesempenhoInfluenciador'
import InfluenciadoresAnunciante from './pages/InfluenciadoresAnunciante'
import CampanhasAnunciante from './pages/CampanhasAnunciante'
import Influenciadores from './pages/Influenciadores'
<<<<<<< HEAD
=======
import TesteBanco from './pages/TesteBanco'
import CadastroAnunciante from './pages/CadastroAnunciante'
import CadastroInfluenciador from './pages/CadastroInfluenciador'
import NovaCampanha from './pages/NovaCampanha'
import ConfirmacaoCadastro from './pages/ConfirmacaoCadastro'
>>>>>>> luiz
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/saiba-mais" element={<LearnMore />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/influenciador" element={<LoginInfluenciador />} />
        <Route path="/login/anunciante" element={<LoginAnunciante />} />
        <Route path="/painel-influenciador" element={<PainelInfluenciador />} />
        <Route path="/painel-anunciante" element={<PainelAnunciante />} />
        <Route path="/parcerias-influenciador" element={<ParceiriasInfluenciador />} />
        <Route path="/desempenho-influenciador" element={<DesempenhoInfluenciador />} />
        <Route path="/influenciadores-anunciante" element={<InfluenciadoresAnunciante />} />
        <Route path="/campanhas-anunciante" element={<CampanhasAnunciante />} />
        <Route path="/campanhas" element={<CampanhasAnunciante />} />
        <Route path="/campanha/:id" element={<CampanhasAnunciante />} />
        <Route path="/influenciadores" element={<Influenciadores />} />
        <Route path="/influenciador/:id" element={<Influenciadores />} />
<<<<<<< HEAD
=======
        <Route path="/teste-banco" element={<TesteBanco />} />
        <Route path="/cadastro-anunciante" element={<CadastroAnunciante />} />
        <Route path="/cadastro-influenciador" element={<CadastroInfluenciador />} />
        <Route path="/nova-campanha" element={<NovaCampanha />} />
        <Route path="/confirmacao-cadastro" element={<ConfirmacaoCadastro />} />
>>>>>>> luiz
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
