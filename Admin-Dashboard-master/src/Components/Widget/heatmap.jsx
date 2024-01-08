import React from 'react';
import Box from "@mui/material/Box";
import {createRoot} from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css'
import {Map,NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import {AmbientLight, PointLight, LightingEffect,MapView,FirstPersonView} from '@deck.gl/core';
import {HexagonLayer,HeatmapLayer} from '@deck.gl/aggregation-layers';
import {ArcLayer} from '@deck.gl/layers';
import DeckGL from '@deck.gl/react';
import M1_data from './M1_data.json';
import {csv} from 'd3-request';
import All_data from "./All_data.json";
import dataArc from './dataArc.json';
// Source data CSV
const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv'; // eslint-disable-line
const DATA_heat =[]
M1_data.map(data=>{DATA_heat.push([data.X,data.Y])},
)
const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});
const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({ambientLight, pointLight1, pointLight2});

const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51]
};

const INITIAL_VIEW_STATE = {
  longitude: -1.415727,
  latitude: 52.232395,
  zoom: 6.6,
  minZoom: 0,
  maxZoom: 18,
  pitch: 40.5,
  bearing: -27
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

export const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

function getTooltip({object}) {
  if (!object) {
    return null;
  }

  const lat = object.position[1];
  const lng = object.position[0];
  const count = object.points.length;

  return `\
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
    ${count} Accidents`;
}

/* eslint-disable react/no-deprecated */
export default function HeatMap({
  data=DATA_URL,
  dataheat=All_data,
  mapStyle = MAP_STYLE,
  radius = 1000,
  upperPercentile = 100,
  coverage = 1
}) {
  const intensity = 4
  const threshold = 0.04
  const radiusPixels = 30
  const layers = [
    new HeatmapLayer({
      data,
      id: 'heatmp-layer',
      pickable: false,
      getPosition: d => [Number(d[0]), Number(d[1])], 
      getWeight: d => 5,
      radiusPixels,
      intensity,
      threshold
    }),
    // new ArcLayer({
    //   id: 'great-circle-layer',
    //   arclayer,
    //   pickable: true,
    //   getStrokeWidth: 12,
    //   getSourcePosition: d => d.features.geometry.coordinates[0],
    //   getTargetPosition: d => d.features.geometry.coordinates[1],
    //   getSourceColor: [64, 255, 0],
    //   getTargetColor: [0, 128, 200]
    // })
  ];

  return (
  
    <DeckGL
      layers={layers}
      effects={[lightingEffect]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
      id="mapcontainer"
      style ={{position:'relative', height:'400px'}}
    >
      <MapView  width="50%" controller={true}>
      <Map  mapLib={maplibregl} mapStyle={mapStyle} preventStyleDiffing={true} /></MapView>
    </DeckGL>
  );
}

