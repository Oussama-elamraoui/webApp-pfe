import "./widget.css";
import React, {  useRef ,useEffect, useState } from 'react';
import ReactMapGL, { Source, Layer, NavigationControl, FullscreenControl, AttributionControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { daysData } from "./widgetData";
import ProgressBarComp from "../ProgressBar/Progressbar";
import { heatmapLayer } from './map-style';
import M1_data from "./M1_data.json"
import All_data from "./All_data.json"
import {createRoot} from 'react-dom/client';
import {Map} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import Ap from './roads';
import App from './heatmap3d.jsx'
import HeatMap from './heatmap.jsx'
import {csv} from 'd3-request';
import AppChart from './heatmapChart.jsx'
import RadarChart from './RadarChart'
import PieChart from './PieChart'
const olddata = {
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
    ]
}
M1_data.map(data=>{
  olddata.features.push({ "type": "Feature", "properties": { "id": "ak16994521", "mag": 2.3, "time": 1507425650893, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [data.X, data.Y] } })
})
///////////////////////// deck parameter
const DATA_URL = {
  ACCIDENTS:
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/accidents.csv',
  ROADS: 'https://cycling.data.tfl.gov.uk/CycleRoutes/CycleRoutes.json'
};
const formatRow = d => ({
  ...d,
  incidents: Number(d.incidents),
  fatalities: Number(d.fatalities)
});
 var accidents
 let year
csv(DATA_URL.ACCIDENTS, formatRow, (error, response) => {
  accidents=response;
  year=response[0].year

});  
/////////////////////
export default function Widget() {
  let [blue, green, yellow, red] = ["#5299e0", "#519668", "#FFFF2E", "#DC2626"];
  const [viewport, setViewport] = useState({
    width: 'auto',
    height: 'auto',
    latitude: 51.505, 
    longitude: -0.09,

  });
  const canvasRef = useRef(null);
  const data = All_data.map(d => [Number(d.X), Number(d.Y)])
  return (
    <div>
      {/* title */}

      {/* _________ progressbar parts __________ */}
      {/* <div className="flex flex-col sm:flex-row gap-4 mt-4 border-b border-secondary/50 pb-2"> */}
       {/* <div style={{ width: 'auto', height: '60vh' }}>
        <ReactMapGL

          onViewportChange={setViewport}
          mapboxAccessToken={'pk.eyJ1Ijoib3Vzc2FtYWVsIiwiYSI6ImNsaHJ3Y2NvdzA3cWEzc2xvMW5mM3VtNnAifQ.mkYOKYuimiZTF6_bsTE3vg'}
          mapStyle={'mapbox://styles/oussamael/clhsushm4000v01pghifochzc'}
          maxZoom={18}
          minZoom={0}
          scrollZoom={'true'}
          attributionControl={false}
        ><NavigationControl />
          <GeolocateControl/>
          <AttributionControl customAttribution="Ai Movement" />
          <FullscreenControl />
          {olddata && (
            <Source type="geojson " data={olddata}>
              
              <Layer
                id="heatmap-layer"
                type="heatmap"
                source="heatmap-data"
                paint={{
                  'heatmap-opacity': 0.75,
                  'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0,
                    'rgba(0, 0, 255, 0)',
                    0.1,
                    'rgb(0, 0, 255)',
                    0.3,
                    'rgb(0, 255, 0)',
                    0.5,
                    'yellow',
                    0.7,
                    'rgb(255, 0, 0)',
                    1,
                    'rgba(255, 0, 0, 1)'
                  ],
                  'heatmap-radius': 10,
                  'heatmap-intensity': 2
                }}
              />
            </Source>
          )}
         Add other map components, layers, and markers as needed
        </ReactMapGL>

      </div> */}
      
      <div style={{ width: '1020px', height: '60vh',overflow:'hidden',boxShadow:'0px 30px 60px -5px #000', borderRadius: '20px'  }}> <App data={data}/></div>

      <div style={{ width: '440px', height: '60vh',overflow:'hidden',float:'left',boxShadow:'0px 30px 60px -5px #000', borderRadius: '20px',marginTop:'10px' }}><HeatMap data={data}/></div>
      <div style={{ width: '560px', height: '60vh',overflow:'hidden',float:'right',boxShadow:'0px 30px 60px -5px #000', borderRadius: '20px', marginTop:'10px'}}> <PieChart></PieChart></div>
      <div style={{ width: '1020px', height: '60vh',overflow:'hidden',boxShadow:'0px 30px 60px -5px #000', borderRadius: '20px', marginTop:'420px'}}><AppChart></AppChart></div>
 
      {/* <Ap/>
      <Heat/> */}
      {/* <Ap accidents={accidents} year='5'/> */}
      
      {/* <div className="flex-side">
        
          <div className="flex-child">
            <div className="widget-title border-blue ">

            </div>

            <div className="widget-title border-red">

            </div>
          </div>
       
          {daysData.map((item) => {
            return (
              <div key={item.day} className="flex justify-between mt-1">
                <p>{item.day}</p>
                <div className="w-2/3 h-1 mt-2">
                  <ProgressBarComp completed={item.newClient} color={blue} />
                  <ProgressBarComp completed={item.recuingClient} color={red} />
                </div>
              </div>
            );
          })}
        </div> */}


      {/* <div className="flex-side data-right"> */}
      {/* <div className="flex-child">
            <div className="widget-title border-yellow">

            </div>
            <div className="widget-title border-green">

            </div>
          </div> */}

      {/* _____ gender DATA ______ */}
      {/* male */}
      {/* <div className="mt-1">
            <p>
              <FaceIcon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Male
            </p>
            <ProgressBarComp completed={43} color={yellow} />
          </div> */}
      {/* female */}
      {/* <div className="mt-2">
            <p>
              <Face4Icon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Female
            </p>
            <ProgressBarComp completed={52} color={yellow} />
          </div> */}
      {/* _____ social media DATA ______ */}
      {/* Organic Search */}
      {/* <div className="mt-6 ">
            <p>
              <GoogleIcon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Organic Search
            </p>
            <ProgressBarComp completed={56} color={green} />
          </div> */}
      {/* Twitter */}
      {/* <div className="mt-1">
            <p>
              <TwitterIcon className="relative bottom-[4px]" fontSize="small" />
              &nbsp; Twitter
            </p>
            <ProgressBarComp completed={15} color={green} />
          </div> */}
      {/* LinkedIn */}
      {/* <div className="mt-1">
            <p>
              <LinkedInIcon
                className="relative bottom-[4px]"
                fontSize="small"
              />
              &nbsp; LinkedIn
            </p>
            <ProgressBarComp completed={11} color={green} />
          </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
