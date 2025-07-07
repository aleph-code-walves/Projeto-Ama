import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NossaHistoria() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1700,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      className="min-h-screen py-22 px-4 md:px-8 bg-[url('/img/capaTeste__.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm bg-opacity-90">
        <div className="flex flex-col md:flex-row">
          {/* Texto */}
          <div className="w-full md:w-1/2 p-8 md:p-10 text-justify">
            <h2 className="text-5xl font-extrabold text-blue-900 mb-6">Nossa História</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>AMA Navegantes</strong> - Associação de Pais e Amigos dos Autistas foi fundada em 15 de junho de 2016. A necessidade de reunir pais e amigos dos autistas surgiu quando a senhora Alessandra Couto Vieira, mãe de uma criança diagnosticada com autismo, deparou-se com o número de crianças diagnosticadas neste município, sem alternativas e apoio à família e atenção à pessoa com TEA.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Uma Associação Civil Filantrópica reconhecida e em pleno crescimento no Estado de Santa Catarina, desenvolve um trabalho de referência oferecendo atendimento especializado nas áreas de educação, cultura, assistência social, saúde, estudo, pesquisa, orientação e conscientização focado na pessoa com TEA, não deixando de oferecer acolhimento e informação às respectivas famílias.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Por compreender que a pessoa com TEA encontra muitas vezes dificuldades para encontrar alternativas de atendimento, e entendendo que uma pessoa com autismo não pode de maneira nenhuma ficar sem receber esses atendimentos, realizamos este projeto para unirmos forças e juntos possamos oferecer a esse público especial um serviço de excelência, oportunizando benefícios grandiosos em suas vidas, conseguindo ampliar a força da inclusão para todos.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md">
              <Slider {...settings}>
                {[
                  "Foto01_fund.jpeg",
                  "Foto02_fund.jpeg",
                  "Foto03_fund.jpeg",
                  "Foto04_fund.jpeg",
                  "Foto05_fund.jpeg",
                  "Foto06_fund.jpeg",
                  "Foto07_fund.jpeg",
                ].map((img, index) => (
                  <div key={index}>
                    <img
                      src={`/img/${img}`}
                      alt={`História ${index + 1}`}
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
