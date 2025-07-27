import * as L from 'leaflet';
import 'leaflet-hotline-transparency';

// Example TypeScript usage
const map = L.map('map').setView([51.505, -0.09], 13);

// Define hotline data with altitude values
const hotlineData: L.LatLng[] = [
  L.latLng(51.5, -0.1, 100), // lat, lng, altitude
  L.latLng(51.51, -0.1, 150),
  L.latLng(51.52, -0.11, 200),
  L.latLng(51.53, -0.12, 180),
  L.latLng(51.54, -0.13, 120)
];

// Create hotline with TypeScript options
const hotlineOptions: L.HotlineOptions = {
  min: 100,
  max: 200,
  palette: {
    0.0: 'blue',
    0.5: 'yellow', 
    1.0: 'red'
  },
  weight: 5,
  outlineColor: 'black',
  outlineWidth: 1
};

// Create and add hotline to map
const hotlineLayer = L.hotline(hotlineData, hotlineOptions).addTo(map);

// Get RGB values for a specific altitude value
const rgbValues = hotlineLayer.getRGBForValue(150);
console.log('RGB for altitude 150:', rgbValues);
