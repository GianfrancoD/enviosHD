import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import logotipoFooter from "../../assets/logoHD.jpeg";

export function Footer() {
  // const Viewes = () => {
  //   window.open("/En ENVIOS HD.pdf", "_blank");
  // };
  return (
    <footer
      className="bg-gradient-to-t from-yellow-500 text-gray-500/90 py-16 font-serif"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 max-[768px]:place-content-center max-[768px]:place-items-center">
          <div className="space-y-4 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center">
            <img
              src={logotipoFooter}
              alt="Suramérica Cargo"
              className="h-[15vh] max-[768px]:h-[10vh] w-auto max-[768px]:w-[50vw] bg-white rounded-xl"
            />
            <p className="text-gray-500/90 max-[768px]:text-center">
              Conectando negocios globalmente con soluciones logísticas
              innovadoras.
            </p>
          </div>
          <div className="space-y-4 max-[768px]:text-center">
            <h3 className="text-xl font-semibold mb-2">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-500/90 hover:text-white transition-colors"
                >
                  Envío Aéreo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-500/90 hover:text-white transition-colors"
                >
                  Envío Marítimo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-500/90 hover:text-white transition-colors"
                >
                  Envío Terrestre
                </a>
              </li>
            </ul>
            {/* <div className="relative mt-12 pt-5 border-t border-white/50 text-sm min-w-[320px]:w-28 w-28">
              <button
                className="text-blue-100/50 hover:text-blue-800"
                onClick={Viewes}
              >
                Terminos y Condiciones
              </button>
            </div> */}
          </div>
          <div className="space-y-4 max-[768px]:text-center">
            <h3 className="text-xl font-semibold mb-2">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center max-[768px]:justify-center">
                <Phone size={18} className="mr-2" />
                <span>932183374-929185849</span>
              </li>
              <li className="flex items-center max-[768px]:flex max-[768px]:justify-center">
                <Mail size={18} className="mr-2" />
                <span>None</span>
              </li>
              <li className="flex items-center max-[768px]:flex max-[768px]:justify-center">
                <MapPin size={18} className="mr-2" />
                <span>Asoc. El Molino. Mz. A Lt 30.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center">
            <h3 className="text-xl font-semibold mb-2 max-[768px]:text-center">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              {/* <a
                href="https://www.facebook.com/people/Envios-Internacionales/61557105217820/"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a> */}

              <a
                href="https://www.instagram.com/envioshd_oficial/"
                className="bg-gradient-to-t from-yellow-500 text-gray-500/90 p-2 rounded-full hover:bg-blue-200 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-orange-700 text-center text-sm text-black font-black">
          © {new Date().getFullYear()} EnviosHD. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
