import { useState } from "react";
import { handleServices } from "./services/trackingServices";
import { TrackingHelper } from "./helpers/trackingHelper";
import { RailSymbol } from "lucide-react";

export const Tracking = () => {
  const [state, setState] = useState<TrackingHelper>({
    trackingNumber: [],
    trackingResult: null,
    loading: false,
    error: null,
  });

  return (
    <section
      id="tracking"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent font-serif">
          Seguimiento de Envío
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center text-lg font-thin">
          Rastrea tu envío en tiempo real y mantente informado sobre su
          ubicación y estado actual.
        </p>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl font-serif">
          <form
            onSubmit={(e) => handleServices(e, state, setState)}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="tracking-number"
                className="block text-sm text-gray-700 mb-1 font-thin"
              >
                Número de Seguimiento
              </label>
              <input
                type="text"
                id="tracking-number"
                value={state.trackingNumber}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    trackingNumber: e.target.value,
                  }))
                }
                placeholder="Ingrese su número de seguimiento"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-gradient-to-t from-[#FFAE00] to-[#F9E866] text-black py-3 px-4 rounded-lg hover:bg-gradient-to-t hover:from-[#FFAE00]/80 hover:to-[#F9E866]/80 transition-colors text-lg font-semibold ${
                state.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={state.loading}
            >
              <RailSymbol className="size-7 inline-block mx-2 mb-0.5t" />
              {state.loading ? "Cargando..." : "Rastrear Envío"}
            </button>
          </form>
          {state.error && <p className="text-red-500">{state.error}</p>}
          {state.trackingResult && state.trackingResult.length > 0 && (
            <div className="mt-8 p-6 bg-[#312760] text-[#fcae60] rounded-lg border-2 border-yellow-500 font-thin">
              <h3 className="text-xl font-semibold bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent mb-2">
                Estado del Envío
              </h3>
              {state.trackingResult.map((item: any, index: number) => (
                <div key={index} className="mb-4 text-white">
                  <p>
                    <strong>Estado:</strong> {item.estado}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {item.descripcion}
                  </p>
                  <p>
                    <strong>Fecha:</strong> {item.fecha}
                  </p>
                </div>
              ))}
            </div>
          )}
          {state.trackingResult && state.trackingResult.length === 0 && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                Estado del Envío
              </h3>
              <p>
                No se encontraron datos para el número de seguimiento ingresado.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
