import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll'; // <- para navegação suave
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-blue-900 to-purple-300 text-white shadow-lg transition-all duration-500">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
      {/* Logo com scroll até o topo */}
      <Link
        to="topo"
        smooth={true}
        duration={500}
        className="cursor-pointer flex items-center gap-3 cursor-pointer"
      >
        <img
          src="../img/LogoAma_Branca.png"
          alt="Logo AMA"
          className="h-14 md:h-18 object-contain max-w-[400px]"
        />
      </Link>
  
      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-10 font-medium tracking-wide">
        {[
          { name: 'Sobre a AMA', to: 'sobre' },
          { name: 'Nossa História', to: 'nossahistoria' },
          { name: 'Projetos', to: 'projetos' },
          { name: 'Impacto na Sociedade', to: 'impacto' },
          { name: 'Nosso Espaço', to: 'espaco' },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer relative after:block after:h-[2px] after:w-0 after:bg-white after:opacity-60 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </Link>
        ))}
  
        {/* Botão "Doar" */}
        <Link
          to="doar"
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer ml-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          Doar
        </Link>
      </nav>
  
      {/* Menu Mobile (opcional) */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
    </div>
  </header>
  );
}

export default Header;