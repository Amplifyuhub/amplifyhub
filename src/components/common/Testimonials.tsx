import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Antes do Amplify, eu tinha dificuldade em fechar parcerias com marcas locais. Agora, recebo propostas que realmente fazem sentido para o meu público e consigo monetizar meu conteúdo de forma consistente!",
    author: "Lucas M.",
    role: "Influenciador"
  },
  {
    text: "Nossa loja precisava de mais visibilidade, mas campanhas tradicionais eram caras e pouco eficientes. Com o Amplify, encontramos influenciadores alinhados ao nosso nicho e tivemos um retorno incrível!",
    author: "Mariana R.",
    role: "Empresária"
  },
  {
    text: "O Amplify simplificou completamente minha estratégia de marketing de influência. Agora consigo acompanhar métricas reais e investir em campanhas que trazem resultados concretos!",
    author: "Felipe S.",
    role: "Gerente de Marketing"
  },
  {
    text: "Eu sempre quis trabalhar com marcas, mas não sabia por onde começar. O Amplify me ajudou a entender meu valor como criador e encontrar oportunidades que antes pareciam impossíveis!",
    author: "Amanda C.",
    role: "Criadora de Conteúdo"
  },
  {
    text: "O melhor do Amplify é que ele conecta pequenos e médios influenciadores a negócios locais de forma justa e eficiente. Finalmente, um espaço onde todos saem ganhando!",
    author: "Ricardo T.",
    role: "Empreendedor"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          O Que Dizem Sobre Nós
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative bg-white p-8 rounded-2xl shadow-lg"
            style={{
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Quote className="absolute text-purple-200 w-16 h-16 -top-6 -left-6" />
            
            <div className="relative z-10">
              <p className="text-xl text-gray-700 mb-6 italic">
                "{currentTestimonial.text}"
              </p>
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{currentTestimonial.author}</p>
                  <p className="text-purple-600">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 