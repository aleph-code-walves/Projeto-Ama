import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VideoAutoPlay from '../components/assests/videoAutoplay';

const sliderMidias = [
  {
    midia: '/img/FotoPraia01.jpg',
    tipo: 'imagem',
    titulo: 'Crianças no surf',
    descricao: 'Alegria e superação nas ondas!',
  },
  {
    midia: '/img/FotoPraia02.jpg',
    tipo: 'imagem',
    titulo: 'Inclusão com esporte',
    descricao: 'Crianças participando com entusiasmo.',
  },
  {
    midia: '/img/FotoPraia03.jpg',
    tipo: 'imagem',
    titulo: 'União e diversão',
    descricao: 'Convivência, confiança e amizade.',
  },
];

export default function Projetos() {
  return (
    <div
    className="min-h-screen p-8 bg-cover bg-center"
    style={{ backgroundImage: "url('/img/capaTeste_.jpg')" }} // ajuste o caminho da imagem
  >
      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
          Nossos Projetos e Dia a dia💖
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Descubra os projetos que transformam vidas por meio do amor, da inclusão e da dedicação.
        </p>
      </div>

      {/* Seção Surf sem limites */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-20">
        {/* Vídeo */}
        <div className="md:w-2/3 w-full bg-black flex items-center justify-center h-[360px] md:h-[500px] overflow-hidden">
          <video
            src="/videos/surf_edit.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="transform rotate-[270deg] h-[700px] w-auto object-cover"
          />
        </div>

        {/* Texto + Slide */}
        <div className="md:w-1/3 w-full p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Surf sem limites</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Um projeto que une esporte e inclusão, proporcionando experiências inesquecíveis para crianças e adultos com autismo.
            Uma jornada de superação, confiança e conexão com a natureza.
          </p>

          {/* Slide interno */}
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full h-[250px]"
          >
            {sliderMidias.map((item, index) => (
              <SwiperSlide key={index} className="rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-[180px]">
                  {item.tipo === 'imagem' ? (
                    <img
                      src={item.midia}
                      alt={item.titulo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <VideoAutoPlay src={item.midia} />
                  )}
                </div>
                <div className="mt-2 px-2 text-center">
                  <h4 className="text-sm font-semibold text-blue-900">{item.titulo}</h4>
                  <p className="text-xs text-gray-600">{item.descricao}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Texto acima do slide geral */}
      <div className="max-w-3xl mx-auto text-center my-5 px-2">
        <h3 className="text-2xl font-bold text-blue-900 mb-1">Conheça nossos momentos especiais 📸</h3>
        <p className="text-gray-700 text-base">
          Aqui estão alguns registros de atividades e eventos que mostram a alegria e a transformação que nossos projetos proporcionam.
        </p>
      </div>

      {/* Slide Geral (mantido como estava) */}
      <div className="flex justify-center">
        
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          className="max-w-[360px] w-full h-[620px]"
        >
          {[
            {
              midia: '/img/FOTO01.jpg',
              tipo: 'imagem',
              titulo: 'Semana do meio Ambiente',
              descricao: 'Promovemos atividades lúdicas e educativas com as crianças...',
            },
            {
              midia: '/img/Fot002Semana do meio ambiente.jpg',
              tipo: 'imagem',
              titulo: 'Semana do meio Ambiente',
              descricao: 'como plantio...',
            },
            {
              midia: '/img/Foto03.jpg',
              tipo: 'imagem',
              titulo: 'Semana do meio Ambiente',
              descricao: 'e reciclagem com criatividade.',
            },
            
            {
              midia: '/videos/Pascoa.mp4',
              tipo: 'video',
              titulo: 'Nossa atividade de pascoa',
              descricao: 'Buscar a socialização, estimular a criatividade, desenvolver habilidades motoras e sociais.',
            },
            {
              midia: '/videos/Dia Dinamica com os alimentos.mp4',
              tipo: 'video',
              titulo: 'Dinâmica com os alimentos',
              descricao: 'Amarelinha dos Alimentos, estimular a alimentação saudável.',
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <div className="w-full h-[500px] bg-black rounded-xl overflow-hidden shadow-lg">
                {item.tipo === 'imagem' ? (
                  <img
                    src={item.midia}
                    alt={item.titulo}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <VideoAutoPlay src={item.midia} />
                )}
              </div>
              <div className="mt-2 text-center px-4">
                <h3 className="text-xl font-extrabold text-blue-900 mb-2">{item.titulo}</h3>
                <p className="text-gray-700 text-sm">{item.descricao}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
