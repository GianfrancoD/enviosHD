import { Clipboard, Package, Truck, Waypoints } from "lucide-react";

export function SimpleSteps() {
  const steps = [
    {
      icon: <Clipboard className="w-12 h-12 text-white" />,
      title: "1. Cotice su envío",
      description:
        "Use nuestra calculadora en línea para obtener una cotización instantánea.",
    },
    {
      icon: <Package className="w-12 h-12 text-white" />,
      title: "2. Prepare su paquete",
      description:
        "Empaque su envío siguiendo nuestras guías para garantizar su seguridad.",
    },
    {
      icon: <Truck className="w-12 h-12 text-white" />,
      title: "3. Envíe y rastree",
      description:
        "Coordine la recolección y siga su envío en tiempo real hasta su destino.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue-100/[0.2] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent font-serif">
          <Waypoints className="text-[#f4de39] w-11 h-11 inline-block mx-2" />3
          Sencillos Pasos
        </h2>
        <p className="text-xl text-center mb-16 max-w-2xl mx-auto text-gray-400 font-thin">
          Descubre cómo nuestro proceso simplifica tus envíos internacionales
        </p>
        <div className="grid md:grid-cols-3 gap-8 font-serif">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-t from-[#FFAE00] to-[#F9E866]  rounded-full flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-black">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
