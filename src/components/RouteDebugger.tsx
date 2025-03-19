import { useLocation } from 'react-router-dom';

const RouteDebugger = () => {
  const location = useLocation();
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: 0, 
      right: 0, 
      padding: '10px', 
      background: 'black', 
      color: 'white',
      zIndex: 9999
    }}>
      <p>Rota atual: {location.pathname}</p>
    </div>
  );
};

export default RouteDebugger; 