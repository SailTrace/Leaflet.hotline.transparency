// Type definitions for leaflet-hotline-transparency
// Definitions by: Nikolas Molinari

declare module 'leaflet' {
  interface PolylineOptions {
    min?: number;
    max?: number;
    palette?: { [key: number]: string };
    outlineColor?: string;
    outlineWidth?: number;
  }

  interface LatLng {
    alt?: number;
  }

  namespace L {
    interface HotlineOptions extends PolylineOptions {
      min?: number;
      max?: number;
      palette?: { [key: number]: string };
      weight?: number;
      outlineColor?: string;
      outlineWidth?: number;
    }

    class Hotline extends Polyline {
      constructor(latlngs: LatLng[] | LatLng[][], options?: HotlineOptions);
      getRGBForValue(value: number): [number, number, number];
    }

    function hotline(latlngs: LatLng[] | LatLng[][], options?: HotlineOptions): Hotline;
  }
}

// Module export for CommonJS
declare module 'leaflet-hotline-transparency' {
  function leafletHotlineTransparency(L: any): any;
  export = leafletHotlineTransparency;
}
