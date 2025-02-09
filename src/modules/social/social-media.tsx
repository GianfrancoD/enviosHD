import { Instagram } from "lucide-react";

type Redes = { id: number; icon: JSX.Element; name: string; url: string };

const redes: Redes[] = [
  // {
  //   id: 1,
  //   name: "facebook",
  //   icon: <Facebook size={32} className="text-blue-600" />,
  //   url: "61557105217820",
  // },
  {
    id: 2,
    name: "instagram",
    icon: <Instagram size={32} className="text-black/50" />,
    url: "envioszoom",
  },
];

export function SocialMedia() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-t from-[#FFAE00]/50 to-[#F9E866]/50 rounded-full -ml-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-500/40 rounded-full -mr-32 -mb-32 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent mb-4 font-serif">
          Conéctate con Nosotros
        </h2>
        <p className="text-xl text-center text-gray-400 mb-12 max-w-2xl mx-auto font-thin">
          Mantente informado sobre nuestras últimas novedades y ofertas
          especiales.
        </p>
        <div className="flex justify-center items-center space-x-8">
          {redes.map((platform) => (
            <a
              key={platform.id}
              href={`https://www.${platform.name}.com/${platform.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-t from-[#FFAE00] to-[#F9E866] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="sr-only">{platform.name}</span>
              {platform.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
