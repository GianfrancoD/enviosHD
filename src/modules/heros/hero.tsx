import { scrollToAll } from "../../services/scrollServices";

import banderaItaliana from "../../assets/banderaITALIA2.png";
import banderaAlemana from "../../assets/banderaALEMAN2.png";
import banderaChina from "../../assets/banderaCHINA2.png";
import banderaMexicana from "../../assets/banderaMEXICANA2.png";
import banderaUsa from "../../assets/banderaUSA2.png";
import banderaBrasil from "../../assets/banderaBRASIL2.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* <p className="absolute top-20 text-white z-50">HOLA</p> */}
      <ul className="absolute flex top-16 z-40 justify-center items-center space-x-4 min-[768px]:text-5xl max-[425px]:text-2xl max-[320px]:text-base">
        <li>
          <img
            className="max-[425px]:w-10 max-[425px]:h-10 w-16 h-16"
            src={banderaItaliana}
            alt="bandera de italia"
          />
        </li>
        <li>
          <img
            className="w-h-20 h-20 max-[425px]:w-12 max-[425px]:h-12"
            src={banderaUsa}
            alt="bandera de estados unidos"
          />
        </li>
        <li>
          <img
            className="w-16 h-16 max-[425px]:w-10 max-[425px]:h-10"
            src={banderaMexicana}
            alt="bandera de mexico"
          />
        </li>
        <li>
          <img
            className="w-16 h-16 max-[425px]:w-10 max-[425px]:h-10"
            src={banderaBrasil}
            alt="bandera de brasil"
          />
        </li>

        <li>
          <img
            className="w-20 h-20 max-[425px]:w-10 max-[425px]:h-10"
            src={banderaAlemana}
            alt="bandera de alemania"
          />
        </li>
        <li>
          <img
            className="w-16 h-16 max-[425px]:w-10 max-[425px]:h-10"
            src={banderaChina}
            alt="bandera de china"
          />
        </li>
      </ul>

      <img
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        src="https://cdn.pixabay.com/photo/2017/12/15/22/25/hamburg-3021820_1280.jpg"
        alt="Envios maritimos a nivel internacional, con total seguridad de parte de la empresa de envios"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/70" />
      <div className="relative container mx-auto px-4 py-36 text-center z-10 flex flex-col h-full max-[768px]:items-none max-[768px]:justify-none max-[768px]:py-[10rem] ">
        <h1 className="max-[320px]:text-2xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md font-serif">
          Conectando Negocios{" "}
          <span className="max-[320px]:text-2xl bg-clip-text max-[320px]:text-[1.9rem] text-transparent bg-gradient-to-t from-[#FFAE00] to-[#F9E866] drop-shadow-md font-serif">
            Internacionalmente
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-thin">
          Soluciones logísticas innovadoras y eficientes para sus envíos
          internacionales en un mundo cada vez más conectado
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => scrollToAll("servicios")}
            className="w-full sm:w-auto text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition-all flex items-center justify-center"
          >
            <span>Nuestros Servicios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
