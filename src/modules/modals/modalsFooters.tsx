import { X } from "lucide-react";
import type React from "react";
// import { Download } from "../dowloadArchive";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const TermsModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const fileLink = "/terminos2.pdf";
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        // onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-screen-xl mx-4 max-h-[70vh] overflow-y-auto z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-500">
          Términos y Condiciones
        </h2>

        <iframe
          src={fileLink}
          width="100%"
          height="500px"
          className="border border-gray-300 rounded"
          title="Términos y Condiciones"
        ></iframe>
        <div className="text-gray-600 space-y-4">
          {/* {children || (
            <>
              <p>
                Bienvenido a nuestros Términos y Condiciones. Por favor, lea
                cuidadosamente antes de usar nuestros servicios.
              </p>
              <h3 className="text-lg font-semibold text-gray-700">
                1. Aceptación de los Términos
              </h3>
              <p>
                Al acceder o utilizar nuestro servicio, usted acepta estar
                sujeto a estos Términos y Condiciones.
              </p>
              <h3 className="text-lg font-semibold text-gray-700">
                2. Cambios en los Términos
              </h3>
              <p>
                Nos reservamos el derecho de modificar o reemplazar estos
                Términos en cualquier momento.
              </p>
            </>
          )} */}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center max-[425px]:gap-3">
          {/* <Download filename={fileLink} /> */}
          <button
            onClick={onClose}
            className=" mb-2 sm:mb-0 sm:mr-2 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-700 transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
