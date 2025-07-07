import React from 'react';
import './HeroSection.css'; 
import { FaChevronDown } from 'react-icons/fa';

function HeroSection() {
  return (
    <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        
       style={{
        backgroundImage: 'url("/img/capa.jpg")'}}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white max-w-5xl text-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Transformando vidas com amor, cuidado e inclusão desde 2016.
        </h1>
        <p className="text-lg lg:text-xl mb-10 max-w-3xl mx-auto">
          Uma Entidade Filantrópica sem fins lucrativos, fundada em 15 de junho de 2016. Nossa diretoria é composta exclusivamente por pais e mães de pessoas com autismo.
        </p>
      {/* Seta animada */}
        <a href="sobre" className="inline-block animate-bounce text-white">
          <FaChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;