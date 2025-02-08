import { MapPin, Phone } from "lucide-react";

export const Offices = () => {
  interface Offices {
    city: string;
    Ofice?: string;
    address: string;
    phone?: string;
    icon: JSX.Element;
  }
  const offices: Offices[] = [
    {
      city: "Los olivos",
      Ofice: "Oficina Principal",
      address:
        "Av Naranjal con Av. universitaria Asoc. el Molino. Mz. A Lt. 30. A espaldas del Grifo Primax, a 50 Metros del Colegio Señor de los Milagros",
      phone: "",
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <section id="offices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent mb-4">
            Nuestras Oficinas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos presentes en las principales ciudades para atender tus
            necesidades logísticas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-t from-[#FFAE00]/20 to-[#F9E866]/20 rounded-bl-full"></div>
              <div className="flex items-center mb-4">
                {office.icon}
                <h3 className="text-xl font-semibold ml-2 text-black">
                  {office.city}
                </h3>
                <span className="text-xs px-1 text-white font-bold absolute bg-gray-400 rounded-md top-[3.3rem]">
                  {office.Ofice}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{office.address}</p>
              {office.phone && (
                <p className="text-gray-600 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-400" />
                  {office.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
