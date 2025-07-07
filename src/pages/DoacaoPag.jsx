import React from "react";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";

export default function DoarPix() {
  const chavePix = "25.401.842/0001-86"; // Substitua pela sua chave real
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url("/img/bg-doacao.jpg")' }} // Substitua com seu caminho
    >
      {/* Caixa com conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-90 rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Contribua com a AMA Navegantes 💙
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Sua doação por PIX nos ajuda a continuar acolhendo, cuidando e oferecendo oportunidades reais para quem convive com o autismo.
        </p>

        {/* QR Code + chave */}
        <div className="flex flex-col items-center mb-6">
          <QRCodeCanvas
            value={`00020126580014BR.GOV.BCB.PIX0136${chavePix}5204000053039865802BR5921Instituição Exemplo6009São Paulo62070503***6304ABCD`}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
          />
          <p className="text-sm text-gray-600 mt-4">Chave PIX (copie e cole):</p>
          <div className="bg-gray-100 rounded px-4 py-2 mt-1 text-sm font-mono text-gray-800 break-all shadow">
            {chavePix}
          </div>
        </div>

        {/* Botão de voltar */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Voltar para o início
        </button>

        {/* Logo da AMA */}
        <div className="mt-10 flex justify-center">
          <img
            src="/img/LogoAma.png"
            alt="Logo AMA"
            className="h-20 md:h-24 object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
