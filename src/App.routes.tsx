import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Campanhas from './pages/Campanhas';
import Influenciadores from './pages/Influenciadores';
import Layout from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: '/campanhas',
    element: <Layout><Campanhas /></Layout>,
  },
  {
    path: '/influenciadores',
    element: <Influenciadores />,
  },
  {
    path: '/sobre',
    element: <Layout><Sobre /></Layout>,
  },
  {
    path: '/contato',
    element: <Layout><Contato /></Layout>,
  },
]); 