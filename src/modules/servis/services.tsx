import { Plane, Ship, Truck, Package } from "lucide-react";
import React from "react";

export function Services() {
  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Transporte aereo",
      description:
        "Soluciones globales de transporte aéreo para cargas urgentes",
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Transporte marítimo",
      description:
        "Servicios confiables de transporte marítimo en todo el mundo",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Transporte terrestre",
      description: "Soluciones eficientes de transporte terrestre",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Servicios Express",
      description: "Servicios de entrega rápidos y seguros",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -ml-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mb-32 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones logísticas integrales adaptadas a sus necesidades
            globales
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                {React.cloneElement(service.icon, {
                  className: "h-8 w-8 text-blue-500",
                })}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-blue-600">
                {service.title}
              </h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
