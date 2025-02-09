interface QualityProps {
  url: string;
}
export const Quality: React.FC<QualityProps> = ({ url }) => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden max-w-full overflow-x-hidden">
      <img
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        // style={{ backgroundImage: `url('${url}')` }}
        src={url}
        alt="nuestro servicios de transporte terrestre son con las mayores seguridad, con reconmendacion garantizada"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFAE00]/90 to-[#F9E866]/90 " />
      <div className="relative flex flex-col items-center text-center z-10">
        <ul className="text-5xl">
          <li className="font-thin ">Siempre avanzamos en el transporte</li>
          <li className="font-bold text-white">
            con calidad y rendimiento al mejor precio
          </li>
        </ul>
      </div>
    </section>
  );
};
