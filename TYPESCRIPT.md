# TypeScript Usage Guide

This guide explains how to use `leaflet-hotline-transparency` as a TypeScript module.

## Installation

```bash
npm install leaflet-hotline-transparency
npm install --save-dev @types/leaflet
```

## TypeScript Configuration

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

## Usage

### ES6 Modules

```typescript
import * as L from 'leaflet';
import 'leaflet-hotline-transparency';

// Create a map
const map = L.map('map').setView([51.505, -0.09], 13);

// Define hotline data with altitude values
const hotlineData: L.LatLng[] = [
  L.latLng(51.5, -0.1, 100),   // lat, lng, altitude
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
```

### CommonJS

```typescript
import * as L from 'leaflet';
const hotlinePlugin = require('leaflet-hotline-transparency');

// Initialize the plugin
hotlinePlugin(L);

// Now use L.hotline as shown above
const hotlineLayer = L.hotline(data, options);
```

## Type Definitions

The module extends Leaflet with the following TypeScript definitions:

### Interfaces

- `L.HotlineOptions` - Configuration options for hotline layers
- `L.LatLng` - Extended to support optional `alt` property for altitude data

### Classes

- `L.Hotline` - The main hotline class extending `L.Polyline`

### Functions

- `L.hotline(latlngs, options)` - Factory function to create hotline instances

## API Reference

### HotlineOptions

```typescript
interface HotlineOptions extends PolylineOptions {
  min?: number;           // Minimum value for color mapping
  max?: number;           // Maximum value for color mapping
  palette?: { [key: number]: string }; // Color palette definition
  weight?: number;        // Line weight in pixels
  outlineColor?: string;  // Outline color
  outlineWidth?: number;  // Outline width in pixels
}
```

### Hotline Class

```typescript
class Hotline extends Polyline {
  constructor(latlngs: LatLng[] | LatLng[][], options?: HotlineOptions);
  getRGBForValue(value: number): [number, number, number];
}
```

## Building

To build the project with TypeScript support:

```bash
npm run build
```

This will:
1. Run linting
2. Generate beautified and minified JavaScript
3. Copy TypeScript declaration files to the dist folder

## Examples

See the `examples/typescript-example.ts` file for a complete working example.
