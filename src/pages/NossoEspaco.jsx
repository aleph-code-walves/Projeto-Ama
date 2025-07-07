import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import './style/NossoEspaco.css';

const fotos = [
  "/img/FotoSede01.jpeg",
  "/img/FotoSede02.jpeg",
  "/img/FotoSede03.jpeg",
  "/img/FotoSede04.jpeg"
];

const NossaSede = () => {
  return (
    <section className="bg-gradient-to-b from-white via-purple-50 to-white px-6 md:px-20 py-20 text-gray-800">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Nosso Espaço</h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Conheça a nossa nova sede! Um espaço planejado com amor, acolhimento e estrutura
          para oferecer o melhor atendimento às famílias e crianças com autismo.
        </p>
      </div>

      <div className="bg-white/90 rounded-xl shadow-lg p-8 text-center max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-30">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            Ambiente acolhedor, equipe dedicada
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Nossa nova sede foi construída pensando no bem-estar de todos que fazem parte da AMA. 
            Oferecemos atendimentos em um espaço confortável, seguro e adaptado, com muito carinho, 
            respeito e profissionalismo. Toda a estrutura foi pensada para fortalecer o desenvolvimento, 
            a inclusão e o acolhimento.
          </p>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="rounded-xl shadow-xl"
          >
            {fotos.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Foto da sede ${i + 1}`}
                  className="w-full h-[640px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-extrabold text-blue-900 mb-6 text-center">Onde estamos</h2>
        <div className="rounded-xl overflow-hidden shadow-xl border-2 border-white">
          <iframe
            title="Localização AMA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.154944618374!2d-48.66053662368701!3d-26.875918076644166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cd411671f287%3A0xba4ae4648cc2b121!2sAMA%20Navegantes%20-%20Associa%C3%A7%C3%A3o%20de%20Pais%20e%20Amigos%20dos%20Autistas!5e0!3m2!1spt-BR!2sbr!4v1720098325801!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default NossaSede;
