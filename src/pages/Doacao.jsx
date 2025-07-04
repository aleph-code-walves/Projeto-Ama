import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Doacao() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5e9ff] to-[#d2ccff] py-16 px-6 flex flex-col items-center justify-center">
      {/* Texto inspirador */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl max-w-3xl p-8 text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Sentiu no coração o desejo de ajudar? 💙
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Sua contribuição pode transformar vidas. Ao doar, você apoia o desenvolvimento de crianças com autismo e fortalece essa linda causa.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/doar")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-md hover:brightness-110 transition"
        >
          Quero Contribuir 💫
        </motion.button>

        {/* Espaço reservado para a logo */}
        <div className="mt-10 flex justify-center">
          <img
            src="/img/logoPrimeiraVF.png" // ajuste o caminho se necessário
            alt="Logo AMA"
            className="h-20 md:h-24 object-contain"
          />
        </div>
      </motion.div>

      {/* Redes sociais */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
      >
        <FaInstagram size={24} />
        <a
          href="https://www.instagram.com/ama_navegantes" // atualize com o link real
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          Siga nossas redes sociais
        </a>
      </motion.div>
    </div>
  );
}
