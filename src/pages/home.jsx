import React from 'react';
import Header from '../components/Header/header';
import HeroSection from '../components/HeroSection/HeroSection';
import Sobre from './Sobre';
import Doacao from './Doacao';
import Depoimentos from './Depoimentos';
import Projetos from './Projetos';
import NossoEspaco from './NossoEspaco';
import './style/home.css';
import { Element } from 'react-scroll';

function Home() {
  return (
    <div>

      <Header />

      <main className="pt-[96px] md:pt-[120px]">
      <div id="topo"></div>
        <HeroSection />

        <Element name="sobre">
          <Sobre />
        </Element>

        <div id="projetos">
          <Projetos />
        </div>

        <div id="midias">
          <Depoimentos />
        </div>

        <div id="espaco">
          <NossoEspaco />
        </div>

        <div id="doar">
          <Doacao />
        </div>
      </main>
    </div>
  );
}

export default Home;