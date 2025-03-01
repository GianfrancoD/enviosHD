interface Image {
  urls: string;
}

export const Calidad: React.FC<Image> = ({ urls }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden max-w-full overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${urls}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90  to-yellow-500/20  " />

      <div className="relative container mx-auto px-4 py-12 text-center z-10 flex flex-col items-center justify-center h-full">
        <ul className="text-xl z-50">
          <li className="text-4xl text-white font-bold mb-4 leading-tight ">
            Tenga la seguridad de que su carga está en buenas manos
            <p className="bg-gradient-to-t from-[#FFAE00] to-[#F9E866] bg-clip-text text-transparent">
              100% Responsables
            </p>
          </li>
          <li className="text-white bg-clip-text text-transparent font-thin text-md max-[425px]:mx-10 max-[320px]:mx-auto mx-20 my-10">
            Muchos de proyectos se han concretado gracias a la buena gestion de
            nuestra empresa, líder en el área. Estamos comprometidos brindar un
            servicio oportuno y de calidad a cada nuestros clientes.
          </li>
        </ul>
      </div>
    </section>
  );
};
