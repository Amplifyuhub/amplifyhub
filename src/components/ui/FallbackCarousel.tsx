import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FallbackCarousel = () => {
  // Cores para as imagens de placeholder
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33F0', '#33FFF0', '#FFFF33', '#FF33FF'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
  };

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 mb-12">
      <div className="overflow-hidden rounded-xl shadow-lg relative h-64 md:h-96">
        {colors.map((color, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundColor: color }}
          >
            <p className="text-white text-2xl font-bold">Slide {index + 1}</p>
          </div>
        ))}
        
        {/* Botões de navegação */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition-all z-10"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full text-gray-800 hover:bg-opacity-100 transition-all z-10"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {colors.map((_, index) => (
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

export default FallbackCarousel; 