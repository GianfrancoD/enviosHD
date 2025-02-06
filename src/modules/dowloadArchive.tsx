import { type FC, useState } from "react";
import { FileText } from "lucide-react";

interface DownloadProps {
  filename: string;
  blob?: Blob;
}

export const Download: FC<DownloadProps> = ({ blob, filename }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // const response = await fetch(filename);
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const anchor = document.createElement("a");
      // anchor.href = url;
      // anchor.download = "Terminos-Condiciones.pdf";
      // anchor.click();
      window.open(filename, "_blank");
      // setTimeout(() => {
      //   window.URL.revokeObjectURL(filename);
      // }, 100);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-400"
    >
      {isLoading ? (
        "Descargando..."
      ) : (
        <>
          <FileText size={20} className="mr-2" />
          Leer PDF
        </>
      )}
    </button>
  );
};
