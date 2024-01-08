import DeckGL from '@deck.gl/react';
import {SimpleMeshLayer} from '@deck.gl/mesh-layers';
import {CubeGeometry} from '@luma.gl/core'
import M1_data from './M1_data.json'
const INITIAL_VIEW_STATE = {
    longitude: -1.415727,
    latitude: 52.232395,
    zoom: 6.6,
    minZoom: 0,
    maxZoom: 18,
    pitch: 40.5,
    bearing: -27
  };
export default function App({data = M1_data }) {
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
    id: 'mesh-layer',
    data,
    texture: 'texture.png',
    mesh: new CubeGeometry(),
    getPosition: d => [Number(d.Y),Number(d.X)],
    // getColor: d => d.color,
    getOrientation: d => [0, 90, 0]
  });

  return <DeckGL initialViewState={INITIAL_VIEW_STATE} layers={[layer]}  style ={{position:'relative', height:'400px'}}/>;
}