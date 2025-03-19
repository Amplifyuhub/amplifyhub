import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FixedImageCarousel = () => {
  // Lista estática de imagens do projeto
  const images = [
    '1.png', 
    '2.png', 
    '3.png', 
    '4.png', 
    '5.png', 
    '6.png', 
    '7.png', 
    '8.png'
  ].map(img => `/src/assets/${img}`);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Verificar se as imagens foram carregadas
  useEffect(() => {
    // Verifica se pelo menos uma imagem carrega
    const img = new Image();
    img.onload = () => setImagesLoaded(true);
    img.onerror = () => {
      console.error("Não foi possível carregar uma ou mais imagens");
      // Mesmo com erro, mostramos o componente para exibir o fallback
      setImagesLoaded(true);
    };
    img.src = images[0];
  }, [images]);
  
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

  // Só renderiza o conteúdo quando estiver pronto
  if (!imagesLoaded) {
    return (
      <div className="relative w-full max-w-5xl mx-auto mt-8 mb-12 h-64 md:h-96 bg-gray-100 animate-pulse rounded-xl">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Carregando imagens...</p>
        </div>
      </div>
    );
  }

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
      
      {/* Fallback de depuração (versão simplificada) */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Imagens: {images.join(' | ')}</p>
        <p>Imagem atual: {currentIndex + 1} de {images.length}</p>
      </div>
    </div>
  );
};

export default FixedImageCarousel; 