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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
