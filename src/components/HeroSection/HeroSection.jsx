import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function HeroSection() {
  // Função para scroll suave
  const scrollToSobreAma = () => {
    const section = document.getElementById('sobre');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // pequeno ajuste se tiver navbar fixa
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: 'url("/img/capa.jpg")' }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-white max-w-5xl text-center px-4">
      <div className="mb-6 flex justify-center">
        <img
          src="/img/LogoAma_Branca.png"
          alt="Logo AMA"
          className="h-80 md:h-84 object-contain"
        />
      </div>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Transformando vidas com amor, cuidado e inclusão desde 2016.
        </h1>
        <p className="text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
          Uma Entidade Filantrópica sem fins lucrativos, fundada em 15 de junho de 2016.
          Nossa diretoria é composta exclusivamente por pais e mães de pessoas com autismo.
        </p>

        {/* Botão com rolagem mais suave */}
        <button
          onClick={scrollToSobreAma}
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white/90 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300"
        >
          Conhecer mais sobre a AMA
          <FaChevronDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
