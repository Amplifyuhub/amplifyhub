import bannerImage from '../assets/banner.png'; // Importação correta

const Hero = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">
        Conectando <span className="text-orange-500">Influenciadores</span> e
        <span className="text-orange-500"> Anunciantes</span>
      </h1>

      <img
        src={bannerImage} // Use a variável importada
        alt="Conectando Influenciadores e Anunciantes"
        className="max-w-md h-auto mx-auto mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      />

      <p className="mt-6 text-gray-700">
        Democratizando o marketing de influência para impulsionar a economia
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full">
          Comece Agora
        </button>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-6 rounded-full">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default Hero;