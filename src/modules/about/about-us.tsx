export function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-24 bg-gradient-to-b from-background to-blue-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-t from-[#FFAE00]/40 to-[#F9E866]/30 rounded-full -ml-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-500/20 rounded-full -mr-32 -mb-32 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent font-serif">
          Quiénes Somos
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 max-w-2xl mx-auto font-thin">
          ENVIOS HD una empresa dedicada al envío y recepcion de encomiendas
          principalmente entre Venezuela y Perú, trabaja tambien con algunos
          paises de latinoamerica e internacionalmente , contamos con una amplia
          trayectoria que le permite garantizar la seguridad y puntualidad en
          cada entrega.
        </p>
        <div className="grid md:grid-cols-3 gap-12 font-serif">
          {[
            {
              title: "Experiencia",
              description:
                "5 años brindando excelencia logística internacional.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Confiabilidad",
              description:
                "Garantizamos la seguridad y puntualidad de cada envío.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              title: "Cobertura Global",
              description:
                "Red de oficinas y aliados estratégicos en los principales mercados mundiales.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] rounded-full flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-black">
                {item.title}
              </h3>
              <p className="text-center text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
