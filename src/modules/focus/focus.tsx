import { useState } from "react";
import banderas from "../../assets/banderas.png";
import suramerica from "../../assets/suramerica.jpeg";

type Images = { src: string; alt: string; title: string; description: string };
export function FeaturedImages() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images: Images[] = [
    {
      src: banderas,
      alt: "Logística Global",
      title: "Logística Global",
      description:
        "Soluciones de transporte internacional eficientes y confiables.",
    },
    {
      src: suramerica,
      alt: "Tecnología Avanzada",
      title: "Tecnología Avanzada",
      description: "Sistemas de seguimiento y gestión de última generación.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue-100/[0.2] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent">
          Nuestro operadores logística
        </h2>
        <p className="text-xl text-center mb-16 text-gray-400 max-w-3xl mx-auto">
          Combinamos experiencia logística con tecnología de vanguardia para
          ofrecer soluciones de transporte excepcionales
        </p>
        <div className="grid md:grid-cols-2 gap-12 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl group"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-full transition-transform duration-500 transform group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-gray-500/90 to-transparent flex items-end p-8 transition-all duration-300 ${
                  hoveredImage === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-blue-100 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
