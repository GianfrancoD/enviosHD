import { useState } from "react";
import { Menu, X } from "lucide-react";
import logotipos from "../../assets/logoHD.jpeg";
import { scrollToAll } from "../../services/scrollServices";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const Viewes = () => {
  //   window.open("/En ENVIOS HD.pdf", "_blank");
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToAll("hero")}
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <img
              src={logotipos}
              alt="Suramérica Cargo"
              className="h-[10vh] w-auto rounded-lg"
            />
          </button>
          <nav className="hidden md:flex space-x-8">
            {[
              "Servicios",
              "Calculadora",
              "Seguimiento",
              "Oficinas",
              "Quiénes Somos",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToAll(item.toLowerCase().replace(" ", "-"))
                }
                className="text-black hover:text-black/50 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollToAll("footer")}
            className="hidden md:block bg-gradient-to-t from-[#FFAE00] to-[#F9E866] text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors "
          >
            Contacto
          </button>
          <button
            className="md:hidden text-yellow-500"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-4">
            {[
              "Quiénes Somos",
              "Servicios",
              "Calculadora",
              "Seguimiento",
              "Oficinas",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToAll(item.toLowerCase().replace(" ", "-"))
                }
                className="py-2 text-black hover:text-gray-500/70 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToAll("footer")}
              className="mt-4 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] text-black px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Contacto
            </button>
            {/* <div className="flex gap-1 relative mt-8 pt-5 border-t border-grey-500 text-sm min-w-[320px]:w-28 w-auto">
              <Book width={16} />
              <button
                className="text-blue-600 hover:text-blue-700"
                onClick={Viewes}
              >
                Terminos y Condiciones
              </button>
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
}
