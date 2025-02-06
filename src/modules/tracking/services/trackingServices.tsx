import axios from "axios";
import { TrackingHelper } from "../helpers/trackingHelper";

export const handleServices = async (
  e: React.FormEvent,
  state: any,
  setState: React.Dispatch<React.SetStateAction<TrackingHelper>>
) => {
  e.preventDefault();
  setState((prev) => ({ ...prev, loading: true, error: null }));

  try {
    const response = await axios.post(
      `https://api.enviosuramerica.com/services-web/tracking-guia`,
      { guia: state.trackingNumber },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response from API:", response.data);

    if (response.status === 200) {
      const data = response.data;
      if (data.status === "ok") {
        console.log(data.tracking);
        setState((prev) => ({
          ...prev,
          trackingResult: data.tracking,
          loading: false,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          trackingResult: null,
          error: data.mensaje || "Error desconocido",
          loading: false,
        }));
      }
    } else {
      throw new Error(`HTTP error status ${response.status}`);
    }
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    setState((prev) => ({
      ...prev,
      error: "No se pudo obtener información del seguimiento.",
      loading: false,
    }));
  }
};
