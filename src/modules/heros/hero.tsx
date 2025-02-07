export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_1280.jpg') ",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFAE00]/30 to-black/40" />

      <div className="relative container mx-auto px-4 py-12 text-center z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Conectando Negocios{" "}
          <span className="bg-clip-text text-transparent bg-purple-500 ">
            Internacionalmente
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Soluciones logísticas innovadoras y eficientes para sus envíos
          internacionales en un mundo cada vez más conectado
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#services"
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
          </a>
        </div>
      </div>
    </section>
  );
}
