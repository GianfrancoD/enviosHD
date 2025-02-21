// export type TrackingHelper = {
//   trackingNumber: any;
//   trackingResult: any;
//   loading: boolean;
//   error: string | null;
//   guiaCourier: number | null;
// };
export interface TrackingItem {
  estado: string;
  descripcion: string;
  fecha: string;
}

export interface TrackingHelper {
  trackingNumber: string;
  trackingResult: TrackingItem[] | null;
  loading: boolean;
  error: string | null;
  guiaCourier: number | null;
  guiaReferencia: string;
}
