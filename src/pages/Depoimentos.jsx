import React from 'react';
import { motion } from 'framer-motion';
import './style/Depoimentos.css';

const depoimentos = [
  {
    nome: "Maria Oliveira",
    texto: "A AMA mudou a vida do meu filho. Hoje ele é muito mais confiante e feliz.",
    imagem: "/usuarios/maria.jpg"
  },
  {
    nome: "João Silva",
    texto: "Fomos acolhidos com muito carinho. Gratidão eterna por essa instituição.",
    imagem: "/usuarios/joao.jpg"
  },
  {
    nome: "Ana Paula",
    texto: "O trabalho da AMA é sensacional. Eles realmente se importam com cada criança.",
    imagem: "/usuarios/ana.jpg"
  },
  {
    nome: "Carlos Mendes",
    texto: "Apoiar a AMA é investir em um futuro mais humano e justo para todos.",
    imagem: "/usuarios/carlos.jpg"
  }
];

export default function Depoimentos() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white/70 to-purple-100 p-8 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: 'url("/img/capa02.jpg")',
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900">
          Depoimentos de quem vive isso 💙
        </h2>
        <p className="text-gray-700 mt-2 text-lg">
          Conheça histórias reais de transformação através da AMA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {depoimentos.map((dep, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={dep.imagem}
              alt={`Foto ${dep.nome}`}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 mb-3 italic">"{dep.texto}"</p>
            <span className="font-semibold text-blue-700">{dep.nome}</span>
          </motion.div>
        ))}
      </div>

      
<div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-md p-6 text-center mb-10">
  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">9 anos de história</h3>
  <p className="text-gray-800 text-base md:text-lg leading-relaxed">
    A <strong>AMA Navegantes</strong> nasceu com o propósito de acolher, cuidar e oferecer oportunidades reais para crianças, adolescentes e famílias que convivem com o autismo.
    <br className="hidden md:block" />
    Ao longo da caminhada, superamos desafios, celebramos conquistas e transformamos vidas com amor e compromisso.
    <br className="hidden md:block" />
    <strong>Parabéns, AMA!</strong> Que venham muitos anos de afeto, inclusão e transformação. 🧩🎉
  </p>
</div>


<div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
  <video controls className="w-full h-full object-cover">
    <source src="/videos/Video Institucional.mp4" type="video/mp4" />
    Seu navegador não suporta o vídeo.
  </video>
</div>
    </div>
  );
}
