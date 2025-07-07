import React from "react";
import "./style/Sobre.css"; 
import { FaStethoscope } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { GiHealing } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";

const servicos = [
  {
    nome: "Neurologia",
    icon: <FaBrain className="text-purple-700 text-xl mr-2" />,
    destaque: true,
  },
  {
    nome: "Clínico Geral",
    icon: <FaStethoscope className="text-blue-700 text-xl mr-2" />,
    destaque: true,
  },
  {
    nome: "Psicologia",
    icon: <MdPsychology className="text-pink-600 text-xl mr-2" />,
    destaque: true,
  },
  {
    nome: "Fonoaudiologia",
    icon: <GiSoundWaves className="text-yellow-600 text-xl mr-2" />,
  },
  {
    nome: "Fisioterapia",
    icon: <GiHealing className="text-green-600 text-xl mr-2" />,
  },
  {
    nome: "Pedagogia",
    icon: <FaChalkboardTeacher className="text-orange-600 text-xl mr-2" />,
  },
  {
    nome: "Assistência Social",
    icon: <FaHandsHelping className="text-red-600 text-xl mr-2" />,
  },
];


const SobreAma = () => {
  return (
<section
  className="bg-gradient-to-b from-white to-blue-50 bg-no-repeat bg-cover bg-center px-6 md:px-20 pt-20 pb-20 min-h-[85vh] flex flex-col"
  style={{
    backgroundImage: 'url("/img/capaSobre.jpg")',
  }}
    id="sobre"
>

      {/* Cabeçalho centralizado */}
      <div className="text-center max-w-6xl mx-auto mb-10">
        <h1 className="text-6xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Sobre a <span className="underline decoration-sky-500">AMA</span>
        </h1>
        <p className="gilroy text-gray-700 md:text-lg font-medium leading-loose">
          Desde que foi fundada, em 2016, a AMA tem o objetivo de defender os direitos, promover a inclusão e melhorar a qualidade de vida das pessoas com{" "}
          <strong>Transtorno do Espectro Autista (TEA)</strong> e de suas famílias.
          Atuando como uma rede de apoio mútuo, oferecendo acolhimento, orientação, informação e articulação com a sociedade e o poder público.
        </p>
      </div>

      {/* Conteúdo em colunas */}
      <div className="grid md:grid-cols-2 gap-50 items-start max-w-6xl mx-auto mt-13">
        {/* Serviços */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Serviços oferecidos pela AMA:</h2>
          <ul className="font-bold space-y-2 text-gray-800 text-lg">
          {servicos.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.icon} {item.nome}
            </li>
          ))}
        </ul>
        </div>

        {/* Destaques */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Destaques:</h2>
          <div className="gilroy-light bg-blue-100 text-blue-800 px-4 py-3 rounded-lg text-lg shadow-sm">
            Composta por <span className="font-bold">profissionais especializados</span>
          </div>
          <div className="gilroy-light bg-yellow-500 text-white px-4 py-3 rounded-lg text-lg shadow-sm">
            Apoiado pelo município de<span className="font-bold"> Navegantes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreAma;
