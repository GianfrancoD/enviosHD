"use client";

import { useState } from "react";

export function ShippingCalculator() {
  const [result, setResult] = useState<number | null>(null);
  const [shippingType, setShippingType] = useState<string>("aereo");
  const [weight, setWeight] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState<{
    length: number;
    width: number;
    height: number;
  }>({ length: 0, width: 0, height: 0 });

  type Country =
    | "colombia"
    | "peru"
    | "ecuador"
    | "usa"
    | "spain"
    | "china"
    | "venezuela";

  const [originCountry, setOriginCountry] = useState<Country | "">("");
  const [destinationCountry, setDestinationCountry] = useState<Country | "">(
    ""
  );

  const shippingRates: Record<
    Country,
    { aereo: number; maritimo: number; terrestre: number }
  > = {
    colombia: { aereo: 0, maritimo: 0, terrestre: 0 },
    peru: { aereo: 0, maritimo: 0, terrestre: 0 },
    ecuador: { aereo: 0, maritimo: 0, terrestre: 0 },
    usa: { aereo: 0, maritimo: 0, terrestre: 0 },
    spain: { aereo: 0, maritimo: 0, terrestre: 0 },
    china: { aereo: 0, maritimo: 0, terrestre: 0 },
    venezuela: { aereo: 0, maritimo: 0, terrestre: 0 },
  };

  const calculateShipping = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      weight === null ||
      weight <= 0 ||
      dimensions.length <= 0 ||
      dimensions.width <= 0 ||
      dimensions.height <= 0
    ) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    const volume = dimensions.length * dimensions.width * dimensions.height;
    let cost = 0;

    const originRates = shippingRates[originCountry as Country];
    const destinationRates = shippingRates[destinationCountry as Country];

    if (!originRates || !destinationRates) {
      alert("Por favor selecciona países válidos.");
      return;
    }

    switch (shippingType) {
      case "aereo":
        cost = originRates.aereo * weight + volume / 5000 / 10.9;
        break;
      case "maritimo":
        cost = originRates.maritimo * weight + volume / 5000 / 9;
        break;
      case "terrestre":
        cost = originRates.terrestre * weight + volume / 5000 / 10.5;
        break;
      default:
        break;
    }

    setResult(Math.round(cost));
  };

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent font-serif">
          Calculadora de Envíos
        </h2>
        <p className="text-gray-400 max-w-[50vw] mx-auto my-5 text-center font-thin">
          Con nuestra calculadora, podrás conocer el costo de tu envío de forma
          rápida y sencilla. Solo elige el tipo de cálculo e ingresa las
          dimensiones y el peso de tu caja.
        </p>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <div className="flex justify-center space-x-4 font-serif">
              {["aereo", "maritimo", "terrestre"].map((type) => (
                <button
                  key={type}
                  onClick={() => setShippingType(type)}
                  className={`px-4 py-2 rounded-full ${
                    shippingType === type
                      ? "bg-gradient-to-t from-[#FFAE00]/30 to-[#F9E866]/30 text-black/20"
                      : "bg-gradient-to-t from-[#FFAE00] to-[#F9E866] text-black hover:text-white drop-shadow-lg"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={calculateShipping} className="space-y-6 font-serif">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="origin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Origen
                </label>
                <select
                  id="origin"
                  value={originCountry}
                  onChange={(e) => setOriginCountry(e.target.value as Country)}
                  className=" w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary ursor-pointer"
                >
                  <option value="">Seleccionar origen</option>
                  <option value="colombia">Colombia</option>
                  <option value="peru">Perú</option>
                  <option value="ecuador">Ecuador</option>
                  <option value="china">China</option>
                  <option value="usa">Estados Unidos</option>
                  <option value="spain">España</option>
                  <option value="venezuela">Venezuela</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Destino
                </label>
                <select
                  id="destination"
                  value={destinationCountry}
                  onChange={(e) =>
                    setDestinationCountry(e.target.value as Country)
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Seleccionar destino</option>
                  <option value="usa">Estados Unidos</option>
                  <option value="spain">España</option>
                  <option value="china">China</option>
                  <option value="colombia">Colombia</option>
                  <option value="peru">Perú</option>
                  <option value="ecuador">Ecuador</option>
                  <option value="venezuela">Venezuela</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Peso (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="dimensions"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Dimensiones (cm)
                </label>

                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    placeholder="Largo"
                    min="0"
                    onChange={(e) =>
                      setDimensions({
                        ...dimensions,
                        length: parseFloat(e.target.value),
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <input
                    type="number"
                    placeholder="Ancho"
                    min="0"
                    onChange={(e) =>
                      setDimensions({
                        ...dimensions,
                        width: parseFloat(e.target.value),
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <input
                    type="number"
                    placeholder="Alto"
                    min="0"
                    onChange={(e) =>
                      setDimensions({
                        ...dimensions,
                        height: parseFloat(e.target.value),
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-t from-[#FFAE00] to-[#F9E866] text-gray-700 py-2 px-4 rounded-md hover:from-[#FFAE00]/80 hover:to-[#F9E866]/80 transition-colors"
            >
              Calcular Costo
            </button>
          </form>
          {result && (
            <div className="mt-6 p-4 bg-accent/10 rounded-lg text-secondary font-serif">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">
                  Costo Estimado:
                </span>
                <span className="text-2xl font-bold text-gray-700 bg-gradient-to-b from-white via-yellow-400 to-white rounded-lg py-3 px-4">
                  ${result.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
