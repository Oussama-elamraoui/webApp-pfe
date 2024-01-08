import DeckGL from '@deck.gl/react';
import {SimpleMeshLayer} from '@deck.gl/mesh-layers';
import {CubeGeometry} from '@luma.gl/core'
import M1_data from './M1_data.json'
import maplibregl from 'maplibre-gl';
import {Map,NavigationControl} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect,MapView,FirstPersonView} from '@deck.gl/core';
const INITIAL_VIEW_STATE = {
  longitude: -0.415727,
  latitude: 52.232395,
  zoom: 6.6,
  minZoom: 0,
  maxZoom: 18,
  pitch: 40.5,
  bearing: -27
};
const vertices = [
  // vertex positions in [x, y, z] format
  [-122.45, 37.8, 0],
  [-122.46, 37.8, 0],
  // ... add more vertices
];

const triangles = [
  // indices of the vertices that form triangles
  [0, 1, 2],
  [1, 2, 3],
  // ... add more triangles
];
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';
export default function App({data = M1_data }) {
    
  // Create an array of mesh objects for each data point

  /**
   * Data format:
   * [
   *   {
   *     position: [-122.45, 37.7],
   *     angle: 0,
   *     color: [255, 0, 0]
   *   },
   *   {
   *     position: [-122.46, 37.73],
   *     angle: 90,
   *     color: [0, 255, 0]
   *   },
   *   ...
   * ]
   */
  const layer = new SimpleMeshLayer({
    id: 'simple-mesh-layer',
    data,
    texture: 'texture.png',
    mesh: new CubeGeometry(),
    getPosition: d => [Number(d.X),Number(d.Y)],
    getColor: d => [0,255,0],
    getOrientation: d => [0, 90, 0]
  });

  return(
    <DeckGL mapLib={maplibregl} initialViewState={INITIAL_VIEW_STATE} layers={[layer]} mapStyle={MAP_STYLE } style ={{position:'relative', height:'400px'}}>
    <MapView  width="50%" controller={true}>
  <Map  mapLib={maplibregl} mapStyle={MAP_STYLE } preventStyleDiffing={true} /></MapView>
  </DeckGL>);
}