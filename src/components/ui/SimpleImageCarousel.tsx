import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SimpleImageCarousel = () => {
  // Lista de imagens a partir da pasta public/assets
  const images = [
    '/src/assets/1.png',
    '/src/assets/2.png',
    '/src/assets/3.png',
    '/src/assets/4.png',
    '/src/assets/5.png',
    '/src/assets/6.png',
    '/src/assets/7.png',
    '/src/assets/8.png'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 mb-12">
      <div className="overflow-hidden rounded-xl shadow-lg relative h-64 md:h-96">
        {images.map((src, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={src} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Erro ao carregar imagem: ${src}`);
                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Imagem+Não+Encontrada';
              }}
            />
          </div>
        ))}
        
        {/* Botões de navegação */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition-all"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleImageCarousel; 